import { seededRandom } from "@/lib/seeded-random";
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
				src={`/assets/brand-images/${audience.slug}.webp`}
				alt={audience.name}
				width={256}
				height={256}
				className="overflow-hidden rounded-lg"
			/>
			<div className="mt-3 truncate text-center font-medium text-base">{audience.name}</div>
			<div className="mt-1 text-center font-medium text-[#BDAD8C] text-lg uppercase">
				{Math.floor(seededRandom(audience.slug) * 50) + 1}M
			</div>
		</Link>
	);
}
