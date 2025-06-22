import data from "@/data.json";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const baseCategoryRouter = createTRPCRouter({
	list: publicProcedure.query(async () => {
		return data.baseCategories;
	}),
});
