import React, { useEffect, useState, useRef, useMemo } from "react";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { useAudiences } from "@/hooks/useAudiences";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchPopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: string;
  setQuery: (q: string) => void;
}

const RECENT_KEY = "recent_searches";

export default function SearchPopover({
  open,
  onOpenChange,
  query,
  setQuery,
}: SearchPopoverProps) {
  const { audiences } = useAudiences();
  const [recent, setRecent] = useState<string[]>([]);
  const router = useRouter();
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

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

  // Filter logic with useMemo
  const q = query.trim().toLowerCase();
  const brandResults = useMemo(
    () => (q ? brands.filter((b) => b.name.toLowerCase().includes(q)) : []),
    [q]
  );

  const categoryResults = useMemo(
    () => (q ? categories.filter((c) => c.name.toLowerCase().includes(q)) : []),
    [q]
  );

  const audienceResults = useMemo(
    () => (q ? audiences.filter((a) => a.name.toLowerCase().includes(q)) : []),
    [q, audiences]
  );

  // Combine results for keyboard navigation
  const results = useMemo(() => {
    if (!q) return [];
    return [
      ...brandResults.map((b) => ({ ...b, type: "brand" as const })),
      ...categoryResults.map((c) => ({ ...c, type: "category" as const })),
      ...audienceResults.map((a) => ({ ...a, type: "audience" as const })),
    ];
  }, [q, brandResults, categoryResults, audienceResults]);

  useEffect(() => {
    if (q) {
      setActiveIndex(brandResults.length > 0 ? 0 : -1);
    } else {
      setActiveIndex(-1);
    }
  }, [q, brandResults.length]);

  // Helper to set search param and clear brand/category
  const goToSearch = (search: string) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    router.push(`/discover?${params.toString()}`);
    onOpenChange(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!q || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        const item = results[activeIndex];
        if (item.type === "brand") handleBrandClick(item.name);
        else if (item.type === "category") handleCategoryClick(item.name);
        else onOpenChange(false);
      } else if (q) {
        // No selection, treat as search
        goToSearch(query);
      }
    } else if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  // Highlight matching text
  const highlight = (text: string) => {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="bg-[#DCD2BF] font-semibold">
          {text.slice(idx, idx + q.length)}
        </span>
        {text.slice(idx + q.length)}
      </>
    );
  };

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onOpenChange(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onOpenChange]);

  // Focus input on open
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

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
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center bg-black/30 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={popoverRef}
        className="mt-8 w-full max-w-2xl rounded-2xl bg-[#f6f3ee] shadow-xl p-8 relative transition-all duration-300 transform-gpu translate-y-0 animate-fade-in"
        style={{ minHeight: 200 }}
      >
        <input
          ref={inputRef}
          type="text"
          autoFocus
          placeholder="Search for brands, categories, or saved audiences"
          className="w-full px-0 py-2 mb-4 bg-[#f6f3ee] text-base text-neutral-800 placeholder:text-neutral-400 border-0 shadow-none focus:outline-none focus:ring-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* Results or Recent Searches */}
        {q ? (
          <div className="max-h-[60vh] overflow-y-auto">
            {brandResults.length > 0 && (
              <div className="mb-4">
                <div className="text-neutral-500 text-sm mb-2">Brands</div>
                {brandResults.map((b, idx) => (
                  <div
                    key={b.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeIndex === idx
                        ? "bg-[#E9E3D4]"
                        : "hover:bg-[#E9E3D4]"
                    }`}
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
                      <div className="font-medium">{highlight(b.name)}</div>
                      <div className="text-xs text-neutral-500">Brand</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {categoryResults.length > 0 && (
              <div className="mb-4">
                <div className="text-neutral-500 text-sm mb-2">Categories</div>
                {categoryResults.map((c, idx) => (
                  <div
                    key={c.name}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeIndex === idx + brandResults.length
                        ? "bg-[#E9E3D4]"
                        : "hover:bg-[#E9E3D4]"
                    }`}
                    onClick={() => handleCategoryClick(c.name)}
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                    <div>
                      <div className="font-medium">{highlight(c.name)}</div>
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
                {audienceResults.map((a, idx) => (
                  <div
                    key={a.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeIndex ===
                      idx + brandResults.length + categoryResults.length
                        ? "bg-[#E9E3D4]"
                        : "hover:bg-[#E9E3D4]"
                    }`}
                    onClick={() => {
                      addRecent(a.name);
                      onOpenChange(false);
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                    <div>
                      <div className="font-medium">{highlight(a.name)}</div>
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
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E9E3D4] cursor-pointer"
                  onClick={() => {
                    goToSearch(r);
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
      </div>
    </div>
  );
}
