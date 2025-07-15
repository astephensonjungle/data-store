"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from "./search-input";
import { UserButton } from "./user-button";

export function Header() {
	const pathname = usePathname();

	const navigationItems = [
		{
			label: "Discover",
			href: "/discover/all",
			active: pathname.startsWith("/discover"),
		},
		{
			label: "My audiences",
			href: "/my-audiences",
			active: pathname.startsWith("/my-audiences"),
		},
	];

	return (
		<header className="flex h-16 items-center border-b px-8 py-4">
			<Link href="/discover/all" className="flex items-center gap-2">
				<Image src="/assets/logo-black.svg" alt="Logo" width={40} height={40} />
			</Link>

			<div className="pl-8">
				<NavigationMenu viewport={false}>
					<NavigationMenuList>
						{navigationItems.map((item) => (
							<NavigationMenuItem key={item.label}>
								<NavigationMenuLink
									asChild
									className={cn(navigationMenuTriggerStyle(), item.active && "font-semibold")}
								>
									<Link href={item.href}>{item.label}</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			<div className="flex-1 px-12">
				<SearchInput />
			</div>
			<div className="w-[60px]">
				<UserButton />
			</div>
		</header>
	);
}
