import { seededRandom } from "@/lib/seeded-random";
import type { RouterOutputs } from "@/trpc/react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

type Audience = RouterOutputs["audience"]["listFromSlugs"][number];

export default function AudienceCardDetailed({ audience }: { audience: Audience }) {
	const consumers = Math.round(seededRandom(audience.slug) * 50 * 1_000_000);
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button type="button" className="flex h-fit flex-col gap-4 rounded-lg border p-4">
					<Image
						src={`/assets/brand-images/${audience.slug}.webp`}
						alt={audience.name}
						width={300}
						height={160}
						className="h-40 w-full rounded-lg object-cover"
					/>
					<div>
						<div className="mb-1 font-semibold text-foreground text-lg">{audience.name}</div>
						<div className="mt-2 border-[#e5e0d5] border-t pt-2">
							<div className="flex justify-between py-1 text-sm">
								<span className="font-semibold text-neutral-700">Brand</span>
								<span className="text-foreground">{audience.name}</span>
							</div>
							<div className="border-[#e5e0d5] border-t" />
							<div className="flex justify-between py-1 text-sm">
								<span className="font-semibold text-neutral-700">Type</span>
								<span className="text-foreground">Deterministic</span>
							</div>
							<div className="border-[#e5e0d5] border-t" />
							<div className="flex justify-between py-1 text-sm">
								<span className="font-semibold text-neutral-700">Audience count</span>
								<span className="text-foreground">{new Intl.NumberFormat("en-US").format(consumers)}</span>
							</div>
						</div>
					</div>
				</button>
			</SheetTrigger>
			<SheetContent className="w-full max-w-xl">
				<SheetHeader>
					<SheetTitle>{audience.name}</SheetTitle>
				</SheetHeader>
				<div className="flex h-full flex-1 flex-col justify-between bg-red-500">
					<div>Brand</div>

					<div className="rounded-lg bg-[#EEEAE2]">
						<h3>Audience detals</h3>
						<p>Understand who is in the audience based on real shopper behavior.</p>
						<div className="flex flex-col divide-y">
							<div className="flex justify-between py-3">
								<div className="font-medium">Audience Count</div>{" "}
								<div className="text-foreground">{new Intl.NumberFormat("en-US").format(consumers)}</div>
							</div>
							<div className="flex justify-between py-3">
								<div className="font-medium">Audience Type</div>{" "}
								<div className="text-foreground">{new Intl.NumberFormat("en-US").format(consumers)}</div>
							</div>
							<div className="flex justify-between py-3">
								<div className="font-medium">Lookback window</div>{" "}
								<div className="text-foreground">{new Intl.NumberFormat("en-US").format(consumers)}</div>
							</div>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
