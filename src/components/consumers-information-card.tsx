"use client";

import { seededRandom } from "@/lib/seeded-random";
import type { RouterOutputs } from "@/trpc/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Audience = RouterOutputs["audience"]["get"];

export function ConsumersInformationCard({ audience }: { audience: Audience }) {
	const [lookback, setLookback] = useState<"90days" | "1year">("90days");
	const [audienceSize, setAudienceSize] = useState<"deterministic" | "extended">("deterministic");

	let consumers = Math.round(seededRandom(audience.slug) * 50 * 1_000_000);

	if (lookback === "90days" && audienceSize === "deterministic") {
		consumers = Math.round(consumers * 1.0);
	} else if (lookback === "90days" && audienceSize === "extended") {
		consumers = Math.round(consumers * 6);
	} else if (lookback === "1year" && audienceSize === "deterministic") {
		consumers = Math.round(consumers * 4);
	} else if (lookback === "1year" && audienceSize === "extended") {
		consumers = Math.round(consumers * 12);
	}

	return (
		<div className="flex h-fit w-[400px] flex-none flex-col gap-6 rounded-2xl bg-background-secondary p-5">
			<div>
				<div className="text-base">Consumers</div>
				<div className="font-medium text-3xl">{new Intl.NumberFormat("en-US").format(consumers)}</div>
			</div>

			<div className="flex flex-col gap-1">
				<div className="font-medium text-foreground text-sm">Lookback</div>
				<Tabs value={lookback} onValueChange={(value) => setLookback(value as "90days" | "1year")}>
					<TabsList className="w-full">
						<TabsTrigger value="90days">90 days</TabsTrigger>
						<TabsTrigger value="1year">1 year</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<div className="flex flex-col gap-1">
				<div className="font-medium text-foreground text-sm">Audience Size</div>
				<Tabs value={audienceSize} onValueChange={(value) => setAudienceSize(value as "deterministic" | "extended")}>
					<TabsList className="w-full">
						<TabsTrigger value="deterministic">Deterministic</TabsTrigger>
						<TabsTrigger value="extended">Extended</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			<div className="flex flex-col gap-2">
				<Button size="lg">Save Audience</Button>
				<Button size="lg" variant="outline" className="border-border bg-background-secondary">
					Request a custom audience
				</Button>
			</div>
		</div>
	);
}
