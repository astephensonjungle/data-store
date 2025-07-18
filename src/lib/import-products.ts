import { db } from "@/server/db";
import type { GoogleSpreadsheet } from "google-spreadsheet";
import { processImage } from "./process-image";

export async function importProducts(doc: GoogleSpreadsheet) {
	const sheet = doc.sheetsByTitle.harmonya_master_data;

	if (!sheet) throw new Error("Sheet not found");

	const rows = await sheet.getRows<{
		UPC: string;
		Title: string;
		Description: string;
		Size: string;
		Count: number;
		Dimensions: string | null;
		Claims: string | null;
		Price: number | null;
		Image_URL: string | null;
	}>();

	const rawRows: {
		upc: string;
		title: string;
		description: string;
		size: string;
		count: number;
		dimensions: string | null;
		claims: string | null;
		price: number | null;
		imageUrl: string | null;
	}[] = [];
	for (const row of rows) {
		const upc = row.get("UPC");
		const title = row.get("Title");
		const description = row.get("Description");
		const size = row.get("Size");
		const count = row.get("Count");
		const dimensions = row.get("Dimensions");
		const claims = row.get("Claims");
		const price = row.get("Price");
		const imageUrl = row.get("Image_URL");
		rawRows.push({
			upc,
			title,
			description,
			size,
			count,
			dimensions: dimensions === "" ? null : dimensions,
			claims: claims === "" ? null : claims,
			price: price === "" ? null : price,
			imageUrl: imageUrl === "" ? null : imageUrl,
		});
	}

	const mergedRowsMap = new Map<string, (typeof rawRows)[0]>();

	for (const row of rawRows) {
		const existing = mergedRowsMap.get(row.upc);
		if (!existing) {
			mergedRowsMap.set(row.upc, row);
		} else {
			if (existing.price === null && row.price !== null) {
				existing.price = row.price;
			}
			if (existing.imageUrl === null && row.imageUrl !== null) {
				existing.imageUrl = row.imageUrl;
			}
		}
	}

	const mergedRows = Array.from(mergedRowsMap.values());

	let index = 0;
	for (const row of mergedRows) {
		const upc = `00${row.upc}`;
		console.log("Updating", upc, row.title, index, "of", mergedRows.length);
		index++;
		let imageUrl: string | null = row.imageUrl;
		let blurhash: string | undefined = undefined;

		if (row.imageUrl) {
			try {
				const { url, blurDataURL } = await processImage({
					imageUrl: row.imageUrl,
					slug: upc,
					type: "product",
				});
				imageUrl = url;
				blurhash = blurDataURL ?? undefined;
			} catch (error) {
				console.error(error);
			}
		}

		console.log({ count: row.count });
		await db.product.upsert({
			where: { upc: upc },
			update: {
				title: row.title,
				description: row.description,
				size: row.size,
				count: Number(row.count),
				dimensions: row.dimensions,
				claims: row.claims ? row.claims.split("; ") : [],
				price: Number(row.price),
				imageUrl,
				imageBlurhash: blurhash,
			},
			create: {
				upc: upc,
				title: row.title,
				description: row.description,
				size: row.size,
				count: Number(row.count),
				dimensions: row.dimensions,
				claims: row.claims ? row.claims.split("; ") : [],
				price: Number(row.price),
				imageUrl,
				imageBlurhash: blurhash,
			},
		});
	}
}
