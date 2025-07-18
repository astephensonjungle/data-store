import { seededRandom } from "@/lib/seeded-random";
import type { RouterOutputs } from "@/trpc/react";
import type { LookbackWindow } from "@prisma/client";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const retilersImages = {
	walmart: "/assets/retailers/walmart.png",
	target: "/assets/retailers/target.png",
	wholefoods: "/assets/retailers/whole_foods.png",
	kroger: "/assets/retailers/kroger.png",
	wegmans: "/assets/retailers/wegmans.png",
};

type Audience = NonNullable<RouterOutputs["audience"]["get"]>;

export function RetailerDistribution({ audience }: { audience: Audience }) {
	const lookbackWindow = (useSearchParams().get("lookbackWindow") || "DAYS_90") as LookbackWindow;

	const relailerDistributions = audience.retailerDistribution
		.map((distribution) => {
			const count =
				lookbackWindow === "DAYS_90"
					? Math.floor((seededRandom(distribution.retailer.slug) * 4 + 1) * 1_000_000)
					: Math.floor((seededRandom(distribution.retailer.slug) * 15 + 5) * 1_000_000);
			return {
				...distribution,
				count,
			};
		})
		.sort((a, b) => b.count - a.count);

	return (
		<div className="flex flex-col divide-y">
			{relailerDistributions.map((distribution) => {
				return (
					<div className="flex flex-row items-center gap-2 p-3" key={distribution.retailer.slug}>
						{retilersImages[distribution.retailer.slug as keyof typeof retilersImages] && (
							<Image
								src={retilersImages[distribution.retailer.slug as keyof typeof retilersImages]}
								alt={distribution.retailer.name}
								width={32}
								height={32}
								className="h-[32px] w-[32px] rounded-lg object-contain"
							/>
						)}
						{!retilersImages[distribution.retailer.slug as keyof typeof retilersImages] && (
							<div className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-muted">
								<ImageIcon className="size-4 text-muted-foreground" />
							</div>
						)}
						<div className="ml-2 flex-1 text-sm">{distribution.retailer.name}</div>
						<div className="text-sm">
							{new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
								maximumFractionDigits: 0,
							}).format(distribution.count)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
