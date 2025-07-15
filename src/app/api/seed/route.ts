import { auth } from "@/server/auth";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import slugify from "slugify";
import z from "zod";

const google = createGoogleGenerativeAI();

const baseCategories: { name: string; slug: string }[] = [
	{ name: "Snacks", slug: "snacks" },
	{ name: "Beverages", slug: "beverages" },
];

type SubCategory = {
	name: string;
	slug: string;
	baseCategories: string[];
};

type Brand = {
	name: string;
	slug: string;
	logoUrl: string | null;
	domain: string | null;
	subCategories: string[];
};

async function generateSubCategories() {
	const subCategories: SubCategory[] = [];

	for (const category of baseCategories) {
		const { object: subcategoriesList } = await generateObject({
			model: google.languageModel("gemini-2.0-flash-lite"),
			schema: z.object({
				categories: z.array(z.string()),
			}),
			prompt: `
      I want you to generate some mock data for an app where you should be able to browse products. 
      I want you to generate names of subcategories to the base category ${category.name}.
      The subcategories should be in the same language as the base category. 
      No brands, just generic categories. 
      If the base category is for example "Bevereges" the subcategories could for example be "Soft Drinks", "Alcoholic Drinks", "Water", "Juice", "Coffee", "Tea", "Alcohol", "Energy Drinks", "Other".
      Generate 50 subcategories and return them in a string array.
    `,
		});

		for (const subcategory of subcategoriesList.categories) {
			const existingSubcategory = subCategories.find((s) => s.name === subcategory);
			if (existingSubcategory) {
				existingSubcategory.baseCategories.push(category.slug);
			} else {
				subCategories.push({
					name: subcategory,
					slug: slugify(subcategory, { lower: true, strict: true }),
					baseCategories: [category.slug],
				});
			}
		}
	}

	return subCategories;
}

export async function generateBrands(subCategory: SubCategory) {
	const { object: brandsList } = await generateObject({
		model: google.languageModel("gemini-2.0-flash-lite"),
		schema: z.object({
			brands: z.array(z.string()),
		}),
		prompt: `
      I want you to generate some mock data for an app where you should be able to browse products. 
      I want you to generate names of brands to the subcategory ${subCategory.name}. 
      The brands should be real so I can use them to search for logos.
      Generate 100 brands and return them in a string array.
    `,
	});

	return brandsList.brands;
}

async function generateEmoji(name: string) {
	const { object: emoji } = await generateObject({
		model: google.languageModel("gemini-2.0-flash-lite"),
		schema: z.object({
			emoji: z.string(),
		}),
		prompt: `
      I want you to generate an emoji for a category.
      The emoji should be a single character.
      The name of the category is ${name}.
    `,
	});

	return emoji.emoji;
}

export async function GET() {
	const users = [
		{ name: "Filip Kantedal", email: "filip@shader.se", password: "password" },
		{ name: "Ashley Stephenson", email: "ashley.stephenson@jungledesign.co", password: "password" },
	];

	for (const user of users) {
		await auth.api.signUpEmail({
			body: {
				email: user.email,
				name: user.name,
				password: user.password,
			},
		});
	}
}
