"use client";

import type { RouterOutputs } from "@/trpc/react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";
import { PropensityChart } from "./propensity-chart";
import { RetailerDistribution } from "./retailer-distribution";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

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
			<AccordionItem value="item-3">
				<AccordionTrigger>Total spend by Retailer</AccordionTrigger>
				<AccordionContent>
					<RetailerDistribution audience={audience} />
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-1">
				<AccordionTrigger>Demographics</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-row items-start justify-around py-3">
						<div className="flex flex-col items-center gap-2">
							<div className="font-medium">Age Distribution</div>
							<ChartContainer config={ageChartConfig} className="h-[200px] w-[350px]">
								<BarChart data={ageData}>
									<CartesianGrid vertical={false} />
									<XAxis dataKey="age" tickLine={false} tickMargin={10} axisLine={false} />
									<ChartTooltip content={<ChartTooltipContent />} />
									<Bar dataKey="value" radius={4}>
										{ageData.map((entry) => (
											<Cell key={entry.age} fill={entry.fill} />
										))}
									</Bar>
								</BarChart>
							</ChartContainer>
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="font-medium">Gender Distribution</div>
							<ChartContainer config={genderChartConfig} className="h-[200px] w-[200px]">
								<BarChart data={genderData}>
									<CartesianGrid vertical={false} />
									<XAxis dataKey="gender" tickLine={false} tickMargin={10} axisLine={false} />
									<ChartTooltip content={<ChartTooltipContent />} />
									<Bar dataKey="value" radius={4}>
										{genderData.map((entry) => (
											<Cell key={entry.gender} fill={entry.fill} />
										))}
									</Bar>
								</BarChart>
							</ChartContainer>
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
		</Accordion>
	);
}
