"use client";

import { api } from "@/trpc/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AudiencesList } from "./audiences-list";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function SubCategoryList({ baseCategorySlug, searchText }: { baseCategorySlug: string; searchText: string }) {
	const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = api.subCategory.list.useInfiniteQuery(
		{
			limit: 10,
			baseCategorySlug,
			searchText,
		},
		{ getNextPageParam: (lastPage) => lastPage.nextCursor, placeholderData: (prev) => prev },
	);

	const subCategories = data?.pages.flatMap((page) => page.items) ?? [];
	const nextCursor = data?.pages[data.pages.length - 1]?.nextCursor;
	const [parentAnimationRef] = useAutoAnimate();

	if (isLoading) {
		return (
			<div className="flex flex-col divide-y">
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className="flex w-full overflow-x-auto py-4">
						<div className="sticky left-0 z-20 w-64 flex-none bg-background p-6">
							<div className="flex items-center gap-3">
								<Skeleton className="h-7 w-7 rounded-md" />
								<Skeleton className="h-6 w-32 rounded-md" />
							</div>
							<Skeleton className="mt-3 h-6 w-24 rounded-md" />
						</div>

						<div className="flex items-center gap-2 px-6">
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[228px] w-[160px] flex-shrink-0 rounded-2xl" />
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="flex flex-col divide-y" ref={parentAnimationRef}>
			{subCategories.map((subCategory) => (
				<div key={subCategory.slug} className="flex w-full overflow-x-auto py-4">
					<div className="sticky left-0 z-20 w-64 flex-none bg-background p-6">
						<h2 className="font-semibold text-xl">
							<span className="mr-2 text-2xl">{subCategory.emoji}</span>
							{subCategory.name}
						</h2>
						<p className="mt-2 text-[#BDAD8C] text-xl">{subCategory.totalBrands} brands</p>
					</div>
					<AudiencesList searchText={searchText} subCategorySlug={subCategory.slug} initialData={subCategory.brands} />
				</div>
			))}

			{nextCursor && hasNextPage && (
				<div className="flex justify-center py-4">
					<Button variant="outline" size="sm" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
						{isFetchingNextPage ? "Loading..." : "Load more categories"}
					</Button>
				</div>
			)}
		</div>
	);
}
