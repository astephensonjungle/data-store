import data from "@/data.json";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import Fuse from "fuse.js";
import z from "zod";

type Audience = (typeof data.brands)[number];

export const audienceRouter = createTRPCRouter({
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

			let brandsToPaginate: Audience[] = allBrandsForCategory;

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

	listRelated: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
		const { slug } = input;

		const audience = data.brands.find((brand) => brand.slug === slug);
		const subCategories = audience?.subCategories;

		return data.brands
			.filter((brand) => brand.subCategories.some((subCategory) => subCategories?.includes(subCategory)))
			.filter((_, index) => index < 10);
	}),
	get: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
		const { slug } = input;

		const brand = data.brands.find((brand) => brand.slug === slug);

		if (!brand) {
			throw new TRPCError({ code: "NOT_FOUND", message: "Brand not found" });
		}

		return brand;
	}),
});
