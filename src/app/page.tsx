import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logos = [
	{ src: "/logos/logo_1.png", width: 80, height: 58 },
	{ src: "/logos/logo_2.svg", width: 150, height: 92 },
	{ src: "/logos/logo_3.png", width: 150, height: 47 },
	{ src: "/logos/logo_4.png", width: 150, height: 47 },
	{ src: "/logos/logo_5.svg", width: 150, height: 17 },
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
			<main className="flex flex-col">
				<div className="relative h-[300px] w-full overflow-hidden bg-[#242323] px-4 md:h-[400px] md:px-6">
					<div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-start px-4 py-8 md:py-16">
						<h1 className="font-normal text-6xl text-white">CPG Data Store</h1>
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
			<div className="w-full px-4 py-20 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
					<div className="text-xl leading-snug lg:text-2xl">
						Welcome to MVP V1.0 of Becausal&apos;s CPG Data Store. Once complete, the entirety of our Purchase Dataset
						is here for you (600 Categories, 8K Brands, 800K UPCs) ... all in one place. We believe it is the largest
						freely searchable CPG purchase/transaction dataset of its kind. This early build is here for feedback -
						these next weeks we seek your comments and suggested improvements - to make it a valuable tool for you — our
						partners and customers.
					</div>

					<div className="flex flex-wrap items-center justify-between gap-12">
						{logos.map((logo) => (
							<Image src={logo.src} alt="Logo" width={logo.width} height={logo.height} key={logo.src} />
						))}
					</div>

					<div className="flex items-center">
						<div className="h-3 w-3 flex-none rounded-full bg-[#242323]" />
						<div className="h-px flex-1 bg-[#242323]" />
						<Button size="lg" className="border border-[#242323]" variant="outline" asChild>
							<Link href="/sign-in">Log in</Link>
						</Button>
					</div>
				</div>
			</div>

			<div className="w-full bg-[#242323] px-4 py-12 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 lg:flex-row">
					<Image src="/glow.svg" alt="Glow" width={500} height={500} />
					<div className="flex flex-1 flex-col gap-6">
						<h2 className="text-5xl text-[#FBFBFB]">Engine checklight section</h2>
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
								<Link href="/sign-in">Log in</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full px-3 lg:px-6">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 py-16">
					<h2 className="text-4xl text-[#242323]">Data Store Analysis</h2>
					<Image src="/stats.png" alt="Stats" width={0} height={0} sizes="100vw" className="h-auto w-full" />
				</div>
			</div>
		</div>
	);
}
