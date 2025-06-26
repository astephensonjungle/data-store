import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DiscoverLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex flex-1">
			<SidebarProvider>
				<AppSidebar />
				<main className="max-h-[calc(100svh-64px)] flex-1 overflow-y-auto">{children}</main>
			</SidebarProvider>
		</div>
	);
}
