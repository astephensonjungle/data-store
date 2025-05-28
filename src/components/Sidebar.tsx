"use client";
import { usePathname } from "next/navigation";
import { useDiscoverTab } from "@/context/DiscoverTabContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { tab, setTab } = useDiscoverTab();

  if (pathname.startsWith("/my-audiences")) {
    return (
      <aside className="bg-transparent p-6 fixed top-16 left-0 h-full w-[20%] z-30 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">My Audiences</h2>
          <p className="text-neutral-500 text-sm mb-2">
            Your saved and shared audiences. Use these for future analysis,
            modeling, or activation.
          </p>
        </div>
      </aside>
    );
  }

  // Default: Discover sidebar
  return (
    <aside className="bg-transparent p-6 fixed top-16 left-0 h-full w-[20%] z-30 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2 text-black">Discover</h2>
      <p className="text-neutral-500 text-sm mb-4">
        Discover new brand audiences, see audience details, and build custom
        audiences.
      </p>
      <div className="flex flex-col gap-2">
        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all cursor-pointer
            ${
              tab === "brands"
                ? "bg-[#DCD2BF] text-black border border-[#DCD2BF]"
                : "bg-transparent text-black border border-[#DCD2BF] hover:bg-[#E9E3D4]"
            }
          `}
          onClick={() => setTab("brands")}
        >
          <span>🥤</span>
          Brands
        </button>
        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all cursor-pointer
            ${
              tab === "categories"
                ? "bg-[#DCD2BF] text-black border border-[#DCD2BF]"
                : "bg-transparent text-black border border-[#DCD2BF] hover:bg-[#E9E3D4]"
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
