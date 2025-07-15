const AUDIENCE_SLUGS_KEY = "savedAudienceSlugs";

export function getSavedAudienceSlugs(): string[] {
	if (typeof window === "undefined") {
		return [];
	}

	const savedSlugs = window.localStorage.getItem(AUDIENCE_SLUGS_KEY);
	if (!savedSlugs) {
		return [];
	}

	try {
		const parsedSlugs = JSON.parse(savedSlugs);
		if (Array.isArray(parsedSlugs) && parsedSlugs.every((item) => typeof item === "string")) {
			return parsedSlugs;
		}
		return [];
	} catch (error) {
		console.error("Failed to parse saved audience slugs from localStorage", error);
		return [];
	}
}

export function saveAudienceSlug(slug: string): void {
	if (typeof window === "undefined") {
		return;
	}

	const currentSlugs = getSavedAudienceSlugs();
	if (!currentSlugs.includes(slug)) {
		const newSlugs = [...currentSlugs, slug];
		window.localStorage.setItem(AUDIENCE_SLUGS_KEY, JSON.stringify(newSlugs));
	}
}

export function removeAudienceSlug(slug: string): void {
	if (typeof window === "undefined") {
		return;
	}

	const currentSlugs = getSavedAudienceSlugs();
	const newSlugs = currentSlugs.filter((currentSlug) => currentSlug !== slug);
	window.localStorage.setItem(AUDIENCE_SLUGS_KEY, JSON.stringify(newSlugs));
}
