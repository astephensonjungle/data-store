import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { audienceRouter } from "./routers/audience";
import { baseCategoryRouter } from "./routers/base-category";
import { subCategoryRouter } from "./routers/sub-category";

export const appRouter = createTRPCRouter({
	audience: audienceRouter,
	subCategory: subCategoryRouter,
	baseCategory: baseCategoryRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
