import { createLoader, parseAsString } from "nuqs/server";

export const audiencesSearchParams = createLoader({
	searchText: parseAsString.withDefault(""),
});

export type AudiencesSearchParams = Awaited<ReturnType<typeof audiencesSearchParams>>;
