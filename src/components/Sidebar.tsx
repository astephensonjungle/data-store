"use client";
import { usePathname } from "next/navigation";
import { useDiscoverTab } from "@/context/DiscoverTabContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { tab, setTab } = useDiscoverTab();

  if (pathname.startsWith("/my-audiences")) {
    return (
      <aside className="bg-transparent p-6">
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
    <aside className="bg-transparent p-6">
      <h2 className="text-xl font-semibold mb-2 text-black">Discover</h2>
      <p className="text-neutral-500 text-sm mb-4">
        Discover new brand audiences, see audience details, and build custom
        audiences.
      </p>
      <div className="flex flex-col gap-2">
        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all
            ${
              tab === "brands"
                ? "bg-black text-white"
                : "bg-[#f6f3ee] text-black border border-black"
            }
          `}
          onClick={() => setTab("brands")}
        >
          <span>🥤</span>
          Brands
        </button>
        <button
          className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all
            ${
              tab === "categories"
                ? "bg-black text-white"
                : "bg-[#f6f3ee] text-black border border-black"
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
