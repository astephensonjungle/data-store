"use client";

import type { RouterOutputs } from "@/trpc/react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { Pie, PieChart } from "recharts";
import { PropensityChart } from "./propensity-chart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const retilersImages = {
	walmart: "/assets/retailers/walmart.png",
	target: "/assets/retailers/target.png",
	wholefoods: "/assets/retailers/whole_foods.png",
	kroger: "/assets/retailers/kroger.png",
	wegmans: "/assets/retailers/wegmans.png",
};

type Audience = NonNullable<RouterOutputs["audience"]["get"]>;

export function AudienceAccordion({ audience }: { audience: Audience }) {
	const ageData = [
		{ age: "18-24", value: audience.age18to24, fill: "var(--color-18-24)" },
		{ age: "25-34", value: audience.age25to34, fill: "var(--color-25-34)" },
		{ age: "35-44", value: audience.age35to44, fill: "var(--color-35-44)" },
		{ age: "45-54", value: audience.age45to54, fill: "var(--color-45-54)" },
		{ age: "55-64", value: audience.age55to64, fill: "var(--color-55-64)" },
		{ age: "65+", value: audience.age65plus, fill: "var(--color-65+)" },
		{ age: "Unknown", value: audience.ageUnknown, fill: "var(--color-unknown)" },
	];

	const ageChartConfig = {
		"18-24": {
			label: "18-24",
			color: "#e9d5ff",
		},
		"25-34": {
			label: "25-34",
			color: "#d8b4fe",
		},
		"35-44": {
			label: "35-44",
			color: "#a855f7",
		},
		"45-54": {
			label: "45-54",
			color: "#9333ea",
		},
		"55-64": {
			label: "55-64",
			color: "#581c87",
		},
		"65+": {
			label: "65+",
			color: "#3b0764",
		},
	};

	const genderData = [
		{ gender: "Male", value: audience.genderMale, fill: "var(--color-male)" },
		{ gender: "Female", value: audience.genderFemale, fill: "var(--color-female)" },
		{ gender: "Unknown", value: audience.genderUnknown, fill: "var(--color-other)" },
	];

	const genderChartConfig = {
		male: {
			label: "Male",
			color: "#bbf7d0",
		},
		female: {
			label: "Female",
			color: "#4d7c0f",
		},
		other: {
			label: "Other",
			color: "#365314",
		},
	};

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Audience Snapshot</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-row items-start justify-around py-3">
						<div className="flex flex-col items-center gap-2">
							<div className="font-medium">Age Distribution</div>
							<ChartContainer config={ageChartConfig} className="mx-auto aspect-square h-[200px]">
								<PieChart>
									<ChartTooltip content={<ChartTooltipContent nameKey="age" hideLabel />} />
									<Pie data={ageData} dataKey="value" nameKey="age" innerRadius={30} />
								</PieChart>
							</ChartContainer>
							<div className="grid grid-cols-3 gap-x-8 gap-y-1 text-xs">
								{Object.entries(ageChartConfig).map(([key, config]) => (
									<div key={key} className="flex items-center gap-1.5">
										<span className="h-2 w-2" style={{ backgroundColor: config.color }} />
										<span>{config.label}</span>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="font-medium">Gender Distribution</div>
							<ChartContainer config={genderChartConfig} className="mx-auto aspect-square h-[200px]">
								<PieChart>
									<ChartTooltip content={<ChartTooltipContent nameKey="gender" hideLabel />} />
									<Pie data={genderData} dataKey="value" nameKey="gender" innerRadius={30} />
								</PieChart>
							</ChartContainer>
							<div className="flex flex-row gap-4 text-xs">
								{Object.entries(genderChartConfig).map(([key, config]) => (
									<div key={key} className="flex items-center gap-1.5">
										<span className="h-2 w-2" style={{ backgroundColor: config.color }} />
										<span>{config.label}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Propensity to purchase</AccordionTrigger>
				<AccordionContent>
					<p className="text-muted-foreground text-sm">
						As the size of each look-alike ExtendedAudience(TM) grows, its expected campaign performance is known to
						degrade uniquely over time. Choosing an optimal audience size is critical, and Becausal can help optimize
						the trade-off between look-alike audience size and expected performance.
					</p>
					<PropensityChart audience={audience} />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Total spend by Retailer</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col divide-y">
						{audience.retailerDistribution.map((distribution) => (
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
								<div className="text-sm">{distribution.count}</div>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
