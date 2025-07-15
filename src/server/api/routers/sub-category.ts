import type { Prisma } from "@prisma/client";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const BRANDS_PER_CATEGORY_LIMIT_DEFAULT = 10;
const CATEGORIES_PER_PAGE_LIMIT_DEFAULT = 10;

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
		.query(async ({ input, ctx }) => {
			const { searchText, brandsPerCategoryLimit, baseCategorySlug: _baseCategorySlug } = input;

			const baseCategorySlug = _baseCategorySlug === "all" ? null : _baseCategorySlug;

			const leafCategoryWhere: Prisma.LeafCategoryWhereInput = {};
			if (baseCategorySlug) {
				leafCategoryWhere.baseCategory = { slug: baseCategorySlug };
			}

			const audienceWhere: Prisma.AudienceWhereInput = {};
			if (searchText?.trim()) {
				audienceWhere.name = {
					contains: searchText,
					mode: "insensitive",
				};
			}

			if (searchText?.trim()) {
				const matchingAudiences = await ctx.db.audience.findMany({
					where: audienceWhere,
					select: { leafCategoryId: true },
				});
				const uniqueLeafCategoryIds = [...new Set(matchingAudiences.map((a) => a.leafCategoryId))];

				leafCategoryWhere.id = { in: uniqueLeafCategoryIds };
			}

			const leafCategories = await ctx.db.leafCategory.findMany({
				where: leafCategoryWhere,
				include: {
					audiences: {
						where: audienceWhere,
						take: brandsPerCategoryLimit,
						orderBy: {
							deterministicCus: "desc",
						},
					},
					_count: {
						select: { audiences: true },
					},
				},
			});

			const categoriesWithBrands = leafCategories.map((subcategory) => ({
				...subcategory,
				brands: subcategory.audiences,
				totalBrands: subcategory._count.audiences,
			}));

			return {
				items: categoriesWithBrands,
				nextCursor: null,
			};
		}),
});
