import PromisePool from "@supercharge/promise-pool";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import data from "../seed/data.json";

export async function GET() {
	const brands = data.brands;

	const imageDir = path.join(process.cwd(), "public", "assets", "images");
	await fs.mkdir(imageDir, { recursive: true });

	const { results: downloadedBrands, errors } = await PromisePool.for(brands)
		.withConcurrency(10)
		.process(async (brand, index) => {
			try {
				const webpFilePath = path.join(imageDir, `${brand.slug}.webp`);

				try {
					await fs.access(webpFilePath);
					console.log(`Image for ${brand.name} already exists. Skipping.`);
					return { ...brand, logoUrl: `${brand.slug}.webp` };
				} catch {
					// File doesn't exist, proceed with download.
				}

				console.log(`Downloading image for ${brand.name} ${index + 1}/${brands.length}`);
				const response = await fetch(brand.logoUrl);
				if (!response.ok) {
					console.error(`Failed to fetch image for ${brand.name}: ${response.statusText}`);
					return;
				}

				const buffer = await response.arrayBuffer();
				const url = new URL(brand.logoUrl);
				const fileExtension = path.extname(url.pathname) || ".png";

				const fileName = `${brand.slug}${fileExtension}`;
				const filePath = path.join(imageDir, fileName);

				await fs.writeFile(filePath, Buffer.from(buffer));

				return { ...brand, logoUrl: fileName };
			} catch (error) {
				console.error(`Error downloading image for ${brand.name}:`, error);
			}
		});

	console.log(errors);

	return NextResponse.json({
		...data,
		brands: downloadedBrands,
	});
}
