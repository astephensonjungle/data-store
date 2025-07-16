"use client";

import { seededRandom } from "@/lib/seeded-random";
import { type RouterOutputs, api } from "@/trpc/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import AudienceSheet from "./audience-sheet";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Audience = NonNullable<RouterOutputs["audience"]["get"]>;

export function ConsumersInformationCard({ audience }: { audience: Audience }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const [isSheetOpen, setSheetOpen] = useState(false);
	const [savedAudienceId, setSavedAudienceId] = useState<string | null>(null);

	const lookback = searchParams.get("lookbackWindow") === "YEARS_1" ? "YEARS_1" : "DAYS_90";
	const audienceSize = searchParams.get("audienceSize") === "EXTENDED" ? "EXTENDED" : "DETERMINISTIC";

	let consumers = Math.round(seededRandom(audience.slug) * 50 * 1_000_000);

	if (lookback === "DAYS_90" && audienceSize === "DETERMINISTIC") {
		consumers = audience.audienceDeterministic90days;
	} else if (lookback === "DAYS_90" && audienceSize === "EXTENDED") {
		consumers = audience.audienceExtended90days;
	} else if (lookback === "YEARS_1" && audienceSize === "DETERMINISTIC") {
		consumers = audience.audienceDeterministic1year;
	} else if (lookback === "YEARS_1" && audienceSize === "EXTENDED") {
		consumers = audience.audienceExtended1year;
	}

	const { data: isSaved, isPending: isSavedPending } = api.audience.isSaved.useQuery({
		audienceId: audience.id,
		audienceType: audienceSize,
		lookbackWindow: lookback,
	});

	const utils = api.useUtils();
	const { mutate: toggleSaveAudience, isPending: isSaving } = api.audience.saveAudience.useMutation({
		onSuccess: async (data) => {
			await utils.audience.isSaved.invalidate();
			if (isSaved) {
				toast.success("Audience removed from saved");
			} else {
				toast.success("Audience saved");
				setSavedAudienceId(data.id);
				setSheetOpen(true);
			}
		},
		onError: () => {
			toast.error("Failed to save audience");
		},
	});

	const handleToggleSaveAudience = async () => {
		toggleSaveAudience({
			audienceId: audience.id,
			lookbackWindow: lookback,
			audienceType: audienceSize,
		});
	};

	const handleLookbackChange = (value: "DAYS_90" | "YEARS_1") => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set("lookbackWindow", value);
		const paramsString = newParams.toString();
		const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
		router.push(`${pathname}${queryString}`);
	};

	const handleAudienceSizeChange = (value: "DETERMINISTIC" | "EXTENDED") => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set("audienceSize", value);
		const paramsString = newParams.toString();
		const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
		router.push(`${pathname}${queryString}`);
	};

	return (
		<>
			<div className="flex h-fit w-[400px] flex-none flex-col gap-6 rounded-2xl bg-background-secondary p-5">
				<div>
					<div className="text-base">Consumers</div>
					<div className="font-medium text-3xl">{new Intl.NumberFormat("en-US").format(consumers)}</div>
				</div>

				<div className="flex flex-col gap-1">
					<div className="font-medium text-foreground text-sm">Lookback</div>
					<Tabs value={lookback} onValueChange={(value) => handleLookbackChange(value as "DAYS_90" | "YEARS_1")}>
						<TabsList className="w-full">
							<TabsTrigger value="DAYS_90">90 days</TabsTrigger>
							<TabsTrigger value="YEARS_1">1 year</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				<div className="flex flex-col gap-1">
					<div className="font-medium text-foreground text-sm">Audience Size</div>
					<Tabs
						value={audienceSize}
						onValueChange={(value) => handleAudienceSizeChange(value as "DETERMINISTIC" | "EXTENDED")}
					>
						<TabsList className="w-full">
							<TabsTrigger value="DETERMINISTIC">Deterministic</TabsTrigger>
							<TabsTrigger value="EXTENDED">Extended</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				<div className="flex flex-col gap-2">
					<Button size="lg" onClick={handleToggleSaveAudience} disabled={isSaving || isSavedPending}>
						{isSaving ? "Saving..." : isSaved ? "Remove from saved" : "Save audience"}
					</Button>
					<Button size="lg" variant="outline" className="border-border bg-background-secondary">
						Request a custom audience
					</Button>
				</div>
			</div>
			<AudienceSheet savedAudienceId={savedAudienceId} open={isSheetOpen} onOpenChange={setSheetOpen} />
		</>
	);
}
