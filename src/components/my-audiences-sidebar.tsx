"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MyAudiencesSidebar() {
	const pathname = usePathname();
	return (
		<div className="flex flex-col gap-6 pt-8 pl-5">
			<Link
				href="/my-audiences/all"
				className={cn("text-left font-normal text-base", pathname === "/my-audiences/all" && "font-bold")}
			>
				All audiences
			</Link>
			<Link
				href="/my-audiences/deterministic"
				className={cn("text-left font-normal text-base", pathname === "/my-audiences/deterministic" && "font-bold")}
			>
				Deterministic audiences
			</Link>
			<Link
				href="/my-audiences/extended"
				className={cn("text-left font-normal text-base", pathname === "/my-audiences/extended" && "font-bold")}
			>
				Extended audiences
			</Link>
		</div>
	);
}
