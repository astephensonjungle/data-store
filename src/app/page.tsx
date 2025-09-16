import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";


const logos = [
	{
		src: "/logos/logo_1.png",
		width: 80,
		height: 58,
		name: "IAB Tech Lab",
		description:
			"Becausal has passed certification of the Data Transparency Standard (DTS) for all of its audience data.",
	},
	{
		src: "/logos/logo_2.svg",
		width: 150,
		height: 92,
		name: "Neutronian",
		description:
			"Becausal has passed Neutronian's NQI certification program for data quality, governance, and provenance.",
	},
	{
		src: "/logos/logo_3.png",
		width: 150,
		height: 47,
		name: "SafeGuard Privacy",
		description: "Becausal is an enrolled client of SafeGuard Privacy's privacy compliance program for consumer data.",
	},
	{
		src: "/logos/logo_4.png",
		width: 150,
		height: 47,
		name: "LiveRamp",
		description:
			"Becausal uses LiveRamp APIs to push audiences to Demand-Side Platforms (DSPs) for campaign activation.",
	},
	{
		src: "/logos/logo_5.svg",
		width: 150,
		height: 17,
		name: "The Trade Desk",
		description: "Becausal's CPG Data Store pushes audiences to Trade Desk for campaign targeting and activation.",
	},
];

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col overflow-y-auto">
			<header className="sticky top-0 z-50 w-full bg-[#F4EFE6] px-4 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl items-center justify-between py-4">
					<Image src="/becausal_logo.svg" alt="Becausal Logo" width={140} height={50} />
					<Button asChild>
						<Link href="/sign-in">
							<span className="hidden sm:block">Log in to CPG Data Store</span>
							<span className="block sm:hidden">
								<LogInIcon />
							</span>
						</Link>
					</Button>
				</div>
			</header>
			<main className="flex flex-col bg-[#242323]">
				<div className="relative h-auto w-full overflow-hidden mx-auto py-12 md:px-6">
					<div className="inset-0 relative z-10 text-white w-2xl max-w-7xl justify-start py-8 ml-16 md:py-16">
						<h1 className="font-normal text-6xl">CPG Data Store</h1>
						<div className="mt-8 text-lg leading-snug lg:text-xl">
							Welcome to MVP V1.0 of Becausal&apos;s CPG Data Store. Once complete, the entirety of our Purchase Dataset
							is here for you (600 Categories, 8K Brands, 800K UPCs) ... all in one place. We believe it is the largest
							freely searchable CPG purchase/transaction dataset of its kind. This early build is here for feedback -
							these next weeks we seek your comments and suggested improvements - to make it a valuable tool for you —
							our partners and customers.
						</div>
					</div>
					<Image
						src="/sphere.svg"
						alt="Home Hero"
						width={700}
						height={600}
						className="absolute top-0 right-0 bottom-0 h-full !lg:w-[700px]"
					/>
				</div>
			</main>
			<div className="w-full px-3 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 py-16">
					<h2 className="text-4xl text-[#242323]">CPG Data Store Analytics - trailing 4 weeks</h2>
					<iframe
						src="https://staging.d1gspw25gkpghe.amplifyapp.com/"
						className="h-[800px] w-full rounded-2xl border-0"
						title="CPG Data Store Analytics"
					/>
				</div>
			</div>
			<div className="w-full bg-[#242323] px-4 py-12 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 lg:flex-row">
					<Image src="/glow.svg" alt="Glow" width={500} height={500} />
					<div className="flex flex-1 flex-col gap-6">
						<h2 className="text-5xl text-[#FBFBFB]">Check Engine Light</h2>
						<p className="text-[#FBFBFB] text-lg">
							Becausal's algorithmic Check Engine Light confirms that our audience-building approach uses best practices
							for: consumer data processing, data governance, and transparent look-alike audience creation. We strive to
							make all our audiences both human and mathematically explainable to consumers, marketers, and regulators
							via our use of AuditableAI(TM) to create ExtendedAudiences(TM) that set new standards of market
							performance.
						</p>
						<div className="flex items-center">
							<div className="h-3 w-3 flex-none rounded-full bg-[#F4EFE6]" />
							<div className="h-px flex-1 bg-[#F4EFE6]" />
							<Button size="lg" className="!text-[#242323] bg-[#F4EFE6] hover:bg-[#F4EFE6]" asChild>
								<Link href="/sign-in">Learn more</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full px-4 py-20 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
					<div className="flex flex-wrap items-center justify-between gap-12">
						{logos.map((logo) => (
							<HoverCard key={logo.src}>
								<HoverCardTrigger asChild>
									<div className="cursor-pointer transition-transform hover:scale-105">
										<Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
									</div>
								</HoverCardTrigger>
								<HoverCardContent>
									<div className="space-y-2">
										<h4 className="font-semibold text-sm">{logo.name}</h4>
										<p className="text-muted-foreground text-sm">{logo.description}</p>
									</div>
								</HoverCardContent>
							</HoverCard>
						))}
					</div>

					<div className="flex items-center">
						<div className="h-3 w-3 flex-none rounded-full bg-[#242323]" />
						<div className="h-px flex-1 bg-[#242323]" />
						<Button size="lg" className="border border-[#242323]" variant="outline" asChild>
							<Link href="/sign-in">Learn more</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
