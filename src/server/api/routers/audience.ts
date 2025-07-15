import data from "@/data.json";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import z from "zod";

export const audienceRouter = createTRPCRouter({
	list: publicProcedure
		.input(
			z.object({
				categorySlug: z.string(),
				searchText: z.string().optional(),
				limit: z.number().min(1).max(50).default(20),
				cursor: z.string().optional(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const { categorySlug, searchText, limit, cursor } = input;

			// const allBrandsForCategory = data.brands.filter((brand) => brand.subCategories.includes(categorySlug));

			// let brandsToPaginate: Audience[] = allBrandsForCategory;

			// if (searchText && searchText.trim().length > 0) {
			// 	const categoryFuse = new Fuse(allBrandsForCategory, {
			// 		keys: ["name"],
			// 		threshold: 0.3,
			// 		includeScore: true,
			// 	});
			// 	brandsToPaginate = categoryFuse.search(searchText).map((result) => result.item);
			// }

			// const paginatedBrands = brandsToPaginate.slice(cursor, cursor + limit);

			// let nextCursor: number | null = cursor + paginatedBrands.length;
			// if (nextCursor >= brandsToPaginate.length) {
			// 	nextCursor = null;
			// }

			const paginatedAudiences = await ctx.db.audience.findMany({
				where: {
					leafCategory: {
						slug: categorySlug,
					},
					name: {
						contains: searchText,
						mode: "insensitive",
					},
				},
				orderBy: {
					name: "asc",
				},
				skip: cursor ? 1 : 0,
				take: limit,
			});

			return {
				items: paginatedAudiences,
				nextCursor: paginatedAudiences.length === limit ? paginatedAudiences[paginatedAudiences.length - 1].slug : null,
			};
		}),

	listRelated: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
		const { slug } = input;

		const audience = data.brands.find((brand) => brand.slug === slug);
		const subCategories = audience?.subCategories;

		return data.brands
			.filter((brand) => brand.subCategories.some((subCategory) => subCategories?.includes(subCategory)))
			.filter((_, index) => index < 10);
	}),
	get: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input, ctx }) => {
		const { slug } = input;

		return ctx.db.audience.findUnique({
			where: {
				slug,
			},
		});
	}),
	listFromSlugs: publicProcedure.input(z.object({ slugs: z.array(z.string()) })).query(async ({ input, ctx }) => {
		const { slugs } = input;

		const audiences = ctx.db.audience.findMany({
			where: {
				slug: {
					in: slugs,
				},
			},
		});

		return audiences;
	}),
});
