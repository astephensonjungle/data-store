"use client";

import { type RouterOutputs, api } from "@/trpc/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AudienceCard } from "./audience-card";
import { Button } from "./ui/button";

type Brand = RouterOutputs["audience"]["list"]["items"][number];

export function AudiencesList({
	subCategorySlug,
	initialData,
	searchText,
}: { subCategorySlug: string; initialData: Brand[]; searchText: string }) {
	const { data, fetchNextPage, hasNextPage } = api.audience.list.useInfiniteQuery(
		{
			categorySlug: subCategorySlug,
			limit: 10,
			searchText,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
			placeholderData: (prev) => prev,
		},
	);

	const [parentAnimationRef] = useAutoAnimate();

	return (
		<div className="flex flex-row gap-2 px-4" ref={parentAnimationRef}>
			{(data?.pages || [{ items: initialData }])
				.flatMap((page) => page.items)
				.map((brand) => (
					<AudienceCard audience={brand} key={brand.slug} />
				))}

			{hasNextPage && (
				<div className="flex items-center justify-center p-8">
					<Button variant="outline" size="sm" onClick={() => fetchNextPage()}>
						Load more
					</Button>
				</div>
			)}
		</div>
	);
}
