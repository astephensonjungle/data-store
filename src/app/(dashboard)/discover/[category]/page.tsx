import { SubCategoryList } from "@/components/sub-category-list";
import { audiencesSearchParams } from "@/lib/search-params";
import { db } from "@/server/db";
import { HydrateClient, api } from "@/trpc/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Discover",
	description: "Discover",
};

export async function generateStaticParams() {
	const baseCategories = await db.baseCategory.findMany({
		select: {
			slug: true,
		},
		orderBy: {
			name: "asc",
		},
	});

	return baseCategories.map((category) => ({
		category: category.slug,
	}));
}

export default async function DiscoverPage({
	searchParams,
	params,
}: { params: Promise<{ category: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const { searchText } = audiencesSearchParams(await searchParams);
	const { category } = await params;

	const baseCategory =
		category === "all"
			? { name: "All", slug: "all", id: "all", emoji: "🔍" }
			: await api.baseCategory.get({ slug: category });

	if (!baseCategory) {
		return notFound();
	}

	void api.subCategory.list.prefetch({ baseCategorySlug: category, searchText });

	return (
		<HydrateClient>
			<div className="flex flex-col gap-4">
				<div className="flex items-center p-6">
					<h1 className="font-semibold text-3xl">
						<span className="mr-2 text-4xl">{baseCategory.emoji}</span>
						<span>{baseCategory.name}</span>
					</h1>
				</div>

				<SubCategoryList searchText={searchText} baseCategorySlug={category} />
			</div>
		</HydrateClient>
	);
}
