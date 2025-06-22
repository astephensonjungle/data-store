import { createGoogleGenerativeAI } from "@ai-sdk/google";
import PromisePool from "@supercharge/promise-pool";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import slugify from "slugify";
import z from "zod";
import data_ from "../seed/data.json";
const google = createGoogleGenerativeAI();

async function generateEmojis({ categories }: { categories: { name: string; slug: string }[] }) {
	const { object: emojis } = await generateObject({
		model: google.languageModel("gemini-2.5-flash-preview-04-17"),
		schema: z.array(
			z.object({
				emoji: z.string(),
				slug: z.string(),
			}),
		),
		prompt: `
      I'm building an app where users can browse products. I want you to generate a list of emojis that are related to the categories.
      These are the categories: ${categories.map((category) => `Name: ${category.name}, Slug: ${category.slug}`).join(", ")}.
      Respond with standard emojis, NEVER with text.
    `,
	});

	return emojis;
}

export async function GET() {
	const data = data_ as {
		baseCategories: {
			name: string;
			slug: string;
		}[];
		subcategories: {
			name: string;
			slug: string;
			baseCategories: string[];
			emoji: string | null;
		}[];
		brands: {
			name: string;
			slug: string;
			logoUrl: string | null;
			domain: string | null;
			subCategories: string[];
		}[];
	};

	const baseCategories = data.baseCategories.map((baseCategory) => ({
		...baseCategory,
		slug: slugify(baseCategory.name, { lower: true, strict: true }),
	}));

	const subcategories = data.subcategories.map((subcategory) => ({
		...subcategory,
		slug: slugify(subcategory.name, { lower: true, strict: true }),
		baseCategories: [...new Set(subcategory.baseCategories)],
	}));

	const brands = data.brands
		.map((brand) => ({
			...brand,
			slug: slugify(brand.name, { lower: true, strict: true }),
			subCategories: [...new Set(brand.subCategories)].map((subCategory) =>
				slugify(subCategory, { lower: true, strict: true }),
			),
		}))
		.filter((brand) => !!brand.logoUrl)
		.map((brand) => ({
			...brand,
			logoUrl: brand.logoUrl?.replace("/w/128/h/128/", "/w/512/h/512/"),
		}));

	// console.log(`Generating brands for ${brands.length} brands...`);

	// const brandsWithLogo = await PromisePool.for(brands)
	// 	.withConcurrency(10)
	// 	.process(async (brand, index) => {
	// 		console.log(`Generating brand ${brand.name} ${index + 1} of ${brands.length}`);
	// 		const brandData = await getBrand(brand.name);
	// 		return { ...brand, logoUrl: brandData?.icon ?? null };
	// 	});

	// Split subcategories into groups of 10
	const subcategoriesGroups = subcategories.reduce(
		(acc, subcategory, index) => {
			const groupIndex = Math.floor(index / 10);
			acc[groupIndex] = acc[groupIndex] || [];
			acc[groupIndex].push(subcategory);
			return acc;
		},
		[] as { name: string; slug: string; baseCategories: string[] }[][],
	);

	const { results: emojis, errors } = await PromisePool.for(subcategoriesGroups)
		.withConcurrency(10)
		.process(async (subcategoryGroup) => {
			const emojis = await generateEmojis({ categories: subcategoryGroup });
			console.log(emojis);
			return emojis;
		});

	console.log(errors);

	for (const emojiGroup of emojis) {
		for (const emoji of emojiGroup) {
			const subCategory = subcategories.find((subcategory) => subcategory.slug === emoji.slug);
			if (subCategory) {
				subCategory.emoji = emoji.emoji;
			}
		}
	}

	return NextResponse.json({ baseCategories, subcategories, brands });
}
