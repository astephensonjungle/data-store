import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import slugify from "slugify";
import z from "zod";

const metadataSchema = z.object({
	logo: z.string(),
	deterministic_cus: z.number(),
	extended_cus: z.number(),
	age_distribution: z.object({
		"+18-24": z.number(),
		"25-34": z.number(),
		"35-44": z.number(),
		"45-54": z.number(),
		"55-64": z.number(),
		"65+": z.number(),
		unknown: z.number(),
	}),
	gender_distribution: z.object({
		male: z.number(),
		female: z.number(),
		unknown: z.number(),
	}),
	retailer_distribution: z.object({
		walmart: z.number(),
		target: z.number(),
		whole_foods: z.number(),
		kroger: z.number(),
		wegmans: z.number(),
		unknown: z.number(),
	}),
	associated_gtins: z.array(z.number()),
});

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

async function createUsers() {
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

export async function GET() {
	if (process.env.NODE_ENV !== "development") {
		return NextResponse.json({
			message: "This endpoint is only available in development mode.",
		});
	}

	const filePath = path.join(process.cwd(), "src/app/api/import-data/audiences.csv");
	const fileContent = await fs.readFile(filePath, "utf-8");
	const rawRows = fileContent.split("\n");

	const rows = rawRows
		.slice(1)
		.filter((row) => row.trim() !== "")
		.map((row) => {
			const [rawName, rawCategories, lookbackWindow, audienceType, ...rawMetadata] = row.split(",");
			const [, name] = rawName.split("-");
			const metadata = metadataSchema.parse(
				JSON.parse(
					rawMetadata
						.join(",")
						.replaceAll(':""""', ':"')
						.replaceAll('""""', '"')
						.replaceAll('"""', "")
						.replaceAll("\r", ""),
				),
			);
			const [, baseCategory, leafCategory] = rawCategories.split("|");

			return {
				rawName,
				name,
				baseCategory,
				leafCategory,
				lookbackWindow,
				audienceType,
				metadata,
			};
		});

	await db.audienceRetailerDistribution.deleteMany({});
	await db.audience.deleteMany({});
	await db.leafCategory.deleteMany({});
	await db.baseCategory.deleteMany({});
	await db.retailer.deleteMany({});
	await db.account.deleteMany({});
	await db.session.deleteMany({});
	await db.user.deleteMany({});

	await createUsers();

	for (const row of rows) {
		const baseCategoryName = row.baseCategory
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
		const baseCategory = await db.baseCategory.upsert({
			where: { name: baseCategoryName },
			update: {},
			create: {
				name: baseCategoryName,
				slug: slugify(row.baseCategory, { lower: true, strict: true }),
			},
		});

		const leafCategoryName = row.leafCategory
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
		const leafCategory = await db.leafCategory.upsert({
			where: {
				name_baseCategoryId: {
					name: leafCategoryName,
					baseCategoryId: baseCategory.id,
				},
			},
			update: {},
			create: {
				name: leafCategoryName,
				slug: slugify(row.leafCategory, { lower: true, strict: true }),
				baseCategoryId: baseCategory.id,
			},
		});

		const audienceName = row.name
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
		const audience = await db.audience.create({
			data: {
				slug: slugify(row.rawName, { lower: true, strict: true }),
				name: audienceName,
				logoUrl: row.metadata.logo,
				deterministicCus: row.metadata.deterministic_cus,
				extendedCus: row.metadata.extended_cus,
				lookbackWindow: row.lookbackWindow,
				audienceType: row.audienceType,
				age18to24: row.metadata.age_distribution["+18-24"],
				age25to34: row.metadata.age_distribution["25-34"],
				age35to44: row.metadata.age_distribution["35-44"],
				age45to54: row.metadata.age_distribution["45-54"],
				age55to64: row.metadata.age_distribution["55-64"],
				age65plus: row.metadata.age_distribution["65+"],
				ageUnknown: row.metadata.age_distribution.unknown,
				genderMale: row.metadata.gender_distribution.male,
				genderFemale: row.metadata.gender_distribution.female,
				genderUnknown: row.metadata.gender_distribution.unknown,
				associatedGtins: row.metadata.associated_gtins.map(String),
				leafCategoryId: leafCategory.id,
			},
		});

		for (const [retailerName_, count] of Object.entries(row.metadata.retailer_distribution)) {
			const retailerName = retailerName_
				.replaceAll("_", " ")
				.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
			const retailer = await db.retailer.upsert({
				where: { name: retailerName },
				update: {},
				create: {
					name: retailerName,
					slug: slugify(retailerName_, { lower: true, strict: true }),
				},
			});

			await db.audienceRetailerDistribution.create({
				data: {
					audienceId: audience.id,
					retailerId: retailer.id,
					count,
				},
			});
		}
	}

	const baseCategories = await db.baseCategory.findMany();
	const leafCategories = await db.leafCategory.findMany();

	for (const baseCategory of baseCategories) {
		const emoji = await generateEmoji(baseCategory.name);
		console.log(`Base category ${baseCategory.name} has emoji ${emoji}`);
		await db.baseCategory.update({
			where: { id: baseCategory.id },
			data: { emoji },
		});
	}

	for (const leafCategory of leafCategories) {
		const emoji = await generateEmoji(leafCategory.name);
		console.log(`Leaf category ${leafCategory.name} has emoji ${emoji}`);
		await db.leafCategory.update({
			where: { id: leafCategory.id },
			data: { emoji },
		});
	}

	return NextResponse.json({
		message: "Data imported successfully.",
		count: rows.length,
	});
}
