import fs from "node:fs/promises";
import path from "node:path";
import fs from "node:fs/promises";
import path from "node:path";
import fs from "node:fs/promises";r/db";m "next/server";
import sharp from "sharp";

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return new Response("Not allowed", { status: 403 });
	}

	const productsPath = path.join(process.cwd(), "public/assets/products");
	const files = await fs.readdir(productsPath);

	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
			const inputPath = path.join(productsPath, file);
			const baseName = path.basename(file, ext);
			const webpFileName = `${baseName}.webp`;
			const outputPath = path.join(productsPath, webpFileName);

			await sharp(inputPath).resize({ width: 512 }).webp().toFile(outputPath);

			const oldImageUrl = `/assets/products/${file}`;
			const newImageUrl = `/assets/products/${webpFileName}`;

			await db.product.updateMany({
				where: {
					imageUrl: oldImageUrl,
				},
				data: {
					imageUrl: newImageUrl,
				},
			});

			await fs.unlink(inputPath);
		}
	}

	return NextResponse.json({ success: true });
}
