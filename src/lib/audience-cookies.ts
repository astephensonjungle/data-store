"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "savedAudienceSlugs";

function parseSlugs(cookieValue: string | undefined): string[] {
	if (!cookieValue) {
		return [];
	}
	try {
		const parsed = JSON.parse(cookieValue);
		if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
			return parsed;
		}
		return [];
	} catch {
		return [];
	}
}

export async function getSavedAudienceSlugs(): Promise<string[]> {
	const cookieStore = await cookies();
	const cookie = cookieStore.get(COOKIE_NAME);
	return parseSlugs(cookie?.value);
}

export async function saveAudienceSlug(slug: string) {
	const cookieStore = await cookies();
	const currentSlugs = await getSavedAudienceSlugs();

	if (!currentSlugs.includes(slug)) {
		const newSlugs = [...currentSlugs, slug];
		cookieStore.set(COOKIE_NAME, JSON.stringify(newSlugs), {
			path: "/",
			httpOnly: true,
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 365, // 1 year
		});
	}
}

export async function removeAudienceSlug(slug: string) {
	const cookieStore = await cookies();
	const currentSlugs = await getSavedAudienceSlugs();
	const newSlugs = currentSlugs.filter((s) => s !== slug);

	if (newSlugs.length > 0) {
		cookieStore.set(COOKIE_NAME, JSON.stringify(newSlugs));
	} else {
		cookieStore.delete(COOKIE_NAME);
	}
}
