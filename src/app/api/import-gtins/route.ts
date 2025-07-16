import { db } from "@/server/db";
import { parse } from "@fast-csv/parse";
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import pLimit from "p-limit";
import slugify from "slugify";
import z from "zod";

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({ error: "Not allowed" }, { status: 403 });
	}

	await db.product.deleteMany({});

	const filePath = path.join(process.cwd(), "src/app/api/import-gtins/gtins.csv");

	const baseSchema = z.object({
		UPC: z.string(),
		Title: z.string(),
		Description: z.string(),
		Size: z.string().optional(),
		Count: z.string().optional(),
		Dimensions: z.string().optional(),
		Container: z.string().optional(),
		SourceName: z.string().optional(),
		SourceIdentifier: z.string().optional(),
		Image_URL: z.string().optional(),
	});

	const rows = await new Promise<z.infer<typeof baseSchema>[]>((resolve, reject) => {
		const data: z.infer<typeof baseSchema>[] = [];
		fs.createReadStream(filePath)
			.pipe(parse({ headers: true }))
			.on("error", (error) => reject(error))
			.on("data", (row) => {
				const parsedRow = baseSchema.parse(row);
				data.push(parsedRow);
			})
			.on("end", () => resolve(data));
	});

	// Filter duplicate UPCs
	const uniqueRows = rows.filter((row, index, self) => index === self.findIndex((t) => t.UPC === row.UPC));

	const limit = pLimit(50);

	const imageProcessingPromises = uniqueRows
		.filter((row) => row.Image_URL)
		.map((row) =>
			limit(async () => {
				if (!row.Image_URL) {
					return null;
				}

				try {
					const imageNameSlug = slugify(row.Title, { lower: true, strict: true });
					const productsDir = path.join(process.cwd(), "public/assets/products");

					if (!fs.existsSync(productsDir)) {
						fs.mkdirSync(productsDir, { recursive: true });
					}

					const files = fs.readdirSync(productsDir);
					const existingImage = files.find((file) => file.startsWith(`${imageNameSlug}.`));

					let finalImageName: string;

					if (existingImage) {
						finalImageName = existingImage;
					} else {
						const response = await fetch(row.Image_URL);
						if (!response.ok) {
							console.error(`Failed to fetch image for ${row.Title}: ${response.statusText}`);
							return null;
						}

						const contentType = response.headers.get("content-type");

						let extension = contentType?.split("/")[1];
						if (!extension || !["jpeg", "jpg", "png", "webp", "gif"].includes(extension)) {
							const urlPath = new URL(row.Image_URL).pathname;
							const urlExt = path.extname(urlPath).slice(1);
							if (["jpeg", "jpg", "png", "webp", "gif"].includes(urlExt)) {
								extension = urlExt;
							} else {
								extension = "jpg";
							}
						}
						if (extension === "jpeg") {
							extension = "jpg";
						}

						finalImageName = `${imageNameSlug}.${extension}`;
						const imagePath = path.join(productsDir, finalImageName);

						const buffer = await response.arrayBuffer();
						await fs.promises.writeFile(imagePath, Buffer.from(buffer));
					}

					const imageUrl = `/assets/products/${finalImageName}`;

					return { productUpc: row.UPC, imageUrl };
				} catch (error) {
					console.error(`Error processing image for ${row.Title}:`, error);
					return null;
				}
			}),
		);

	const imageResults = (await Promise.all(imageProcessingPromises)).filter(Boolean) as {
		productUpc: string;
		imageUrl: string;
	}[];

	const products = await db.product.createMany({
		data: uniqueRows.map((row) => ({
			upc: `00${row.UPC}`,
			title: row.Title,
			description: row.Description,
			size: row.Size,
			count: Number.isNaN(Number(row.Count)) ? null : Number(row.Count),
			dimensions: row.Dimensions,
			container: row.Container,
			imageUrl: imageResults.find((result) => result.productUpc === row.UPC)?.imageUrl,
		})),
	});

	return NextResponse.json({
		message: "Products imported.",
		products,
	});
}
