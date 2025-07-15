import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const baseCategoryRouter = createTRPCRouter({
	get: publicProcedure
		.input(
			z.object({
				slug: z.string(),
			}),
		)
		.query(async ({ input, ctx }) => {
			return ctx.db.baseCategory.findUnique({
				where: { slug: input.slug },
			});
		}),
	list: publicProcedure.query(async ({ ctx }) => {
		const categories = await ctx.db.baseCategory.findMany({
			orderBy: {
				name: "asc",
			},
			select: {
				slug: true,
				name: true,
				emoji: true,
			},
		});

		return [{ name: "All", slug: "all", emoji: "🔍" }, ...categories];
	}),
});
