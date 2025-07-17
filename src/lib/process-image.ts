import { db } from "@/server/db";
import { BlobNotFoundError, head, put } from "@vercel/blob";
import { encode } from "blurhash";
import sharp from "sharp";

export async function processImage({
	imageUrl,
	slug,
	type,
}: {
	imageUrl: string;
	slug: string;
	type: "audience" | "product";
}): Promise<{ url: string; blurDataURL: string | null }> {
	let existingImageUrl: string | null = null;
	let existingBlurhash: string | null = null;

	if (type === "audience") {
		const audience = await db.audience.findUnique({
			where: { slug },
		});
		if (audience) {
			existingImageUrl = audience.logoUrl;
			existingBlurhash = audience.logoBlurhash;
		}
	} else if (type === "product") {
		const product = await db.product.findUnique({
			where: { upc: slug },
		});
		if (product) {
			existingImageUrl = product.imageUrl;
			existingBlurhash = product.imageBlurhash;
		}
	}

	if (existingImageUrl?.includes(".public.blob.vercel-storage.com")) {
		if (existingBlurhash) {
			return { url: existingImageUrl, blurDataURL: existingBlurhash };
		}

		const response = await fetch(existingImageUrl, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
			},
		});
		if (!response.ok) {
			throw new Error(`Failed to download image from ${existingImageUrl}: ${response.statusText}`);
		}
		const imageBuffer = await response.arrayBuffer();
		const { data, info } = await sharp(Buffer.from(imageBuffer))
			.raw()
			.ensureAlpha()
			.toBuffer({ resolveWithObject: true });
		const blurhash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
		return { url: existingImageUrl, blurDataURL: blurhash };
	}

	const pathname = `${type}_${slug}.webp`;
	try {
		const blob = await head(pathname);
		const response = await fetch(blob.url, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
			},
		});
		if (!response.ok) {
			throw new Error(`Failed to download image from ${blob.url}: ${response.statusText}`);
		}
		const imageBuffer = await response.arrayBuffer();
		const { data, info } = await sharp(Buffer.from(imageBuffer))
			.raw()
			.ensureAlpha()
			.toBuffer({ resolveWithObject: true });
		const blurhash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
		return { url: blob.url, blurDataURL: blurhash };
	} catch (error) {
		if (!(error instanceof BlobNotFoundError)) {
			throw error;
		}
	}

	const response = await fetch(imageUrl, {
		headers: {
			"User-Agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
		},
	});
	if (!response.ok) {
		throw new Error(`Failed to download image from ${imageUrl}: ${response.statusText}`);
	}
	const imageBuffer = await response.arrayBuffer();

	const image = sharp(Buffer.from(imageBuffer));
	const { data, info } = await image.clone().raw().ensureAlpha().toBuffer({ resolveWithObject: true });

	const blurhash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);

	const webpBuffer = await image.clone().resize(768).webp().toBuffer();

	const blob = await put(pathname, webpBuffer, {
		access: "public",
		contentType: "image/webp",
	});

	return { url: blob.url, blurDataURL: blurhash };
}
