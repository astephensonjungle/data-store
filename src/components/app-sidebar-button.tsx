"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export function AppSidebarButton({ item }: { item: { title: string; url: string; icon: string } }) {
	const pathname = usePathname();

	return (
		<SidebarMenuItem key={item.title}>
			<SidebarMenuButton asChild className="flex" size="lg" isActive={pathname === item.url}>
				<Link href={item.url}>
					<div className="text-2xl">{item.icon}</div>
					<span className="pl-2">{item.title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}
