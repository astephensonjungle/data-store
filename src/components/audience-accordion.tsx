"use client";

import Image from "next/image";
import { Pie, PieChart } from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const retilers = [
	{
		name: "Walmart",
		image: "/assets/retailers/walmart.png",
		spend: "$12,400,000",
	},
	{
		name: "Target",
		image: "/assets/retailers/target.png",
		spend: "$10,850,000",
	},
	{
		name: "Whole Foods",
		image: "/assets/retailers/whole_foods.png",
		spend: "$9,858,424",
	},
	{
		name: "Kroger",
		image: "/assets/retailers/kroger.png",
		spend: "$6,788,302",
	},
	{
		name: "Wegmans",
		image: "/assets/retailers/wegmans.png",
		spend: "$5,850,000",
	},
];

const ageData = [
	{ age: "18-24", value: 30, fill: "var(--color-18-24)" },
	{ age: "25-34", value: 25, fill: "var(--color-25-34)" },
	{ age: "35-44", value: 20, fill: "var(--color-35-44)" },
	{ age: "45-54", value: 15, fill: "var(--color-45-54)" },
	{ age: "55-64", value: 5, fill: "var(--color-55-64)" },
	{ age: "65+", value: 5, fill: "var(--color-65+)" },
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
	{ gender: "Male", value: 40, fill: "var(--color-male)" },
	{ gender: "Female", value: 45, fill: "var(--color-female)" },
	{ gender: "Other", value: 15, fill: "var(--color-other)" },
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

export function AudienceAccordion() {
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
				<AccordionTrigger>Total spend by Retailer</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col divide-y">
						{retilers.map((retailer) => (
							<div className="flex flex-row items-center gap-2 p-3" key={retailer.name}>
								<Image
									src={retailer.image}
									alt={retailer.name}
									width={32}
									height={32}
									className="h-[32px] w-[32px] rounded-lg"
								/>
								<div className="ml-2 flex-1 text-sm">{retailer.name}</div>
								<div className="text-sm">{retailer.spend}</div>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
