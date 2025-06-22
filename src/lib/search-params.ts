import { createLoader, parseAsString } from "nuqs/server";

export const brandsSearchParams = createLoader({
	searchText: parseAsString.withDefault(""),
});

export type BrandsSearchParams = Awaited<ReturnType<typeof brandsSearchParams>>;
