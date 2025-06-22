import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { baseCategoryRouter } from "./routers/base-category";
import { brandRouter } from "./routers/brand";
import { subCategoryRouter } from "./routers/sub-category";

export const appRouter = createTRPCRouter({
	brand: brandRouter,
	subCategory: subCategoryRouter,
	baseCategory: baseCategoryRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
