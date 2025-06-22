import { SubCategoryList } from "@/components/sub-category-list";
import data from "@/data.json";
import { brandsSearchParams } from "@/lib/search-params";
import { HydrateClient, api } from "@/trpc/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return data.baseCategories.map((category) => ({
		category: category.slug,
	}));
}

export default async function DiscoverPage({
	searchParams,
	params,
}: { params: Promise<{ category: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const { searchText } = brandsSearchParams(await searchParams);
	const { category } = await params;

	const baseCategory = data.baseCategories.find((c) => c.slug === category);

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
