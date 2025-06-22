import { AppSidebar } from "@/components/app-sidebar";
import { SearchInput } from "@/components/search-input";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import { Geist } from "next/font/google";
import Image from "next/image";
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
							<div className="flex items-center gap-2">
								<Image src="/assets/logo-black.svg" alt="Logo" width={40} height={40} />
							</div>
							<SearchInput />
							<div className="w-[60px]" />
						</header>
						<div className="relative flex flex-1">
							<SidebarProvider>
								<AppSidebar />
								<main className="max-h-[calc(100svh-64px)] flex-1 overflow-y-auto">{children}</main>
							</SidebarProvider>
						</div>
					</TRPCReactProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
