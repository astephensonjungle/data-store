import { SearchInput } from "@/components/search-input";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn("flex h-screen flex-col overflow-hidden bg-background", geist.variable)}>
				<NuqsAdapter>
					<TRPCReactProvider>
						<header className="flex h-[64px] items-center justify-between border-b px-8 py-4">
							<Link href="/discover/all" className="flex items-center gap-2">
								<Image src="/assets/logo-black.svg" alt="Logo" width={40} height={40} />
							</Link>
							<SearchInput />
							<div className="w-[60px]" />
						</header>
						<div>{children}</div>
					</TRPCReactProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
