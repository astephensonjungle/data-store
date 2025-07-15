"use client";

import type { RouterOutputs } from "@/trpc/react";
import { AudienceType, LookbackWindow } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import AudienceSheet from "./audience-sheet";

type SavedAudience = RouterOutputs["audience"]["listSaved"][number];

export default function AudienceCardDetailed({ savedAudience }: { savedAudience: SavedAudience }) {
	const [isOpen, setIsOpen] = useState(false);
	const audience = savedAudience.audience;

	let audienceCount = 0;
	if (
		savedAudience.audienceType === AudienceType.DETERMINISTIC &&
		savedAudience.lookbackWindow === LookbackWindow.DAYS_90
	) {
		audienceCount = audience.audienceDeterministic90days;
	} else if (
		savedAudience.audienceType === AudienceType.DETERMINISTIC &&
		savedAudience.lookbackWindow === LookbackWindow.YEARS_1
	) {
		audienceCount = audience.audienceDeterministic1year;
	} else if (
		savedAudience.audienceType === AudienceType.EXTENDED &&
		savedAudience.lookbackWindow === LookbackWindow.DAYS_90
	) {
		audienceCount = audience.audienceExtended90days;
	} else if (
		savedAudience.audienceType === AudienceType.EXTENDED &&
		savedAudience.lookbackWindow === LookbackWindow.YEARS_1
	) {
		audienceCount = audience.audienceExtended1year;
	}

	return (
		<>
			<button type="button" onClick={() => setIsOpen(true)} className="flex h-fit flex-col gap-4 rounded-lg border p-4">
				<div className="rounded-lg bg-white">
					<Image
						src={audience.logoUrl}
						alt={audience.name}
						width={300}
						height={160}
						className="h-40 w-full rounded-lg object-cover"
					/>
				</div>
				<div>
					<div className="mb-1 font-semibold text-foreground text-lg">{audience.name}</div>
					<div className="mt-2 border-[#e5e0d5] border-t pt-2">
						<div className="flex justify-between py-2 text-sm">
							<span className="font-semibold text-neutral-700">Brand</span>
							<span className="text-foreground">{audience.name}</span>
						</div>
						<div className="border-[#e5e0d5] border-t" />
						<div className="flex justify-between py-2 text-sm">
							<span className="font-semibold text-neutral-700">Type</span>
							<span className="text-foreground">
								{savedAudience.audienceType === AudienceType.DETERMINISTIC ? "Deterministic" : "Extended"}
							</span>
						</div>
						<div className="border-[#e5e0d5] border-t" />
						<div className="flex justify-between py-2 text-sm">
							<span className="font-semibold text-neutral-700">Lookback</span>
							<span className="text-foreground">
								{savedAudience.lookbackWindow === LookbackWindow.DAYS_90 ? "90 days" : "1 year"}
							</span>
						</div>
						<div className="border-[#e5e0d5] border-t" />
						<div className="flex justify-between py-2 text-sm">
							<span className="font-semibold text-neutral-700">Audience count</span>
							<span className="text-foreground">{new Intl.NumberFormat("en-US").format(audienceCount)}</span>
						</div>
					</div>
				</div>
			</button>
			<AudienceSheet savedAudienceId={savedAudience.id} open={isOpen} onOpenChange={setIsOpen} />
		</>
	);
}
