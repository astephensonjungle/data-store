import { Sidebar, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarTrigger } from "@/components/ui/sidebar";
import { api } from "@/trpc/server";
import { AppSidebarButton } from "./app-sidebar-button";

export async function AppSidebar() {
	const categories = await api.baseCategory.list();
	const items = categories.map((category) => ({
		title: category.name,
		url: `/discover/${category.slug}`,
		icon: category.emoji,
	}));

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarTrigger />
			</SidebarHeader>
			<SidebarGroupContent className="px-1.5 py-8">
				<SidebarMenu className="flex flex-col gap-1">
					{items.map((item) => (
						<AppSidebarButton key={item.title} item={item} />
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</Sidebar>
	);
}
