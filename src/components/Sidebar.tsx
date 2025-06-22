"use client";
import { useDiscoverTab } from "@/context/DiscoverTabContext";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	const { tab, setTab } = useDiscoverTab();

	if (pathname.startsWith("/my-audiences")) {
		return (
			<aside className="fixed top-16 left-0 z-30 h-full w-[20%] overflow-y-auto bg-transparent p-6">
				<div className="mb-6">
					<h2 className="mb-2 font-semibold text-xl">My Audiences</h2>
					<p className="mb-2 text-neutral-500 text-sm">
						Your saved and shared audiences. Use these for future analysis, modeling, or activation.
					</p>
				</div>
			</aside>
		);
	}

	return (
		<aside className="fixed top-16 left-0 z-30 h-full w-[20%] overflow-y-auto bg-transparent p-6">
			<h2 className="mb-2 font-semibold text-black text-xl">Discover</h2>
			<p className="mb-4 text-neutral-500 text-sm">
				Discover new brand audiences, see audience details, and build custom audiences.
			</p>
			<div className="flex flex-col gap-2">
				<button
					type="button"
					className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 font-medium text-base transition-all ${
						tab === "brands"
							? "border border-[#DCD2BF] bg-[#DCD2BF] text-black"
							: "border border-[#DCD2BF] bg-transparent text-black hover:bg-[#E9E3D4]"
					}
          `}
					onClick={() => setTab("brands")}
				>
					<span>🥤</span>
					Brands
				</button>
				<button
					type="button"
					className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 font-medium text-base transition-all ${
						tab === "categories"
							? "border border-[#DCD2BF] bg-[#DCD2BF] text-black"
							: "border border-[#DCD2BF] bg-transparent text-black hover:bg-[#E9E3D4]"
					}
          `}
					onClick={() => setTab("categories")}
				>
					<span>🍿</span>
					Categories
				</button>
			</div>
		</aside>
	);
}
