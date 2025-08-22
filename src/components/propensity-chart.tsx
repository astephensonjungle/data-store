"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { seededRandom } from "@/lib/seeded-random";
import type { RouterOutputs } from "@/trpc/react";
import type { LookbackWindow } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { Area, AreaChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";

type Audience = NonNullable<RouterOutputs["audience"]["get"]>;

export function PropensityChart({ audience }: { audience: Audience }) {
	const lookbackWindow = (useSearchParams().get("lookbackWindow") || "DAYS_90") as LookbackWindow;

	const deterministic =
		lookbackWindow === "DAYS_90" ? audience.audienceDeterministic90days : audience.audienceDeterministic1year;
	const extended = lookbackWindow === "DAYS_90" ? audience.audienceExtended90days : audience.audienceExtended1year;

	const deterministicPropensity = Math.floor(seededRandom(audience.name) * (99 - 90 + 1) + 90);
	const extendedPropensity = Math.floor(seededRandom(audience.name) * (80 - 70 + 1) + 70);

	const chartDeterministic = deterministic * 2;

	const data = Array.from({ length: 50 }, (_, i) => {
		const splitIndex = 20;
		if (i < splitIndex) {
			const t = i / (splitIndex - 1);
			const audienceSize = Math.round(t * chartDeterministic);
			const easedT = 1 - (1 - t) ** 3;
			const propensity = easedT * deterministicPropensity;
			return {
				audienceSize,
				propensity,
			};
		}
		const t = (i - splitIndex) / (50 - 1 - splitIndex);
		const audienceSize = Math.round(chartDeterministic + t * (extended - chartDeterministic));
		const easedT = t ** 3;
		const propensity = deterministicPropensity * (extendedPropensity / deterministicPropensity) ** easedT;
		return {
			audienceSize,
			propensity,
		};
	});

	const chartConfig = {
		propensity: {
			label: "Propensity",
			color: "#0d9488",
		},
	};

	return (
		<div className="flex flex-col">
			<div className="my-4 h-[300px]">
				<ChartContainer config={chartConfig} className="h-[300px] w-full">
					<AreaChart
						accessibilityLayer
						data={data}
						height={100}
						margin={{
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dataKey="audienceSize" type="number" domain={[0, extended]} hide />
						<YAxis dataKey="propensity" domain={[25, 100]} hide />
						<defs>
							<linearGradient id="fillPropensity" x1="0" y1="0" x2="1" y2="0">
								<stop offset="5%" stopColor="#0d9488" stopOpacity={0.2} />
								<stop offset="95%" stopColor="#0d9488" stopOpacity={0.9} />
							</linearGradient>
						</defs>
						<Area dataKey="propensity" type="natural" fill="url(#fillPropensity)" stroke="#0d9488" />
						<ReferenceLine x={chartDeterministic} stroke="black" strokeWidth={2} />
						<ChartTooltip
							cursor
							content={
								<ChartTooltipContent
									formatter={(value, name, item) => (
										<div className="grid min-w-[12rem] gap-1.5 p-1">
											<div className="flex items-center justify-between">
												<span className="text-muted-foreground">Propensity</span>
												<span className="font-bold text-foreground">{Math.round(item.payload.propensity)}%</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-muted-foreground">Audience Size</span>
												<span className="font-bold text-foreground">
													{new Intl.NumberFormat("en-US").format(item.payload.audienceSize)}
												</span>
											</div>
										</div>
									)}
									hideIndicator
									hideLabel
								/>
							}
						/>
					</AreaChart>
				</ChartContainer>
			</div>
			<div className="flex flex-row justify-between text-muted-foreground text-sm">
				<div className="flex flex-row gap-20">
					<div className="flex flex-col">
						<div>Zero</div>
						<div>0</div>
					</div>
					<div className="flex flex-col">
						<div>Deterministic</div>
						<div>{new Intl.NumberFormat("en-US").format(deterministic)}</div>
					</div>
				</div>
				<div className="flex flex-col text-right">
					<div>Extended</div>
					<div>{new Intl.NumberFormat("en-US").format(extended)}</div>
				</div>
			</div>
		</div>
	);
}
