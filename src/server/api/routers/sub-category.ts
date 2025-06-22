import data from "@/data.json";
import Fuse from "fuse.js";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

type Brand = (typeof data.brands)[number];
type Subcategory = (typeof data.subcategories)[number];

const BRANDS_PER_CATEGORY_LIMIT_DEFAULT = 10;
const CATEGORIES_PER_PAGE_LIMIT_DEFAULT = 10;

const fuse = new Fuse(data.brands, {
	keys: ["name"],
	threshold: 0.3,
	includeScore: true,
});

export const subCategoryRouter = createTRPCRouter({
	list: publicProcedure
		.input(
			z.object({
				cursor: z.string().nullish(),
				searchText: z.string().optional(),
				limit: z.number().min(1).max(20).default(CATEGORIES_PER_PAGE_LIMIT_DEFAULT),
				brandsPerCategoryLimit: z.number().min(1).max(20).default(BRANDS_PER_CATEGORY_LIMIT_DEFAULT),
				baseCategorySlug: z.string().optional(),
			}),
		)
		.query(async ({ input }) => {
			const { cursor, searchText, limit, brandsPerCategoryLimit, baseCategorySlug: _baseCategorySlug } = input;

			const baseCategorySlug = _baseCategorySlug === "all" ? null : _baseCategorySlug;

			let subcategories: Subcategory[] = data.subcategories.filter((sc) =>
				baseCategorySlug ? sc.baseCategories.includes(baseCategorySlug) : true,
			);
			const brandMap = new Map<string, Brand[]>();

			if (searchText && searchText.trim().length > 0) {
				const searchResults = fuse.search(searchText);
				const brandToScoreMap = new Map<Brand, number>();
				for (const res of searchResults) {
					brandToScoreMap.set(res.item, res.score ?? 1);
				}

				const matchingCategorySlugs = new Set<string>();

				for (const result of searchResults) {
					for (const slug of result.item.subCategories) {
						matchingCategorySlugs.add(slug);
						if (!brandMap.has(slug)) {
							brandMap.set(slug, []);
						}
						brandMap.get(slug)?.push(result.item);
					}
				}

				for (const brands of brandMap.values()) {
					brands.sort((a, b) => (brandToScoreMap.get(a) ?? 1) - (brandToScoreMap.get(b) ?? 1));
				}

				subcategories = data.subcategories.filter((sc) => matchingCategorySlugs.has(sc.slug));
			} else {
				for (const brand of data.brands) {
					for (const slug of brand.subCategories) {
						if (!brandMap.has(slug)) {
							brandMap.set(slug, []);
						}
						if ((brandMap.get(slug)?.length ?? 0) < brandsPerCategoryLimit) {
							brandMap.get(slug)?.push(brand);
						}
					}
				}
			}

			const startIndex = (cursor ? subcategories.findIndex((sc) => sc.slug === cursor) : -1) + 1;

			const paginatedSubcategories = subcategories.slice(startIndex, startIndex + limit);

			const categoriesWithBrands = paginatedSubcategories.map((subcategory) => {
				const brandsForCategory = brandMap.get(subcategory.slug) ?? [];
				const allBrandsForCategory = data.brands.filter((b) => b.subCategories.includes(subcategory.slug));
				const paginatedBrands = brandsForCategory.slice(0, brandsPerCategoryLimit);

				return {
					...subcategory,
					brands: paginatedBrands,
					totalBrands: allBrandsForCategory.length,
				};
			});

			let nextCursor: typeof cursor = null;
			if (startIndex + limit < subcategories.length) {
				nextCursor = paginatedSubcategories.length
					? paginatedSubcategories[paginatedSubcategories.length - 1].slug
					: null;
			}

			return {
				items: categoriesWithBrands,
				nextCursor,
			};
		}),
});
