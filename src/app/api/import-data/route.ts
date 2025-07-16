import { seededRandom } from "@/lib/seeded-random";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import pLimit from "p-limit";
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
	associated_gtins: z.array(z.string()),
});

type Row = {
	rawName: string;
	name: string;
	baseCategory: string;
	leafCategory: string;
	lookbackWindow: string;
	audienceType: string;
	metadata: z.infer<typeof metadataSchema>;
};

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

	const rows: Row[] = rawRows
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

	await db.savedAudience.deleteMany({});
	await db.audienceRetailerDistribution.deleteMany({});
	await db.audience.deleteMany({});
	await db.leafCategory.deleteMany({});
	await db.baseCategory.deleteMany({});
	await db.retailer.deleteMany({});
	await db.account.deleteMany({});
	await db.session.deleteMany({});
	await db.user.deleteMany({});

	await createUsers();

	const categories = new Map<string, Set<string>>();
	for (const row of rows) {
		if (!categories.has(row.baseCategory)) {
			categories.set(row.baseCategory, new Set());
		}
		const categorySet = categories.get(row.baseCategory);
		if (categorySet) {
			categorySet.add(row.leafCategory);
		}
	}

	const leafCategoriesMap = new Map<string, { id: string }>();

	for (const [baseCategoryName, leafCategoryNames] of categories.entries()) {
		const formattedBaseCategoryName = baseCategoryName
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());

		const baseCategory = await db.baseCategory.upsert({
			where: { name: formattedBaseCategoryName },
			update: {},
			create: {
				name: formattedBaseCategoryName,
				slug: slugify(baseCategoryName, { lower: true, strict: true }),
			},
		});

		for (const leafCategoryName of leafCategoryNames) {
			const formattedLeafCategoryName = leafCategoryName
				.replaceAll("_", " ")
				.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
			const leafCategory = await db.leafCategory.upsert({
				where: {
					name_baseCategoryId: {
						name: formattedLeafCategoryName,
						baseCategoryId: baseCategory.id,
					},
				},
				update: {},
				create: {
					name: formattedLeafCategoryName,
					slug: slugify(leafCategoryName, { lower: true, strict: true }),
					baseCategoryId: baseCategory.id,
				},
			});
			leafCategoriesMap.set(`${baseCategoryName}|${leafCategoryName}`, leafCategory);
		}
	}

	const retailerNames = new Set<string>();
	for (const row of rows) {
		for (const retailerName of Object.keys(row.metadata.retailer_distribution)) {
			retailerNames.add(retailerName);
		}
	}

	const retailersMap = new Map<string, { id: string; slug: string; name: string }>();
	for (const retailerName of retailerNames) {
		const formattedRetailerName = retailerName
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
		const retailer = await db.retailer.upsert({
			where: { name: formattedRetailerName },
			update: {},
			create: {
				name: formattedRetailerName,
				slug: slugify(retailerName, { lower: true, strict: true }),
			},
		});
		retailersMap.set(retailerName, retailer);
	}

	async function processAudience(row: Row) {
		const leafCategory = leafCategoriesMap.get(`${row.baseCategory}|${row.leafCategory}`);

		if (!leafCategory) {
			throw new Error(`Could not find category for row: ${row.name}`);
		}

		const audienceName = row.name
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());

		const baseSlug = row.rawName.split("-")[1] || row.rawName;
		const audienceSlug = slugify(baseSlug, { lower: true, strict: true });
		console.log("processing audience", row.name, audienceSlug);

		const consumers = Math.round(seededRandom(audienceSlug) * 50 * 1_000_000);
		const extended1year = row.metadata.extended_cus === 42 ? consumers * 12 : row.metadata.extended_cus;
		const deterministic1year = row.metadata.deterministic_cus === 42 ? consumers * 4 : row.metadata.deterministic_cus;
		const extended90days = extended1year / 3;
		const deterministic90days = deterministic1year / 4;

		let ageDistribution: Record<
			"age18to24" | "age25to34" | "age35to44" | "age45to54" | "age55to64" | "age65plus" | "ageUnknown",
			number
		>;
		if (row.metadata.age_distribution["+18-24"] === 42) {
			const ageValues = {
				"18-24": Math.round(seededRandom(`${audienceSlug}-age-18-24`) * 10000),
				"25-34": Math.round(seededRandom(`${audienceSlug}-age-25-34`) * 10000),
				"35-44": Math.round(seededRandom(`${audienceSlug}-age-35-44`) * 10000),
				"45-54": Math.round(seededRandom(`${audienceSlug}-age-45-54`) * 10000),
				"55-64": Math.round(seededRandom(`${audienceSlug}-age-55-64`) * 10000),
				"65+": Math.round(seededRandom(`${audienceSlug}-age-65+`) * 10000),
				unknown: Math.round(seededRandom(`${audienceSlug}-age-unknown`) * 10000),
			};
			ageDistribution = {
				age18to24: ageValues["18-24"],
				age25to34: ageValues["25-34"],
				age35to44: ageValues["35-44"],
				age45to54: ageValues["45-54"],
				age55to64: ageValues["55-64"],
				age65plus: ageValues["65+"],
				ageUnknown: ageValues.unknown,
			};
		} else {
			ageDistribution = {
				age18to24: row.metadata.age_distribution["+18-24"],
				age25to34: row.metadata.age_distribution["25-34"],
				age35to44: row.metadata.age_distribution["35-44"],
				age45to54: row.metadata.age_distribution["45-54"],
				age55to64: row.metadata.age_distribution["55-64"],
				age65plus: row.metadata.age_distribution["65+"],
				ageUnknown: row.metadata.age_distribution.unknown,
			};
		}

		let genderDistribution: Record<"genderMale" | "genderFemale" | "genderUnknown", number>;
		if (row.metadata.gender_distribution.male === 42) {
			const genderValues = {
				male: Math.round(seededRandom(`${audienceSlug}-gender-male`) * 10000),
				female: Math.round(seededRandom(`${audienceSlug}-gender-female`) * 10000),
				unknown: Math.round(seededRandom(`${audienceSlug}-gender-unknown`) * 10000),
			};
			genderDistribution = {
				genderMale: genderValues.male,
				genderFemale: genderValues.female,
				genderUnknown: genderValues.unknown,
			};
		} else {
			genderDistribution = {
				genderMale: row.metadata.gender_distribution.male,
				genderFemale: row.metadata.gender_distribution.female,
				genderUnknown: row.metadata.gender_distribution.unknown,
			};
		}

		const existingAudience = await db.audience.findUnique({
			where: { slug: audienceSlug },
		});

		if (existingAudience) {
			console.log("audience already exists", audienceSlug);
			return;
		}

		const audience = await db.audience.create({
			data: {
				slug: audienceSlug,
				name: audienceName,
				logoUrl: row.metadata.logo,
				audienceDeterministic90days: deterministic90days,
				audienceDeterministic1year: deterministic1year,
				audienceExtended90days: extended90days,
				audienceExtended1year: extended1year,
				...ageDistribution,
				...genderDistribution,
				associatedGtins: row.metadata.associated_gtins.map(String),
				leafCategoryId: leafCategory.id,
			},
		});

		for (const [retailerName, count] of Object.entries(row.metadata.retailer_distribution)) {
			const retailer = retailersMap.get(retailerName);

			if (!retailer) {
				throw new Error(`Could not find retailer: ${retailerName}`);
			}

			await db.audienceRetailerDistribution.create({
				data: {
					audienceId: audience.id,
					retailerId: retailer.id,
					count,
				},
			});
		}
	}

	const limit = pLimit(10);

	const processingPromises = rows.map((row) => limit(() => processAudience(row)));

	await Promise.all(processingPromises);

	const baseCategories = await db.baseCategory.findMany();
	const leafCategories = await db.leafCategory.findMany();
	const emojiLimit = pLimit(5);

	const baseCategoryPromises = baseCategories.map((baseCategory) =>
		emojiLimit(async () => {
			const emoji = await generateEmoji(baseCategory.name);
			console.log(`Base category ${baseCategory.name} has emoji ${emoji}`);
			await db.baseCategory.update({
				where: { id: baseCategory.id },
				data: { emoji },
			});
		}),
	);

	const leafCategoryPromises = leafCategories.map((leafCategory) =>
		emojiLimit(async () => {
			const emoji = await generateEmoji(leafCategory.name);
			console.log(`Leaf category ${leafCategory.name} has emoji ${emoji}`);
			await db.leafCategory.update({
				where: { id: leafCategory.id },
				data: { emoji },
			});
		}),
	);

	await Promise.all([...baseCategoryPromises, ...leafCategoryPromises]);

	return NextResponse.json({
		message: "Data imported successfully.",
	});
}
