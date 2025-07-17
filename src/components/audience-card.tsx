import { blurhashToDataUrl } from "@/lib/blurhas-to-data-url";
import type { RouterOutputs } from "@/trpc/react";
import Image from "next/image";
import Link from "next/link";

export function AudienceCard({
	audience,
	className,
}: { audience: RouterOutputs["audience"]["list"]["items"][number]; className?: string }) {
	return (
		<Link
			href={`/audience/${audience.slug}`}
			key={audience.slug}
			className="flex w-40 flex-none flex-col rounded-lg border bg-[#F4F0EB] p-3 transition-opacity hover:opacity-70"
		>
			<Image
				src={audience.logoUrl ?? ""}
				alt={audience.name}
				width={256}
				height={256}
				placeholder={audience.logoBlurhash ? "blur" : undefined}
				blurDataURL={audience.logoBlurhash ? blurhashToDataUrl(audience.logoBlurhash) : undefined}
				className="aspect-square overflow-hidden rounded-lg object-cover"
			/>
			<div className="mt-3 truncate text-center font-medium text-base">{audience.name}</div>
			<div className="mt-1 text-center font-medium text-[#BDAD8C] text-lg uppercase">
				{Math.floor(audience.audienceExtended1year / 1000000)}M
			</div>
		</Link>
	);
}
