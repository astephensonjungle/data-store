import { db } from "@/server/db";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import type { GoogleSpreadsheet } from "google-spreadsheet";
import slugify from "slugify";
import z from "zod";
import { processImage } from "./process-image";
import { seededRandom } from "./seeded-random";

async function generateEmoji(name: string) {
	const { object: emoji } = await generateObject({
		model: google.languageModel("gemini-2.0-flash"),
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

export async function importAudiences(doc: GoogleSpreadsheet) {
	const sheet = doc.sheetsByTitle.datastore_master_data;

	if (!sheet) throw new Error("Sheet not found");

	const rows = await sheet.getRows<{
		audience_name: string;
		category: string;
		lookback_window: string;
		audience_type: string;
		audience_metadata: string;
	}>();

	const baseCategoriesToAdd: { slug: string; name: string }[] = [];
	const leafCategoriesToAdd: { slug: string; name: string; baseCategorySlug: string }[] = [];
	const retailersToAdd: { slug: string; name: string }[] = [];
	const audiencesToAdd: {
		name: string;
		slug: string;
		baseCategorySlug: string;
		leafCategorySlug: string;
		retailers: { slug: string; count: number }[];
		lookbackWindow: string;
		audienceType: string;
		metadata: z.infer<typeof metadataSchema>;
	}[] = [];

	for (const row of rows) {
		const [, _name] = row.get("audience_name").split("-");
		const name = _name || row.get("audience_name");
		const [, baseCategory, leafCategory] = row.get("category").split("|");

		const formattedBaseCategoryName = baseCategory
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
		const baseCategorySlug = slugify(baseCategory, { lower: true, strict: true });
		const baseCategoryToAdd = baseCategoriesToAdd.find((bc) => bc.slug === baseCategorySlug);
		if (!baseCategoryToAdd) {
			baseCategoriesToAdd.push({
				slug: baseCategorySlug,
				name: formattedBaseCategoryName,
			});
		}

		const formattedLeafCategoryName = leafCategory
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
		const leafCategorySlug = slugify(leafCategory, { lower: true, strict: true });
		const leafCategoryToAdd = leafCategoriesToAdd.find((lc) => lc.slug === leafCategorySlug);
		if (!leafCategoryToAdd) {
			leafCategoriesToAdd.push({
				slug: leafCategorySlug,
				name: formattedLeafCategoryName,
				baseCategorySlug,
			});
		}

		const metadataStr = row.get("audience_metadata").replaceAll('""', '"').replaceAll('"{', "{").replaceAll('}"', "}");

		const validJsonStr = metadataStr.replace(/"associated_gtins":\s*\[([\s\S]*?)\]/, (_: string, gtinsStr: string) => {
			if (!gtinsStr || !gtinsStr.trim()) {
				return '"associated_gtins":[]';
			}
			const quotedGtins = gtinsStr
				.split(",")
				.map((s: string) => s.trim())
				.filter(Boolean)
				.map((g: string) => `"${g}"`)
				.join(",");
			return `"associated_gtins":[${quotedGtins}]`;
		});

		const metadata = metadataSchema.parse(JSON.parse(validJsonStr));

		const retailers: { slug: string; count: number }[] = [];
		for (const retailerName of Object.keys(metadata.retailer_distribution)) {
			const retailerSlug = slugify(retailerName, { lower: true, strict: true });
			const retailerCount = metadata.retailer_distribution[retailerName as keyof typeof metadata.retailer_distribution];

			retailers.push({ slug: retailerSlug, count: retailerCount });

			const retailerToAdd = retailersToAdd.find((r) => r.slug === retailerSlug);
			if (!retailerToAdd) {
				const formattedRetailerName = retailerName
					.replaceAll("_", " ")
					.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
				retailersToAdd.push({ slug: retailerSlug, name: formattedRetailerName });
			}
		}

		const formattedAudienceName = name
			.replaceAll("_", " ")
			.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());

		audiencesToAdd.push({
			name: formattedAudienceName,
			slug: slugify(name, { lower: true, strict: true }),
			baseCategorySlug,
			leafCategorySlug,
			retailers,
			lookbackWindow: row.get("lookback_window"),
			audienceType: row.get("audience_type"),
			metadata,
		});
	}

	await Promise.all(
		baseCategoriesToAdd.map(async (bc) => {
			const emoji = await generateEmoji(bc.name);
			db.baseCategory.upsert({
				where: { slug: bc.slug },
				update: {
					emoji,
					name: bc.name,
				},
				create: {
					name: bc.name,
					slug: bc.slug,
					emoji,
				},
			});
		}),
	);

	await Promise.all(
		leafCategoriesToAdd.map(async (lc) => {
			const emoji = await generateEmoji(lc.name);
			db.leafCategory.upsert({
				where: { slug: lc.slug },
				update: {
					name: lc.name,
					emoji,
				},
				create: {
					name: lc.name,
					slug: lc.slug,
					emoji,
					baseCategory: {
						connect: { slug: lc.baseCategorySlug },
					},
				},
			});
		}),
	);

	await Promise.all(
		retailersToAdd.map((r) =>
			db.retailer.upsert({
				where: { slug: r.slug },
				update: {
					name: r.name,
				},
				create: {
					name: r.name,
					slug: r.slug,
				},
			}),
		),
	);

	for (const audience of audiencesToAdd) {
		console.log("Creating audience", audience.name);
		let imageUrl: string = audience.metadata.logo;
		let blurhash: string | undefined = undefined;

		if (audience.metadata.logo) {
			try {
				const { url, blurDataURL } = await processImage({
					imageUrl: audience.metadata.logo,
					slug: audience.slug,
					type: "audience",
				});
				imageUrl = url;
				blurhash = blurDataURL ?? undefined;
			} catch (error) {
				console.error(error);
			}
		}

		const consumers = Math.round(seededRandom(audience.slug) * 50 * 1_000_000);
		const extended1year = audience.metadata.extended_cus === 42 ? consumers * 12 : audience.metadata.extended_cus;
		const deterministic1year =
			audience.metadata.deterministic_cus === 42 ? consumers * 4 : audience.metadata.deterministic_cus;
		const extended90days = extended1year / 3;
		const deterministic90days = deterministic1year / 4;

		let ageDistribution: Record<
			"age18to24" | "age25to34" | "age35to44" | "age45to54" | "age55to64" | "age65plus" | "ageUnknown",
			number
		>;
		if (audience.metadata.age_distribution["+18-24"] === 42) {
			const ageValues = {
				"18-24": Math.round(seededRandom(`${audience.slug}-age-18-24`) * 10000),
				"25-34": Math.round(seededRandom(`${audience.slug}-age-25-34`) * 10000),
				"35-44": Math.round(seededRandom(`${audience.slug}-age-35-44`) * 10000),
				"45-54": Math.round(seededRandom(`${audience.slug}-age-45-54`) * 10000),
				"55-64": Math.round(seededRandom(`${audience.slug}-age-55-64`) * 10000),
				"65+": Math.round(seededRandom(`${audience.slug}-age-65+`) * 10000),
				unknown: Math.round(seededRandom(`${audience.slug}-age-unknown`) * 10000),
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
				age18to24: audience.metadata.age_distribution["+18-24"],
				age25to34: audience.metadata.age_distribution["25-34"],
				age35to44: audience.metadata.age_distribution["35-44"],
				age45to54: audience.metadata.age_distribution["45-54"],
				age55to64: audience.metadata.age_distribution["55-64"],
				age65plus: audience.metadata.age_distribution["65+"],
				ageUnknown: audience.metadata.age_distribution.unknown,
			};
		}

		let genderDistribution: Record<"genderMale" | "genderFemale" | "genderUnknown", number>;
		if (audience.metadata.gender_distribution.male === 42) {
			const genderValues = {
				male: Math.round(seededRandom(`${audience.slug}-gender-male`) * 10000),
				female: Math.round(seededRandom(`${audience.slug}-gender-female`) * 10000),
				unknown: Math.round(seededRandom(`${audience.slug}-gender-unknown`) * 10000),
			};
			genderDistribution = {
				genderMale: genderValues.male,
				genderFemale: genderValues.female,
				genderUnknown: genderValues.unknown,
			};
		} else {
			genderDistribution = {
				genderMale: audience.metadata.gender_distribution.male,
				genderFemale: audience.metadata.gender_distribution.female,
				genderUnknown: audience.metadata.gender_distribution.unknown,
			};
		}

		const createdAudience = await db.audience.upsert({
			where: { slug: audience.slug },
			update: {
				slug: audience.slug,
				name: audience.name,
				logoUrl: imageUrl,
				logoBlurhash: blurhash,
				audienceDeterministic90days: deterministic90days,
				audienceDeterministic1year: deterministic1year,
				audienceExtended90days: extended90days,
				audienceExtended1year: extended1year,
				...ageDistribution,
				...genderDistribution,
				associatedGtins: audience.metadata.associated_gtins.map(String),
				leafCategory: {
					connect: { slug: audience.leafCategorySlug },
				},
			},
			create: {
				slug: audience.slug,
				name: audience.name,
				logoUrl: imageUrl,
				logoBlurhash: blurhash,
				audienceDeterministic90days: deterministic90days,
				audienceDeterministic1year: deterministic1year,
				audienceExtended90days: extended90days,
				audienceExtended1year: extended1year,
				...ageDistribution,
				...genderDistribution,
				associatedGtins: audience.metadata.associated_gtins.map(String),
				leafCategory: {
					connect: { slug: audience.leafCategorySlug },
				},
			},
		});

		for (const retailer of audience.retailers) {
			const existingRetailer = await db.retailer.findUnique({
				where: { slug: retailer.slug },
			});

			if (!existingRetailer) {
				continue;
			}

			await db.audienceRetailerDistribution.upsert({
				where: { audienceId_retailerId: { audienceId: createdAudience.id, retailerId: existingRetailer.id } },
				update: { count: retailer.count },
				create: { audienceId: createdAudience.id, retailerId: existingRetailer.id, count: retailer.count },
			});
		}

		console.log(imageUrl);

		// await db.audience.upsert({
		//   where: { slug: audience.slug },
		//   update: {
		//     logoUrl: imageUrl,
		//   },
		//   create: {
		//     name: audience.name,
		//     slug: audience.slug,
		//     logoUrl: imageUrl,
		//     leafCategory: {
		//       connect: { slug: audience.leafCategorySlug },
		//     },
		//   },
		// })
	}
}
