"use client";

import { type RouterOutputs, api } from "@/trpc/react";
import Image from "next/image";
import { Button } from "./ui/button";

type Brand = RouterOutputs["brand"]["list"]["items"][number];

export function BrandsList({
	subCategorySlug,
	initialData,
	searchText,
}: { subCategorySlug: string; initialData: Brand[]; searchText: string }) {
	const { data, fetchNextPage, hasNextPage } = api.brand.list.useInfiniteQuery(
		{
			categorySlug: subCategorySlug,
			limit: 10,
			searchText,
		},
		{
			getNextPageParam: (lastPage) => lastPage.nextCursor,
		},
	);

	return (
		<div className="flex flex-row gap-2 px-4">
			{(data?.pages || [{ items: initialData }])
				.flatMap((page) => page.items)
				.map((brand) => (
					<div key={brand.slug} className="flex w-40 flex-none flex-col rounded-lg border bg-[#F4F0EB] p-3">
						<Image
							src={`/assets/brand-images/${brand.slug}.webp`}
							alt={brand.name}
							width={256}
							height={256}
							className="overflow-hidden rounded-lg"
						/>
						<div className="mt-3 truncate text-center font-medium text-base">{brand.name}</div>
						<div className="mt-1 text-center font-medium text-[#BDAD8C] text-lg uppercase">10M</div>
					</div>
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
