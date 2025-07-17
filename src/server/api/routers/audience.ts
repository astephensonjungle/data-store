import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { AudienceType, LookbackWindow } from "@prisma/client";
import { TRPCError } from "@trpc/server";
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

	listRelated: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input, ctx }) => {
		const { slug } = input;

		const audience = await ctx.db.audience.findUnique({
			where: {
				slug,
			},
			include: {
				leafCategory: true,
			},
		});

		if (!audience) {
			throw new TRPCError({ code: "NOT_FOUND", message: "Audience not found" });
		}

		return ctx.db.audience.findMany({
			where: {
				leafCategory: {
					slug: audience.leafCategory.slug,
				},
				slug: { not: slug },
			},
			orderBy: {
				name: "asc",
			},
			take: 10,
		});
	}),
	get: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input, ctx }) => {
		const { slug } = input;

		return ctx.db.audience.findUnique({
			where: {
				slug,
			},
			include: {
				retailerDistribution: {
					include: {
						retailer: true,
					},
				},
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
	saveAudience: protectedProcedure
		.input(
			z.object({
				lookbackWindow: z.nativeEnum(LookbackWindow),
				audienceType: z.nativeEnum(AudienceType),
				audienceId: z.string(),
			}),
		)
		.mutation(async ({ input, ctx }) => {
			const { lookbackWindow, audienceType, audienceId } = input;

			const audience = await ctx.db.audience.findUnique({
				where: { id: audienceId },
			});

			if (!audience) {
				throw new TRPCError({ code: "NOT_FOUND", message: "Audience not found" });
			}

			const savedAudience = await ctx.db.savedAudience.findFirst({
				where: {
					userId: ctx.session.user.id,
					audienceId,
					audienceType,
					lookbackWindow,
				},
			});

			if (savedAudience) {
				return ctx.db.savedAudience.delete({
					where: {
						id: savedAudience.id,
					},
				});
			}

			return ctx.db.savedAudience.create({
				data: {
					lookbackWindow,
					audienceType,
					audience: {
						connect: {
							id: audienceId,
						},
					},
					user: {
						connect: { id: ctx.session.user.id },
					},
				},
			});
		}),
	listSaved: protectedProcedure
		.input(z.object({ audienceType: z.nativeEnum(AudienceType).nullish() }))
		.query(async ({ input, ctx }) => {
			const { audienceType } = input;

			return ctx.db.savedAudience.findMany({
				where: {
					userId: ctx.session.user.id,
					audienceType: audienceType ? audienceType : undefined,
				},
				include: {
					audience: {
						include: {
							leafCategory: {
								include: {
									baseCategory: true,
								},
							},
						},
					},
				},
			});
		}),
	isSaved: protectedProcedure
		.input(
			z.object({
				audienceId: z.string(),
				audienceType: z.nativeEnum(AudienceType),
				lookbackWindow: z.nativeEnum(LookbackWindow),
			}),
		)
		.query(async ({ input, ctx }) => {
			const { audienceId, audienceType, lookbackWindow } = input;

			const savedAudience = await ctx.db.savedAudience.findFirst({
				where: {
					userId: ctx.session.user.id,
					audienceType,
					lookbackWindow,
					audienceId,
				},
			});

			return !!savedAudience;
		}),
	getSavedAudience: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const { id } = input;

			return ctx.db.savedAudience.findUnique({
				where: {
					userId: ctx.session.user.id,
					id,
				},
				include: {
					audience: {
						include: {
							leafCategory: {
								include: {
									baseCategory: true,
								},
							},
						},
					},
				},
			});
		}),
	relatedProducts: publicProcedure
		.input(z.object({ gtins: z.array(z.string()), audienceSlug: z.string() }))
		.query(async ({ input, ctx }) => {
			const { gtins, audienceSlug } = input;

			const audience = await ctx.db.audience.findUnique({
				where: { slug: audienceSlug },
			});

			if (!audience) {
				return [];
			}

			const products = await ctx.db.product.findMany({
				where: {
					upc: {
						in: gtins,
					},
				},
				orderBy: {
					imageUrl: "asc",
				},
				take: 10,
			});

			return products;
		}),
});
