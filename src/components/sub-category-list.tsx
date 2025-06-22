"use client";

import { api } from "@/trpc/react";
import { BrandsList } from "./brands-list";
import { Button } from "./ui/button";

export function SubCategoryList({ baseCategorySlug, searchText }: { baseCategorySlug: string; searchText: string }) {
	const { data, fetchNextPage, hasNextPage } = api.subCategory.list.useInfiniteQuery(
		{
			limit: 10,
			baseCategorySlug,
			searchText,
		},
		{ getNextPageParam: (lastPage) => lastPage.nextCursor },
	);

	const subCategories = data?.pages.flatMap((page) => page.items) ?? [];
	const nextCursor = data?.pages[data.pages.length - 1]?.nextCursor;

	return (
		<div className="flex flex-col divide-y">
			{subCategories.map((subCategory) => (
				<div key={subCategory.slug} className="flex w-full overflow-x-auto py-4">
					<div className="sticky left-0 w-64 flex-none bg-background p-6">
						<h2 className="font-semibold text-xl">
							<span className="mr-2 text-2xl">{subCategory.emoji}</span>
							{subCategory.name}
						</h2>
						<p className="mt-2 text-[#BDAD8C] text-xl">{subCategory.totalBrands} brands</p>
					</div>
					<BrandsList searchText={searchText} subCategorySlug={subCategory.slug} initialData={subCategory.brands} />
				</div>
			))}

			{nextCursor && hasNextPage && (
				<div className="flex justify-center py-4">
					<Button variant="outline" size="sm" onClick={() => fetchNextPage()}>
						Load more categories
					</Button>
				</div>
			)}
		</div>
	);
}
