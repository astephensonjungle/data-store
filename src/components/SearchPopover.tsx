import React, { useEffect, useState } from "react";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { useAudiences } from "@/hooks/useAudiences";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchPopoverProps {
  onOpenChange: (open: boolean) => void;
  query: string;
  setQuery: (q: string) => void;
}

const RECENT_KEY = "recent_searches";

export default function SearchPopover({
  onOpenChange,
  query,
  setQuery,
}: SearchPopoverProps) {
  const { audiences } = useAudiences();
  const [recent, setRecent] = useState<string[]>([]);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(RECENT_KEY);
      if (stored) setRecent(JSON.parse(stored));
    }
  }, []);

  // Add to recent searches
  const addRecent = (term: string) => {
    const updated = [term, ...recent.filter((r) => r !== term)].slice(0, 5);
    setRecent(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    }
  };

  // Filter logic
  const q = query.trim().toLowerCase();
  const brandResults = q
    ? brands.filter((b) => b.name.toLowerCase().includes(q))
    : [];
  const categoryResults = q
    ? categories.filter((c) => c.name.toLowerCase().includes(q))
    : [];
  const audienceResults = q
    ? audiences.filter((a) => a.name.toLowerCase().includes(q))
    : [];

  // Handle navigation on result click
  const handleBrandClick = (name: string) => {
    addRecent(name);
    onOpenChange(false);
    router.push(`/discover?brand=${encodeURIComponent(name)}`);
  };
  const handleCategoryClick = (name: string) => {
    addRecent(name);
    onOpenChange(false);
    router.push(`/discover?category=${encodeURIComponent(name)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30">
      <div className="mt-8 w-full max-w-2xl rounded-2xl bg-[#f6f3ee] shadow-xl p-8 relative">
        <input
          type="text"
          autoFocus
          placeholder="Search for brands, categories, or saved audiences"
          className="w-full px-6 py-4 rounded-full bg-neutral-100 text-lg focus:outline-none focus:ring-2 focus:ring-black mb-6"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Results or Recent Searches */}
        {q ? (
          <div>
            {brandResults.length > 0 && (
              <div className="mb-4">
                <div className="text-neutral-500 text-sm mb-2">Brands</div>
                {brandResults.map((b) => (
                  <div
                    key={b.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 cursor-pointer"
                    onClick={() => handleBrandClick(b.name)}
                  >
                    <Image
                      src={b.brandImage}
                      alt={b.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{b.name}</div>
                      <div className="text-xs text-neutral-500">Brand</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {categoryResults.length > 0 && (
              <div className="mb-4">
                <div className="text-neutral-500 text-sm mb-2">Categories</div>
                {categoryResults.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 cursor-pointer"
                    onClick={() => handleCategoryClick(c.name)}
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-neutral-500">Category</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {audienceResults.length > 0 && (
              <div className="mb-4">
                <div className="text-neutral-500 text-sm mb-2">
                  Saved Audiences
                </div>
                {audienceResults.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 cursor-pointer"
                    onClick={() => {
                      addRecent(a.name);
                      onOpenChange(false);
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                    <div>
                      <div className="font-medium">{a.name}</div>
                      <div className="text-xs text-neutral-500">Audience</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {brandResults.length +
              categoryResults.length +
              audienceResults.length ===
              0 && (
              <div className="text-neutral-400 text-center py-8">
                No results found.
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-neutral-500 text-sm mb-2">Recent searches</div>
            {recent.length === 0 ? (
              <div className="text-neutral-400 text-center py-8">
                No recent searches.
              </div>
            ) : (
              recent.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 cursor-pointer"
                  onClick={() => {
                    setQuery(r);
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-200" />
                  <div>
                    <div className="font-medium">{r}</div>
                    <div className="text-xs text-neutral-500">Recent</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        <button
          className="absolute top-4 right-8 text-2xl text-neutral-400 hover:text-neutral-600"
          onClick={() => onOpenChange(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
