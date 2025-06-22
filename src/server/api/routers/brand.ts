import data from "@/data.json";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import Fuse from "fuse.js";
import z from "zod";

type Brand = (typeof data.brands)[number];

export const brandRouter = createTRPCRouter({
	list: publicProcedure
		.input(
			z.object({
				categorySlug: z.string(),
				searchText: z.string().optional(),
				limit: z.number().min(1).max(50).default(20),
				cursor: z.number().min(0).default(0),
			}),
		)
		.query(async ({ input }) => {
			const { categorySlug, searchText, limit, cursor } = input;

			const allBrandsForCategory = data.brands.filter((brand) => brand.subCategories.includes(categorySlug));

			let brandsToPaginate: Brand[] = allBrandsForCategory;

			if (searchText && searchText.trim().length > 0) {
				const categoryFuse = new Fuse(allBrandsForCategory, {
					keys: ["name"],
					threshold: 0.3,
					includeScore: true,
				});
				brandsToPaginate = categoryFuse.search(searchText).map((result) => result.item);
			}

			const paginatedBrands = brandsToPaginate.slice(cursor, cursor + limit);

			let nextCursor: number | null = cursor + paginatedBrands.length;
			if (nextCursor >= brandsToPaginate.length) {
				nextCursor = null;
			}

			return {
				items: paginatedBrands,
				nextCursor,
			};
		}),
});
