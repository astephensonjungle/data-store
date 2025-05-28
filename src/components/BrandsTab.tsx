"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brands } from "@/data/brands";
import BrandCard from "@/components/BrandCard";
import BrandSheet from "@/components/BrandSheet";
import type { Brand } from "@/data/brands";
import { categories } from "@/data/categories";
import type { CategoryNode } from "@/data/categories";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronRight, X } from "lucide-react";

// Helper to find the category path (breadcrumb) for a given category name
function findCategoryPath(
  nodes: CategoryNode[],
  target: string,
  path: string[] = ["All brands"]
): string[] | null {
  for (const node of nodes) {
    if (node.name === target) return [...path, node.name];
    if (node.children) {
      const res: string[] | null = findCategoryPath(node.children, target, [
        ...path,
        node.name,
      ]);
      if (res) return res;
    }
  }
  return null;
}

// Helper for windowed pagination
function getPageNumbers(page: number, totalPages: number): (number | string)[] {
  const pages: (number | string)[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("...");
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }
  return pages;
}

export default function BrandsTab() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [page, setPage] = useState(1);
  const brandsPerPage = 12;
  const searchParams = useSearchParams();
  const router = useRouter();

  const brandFilter = searchParams.get("brand");
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  let filteredBrands = brands;
  if (searchQuery) {
    const q = searchQuery.trim().toLowerCase();
    filteredBrands = brands.filter((b) => b.name.toLowerCase().includes(q));
  } else if (brandFilter) {
    filteredBrands = brands.filter((b) => b.name === brandFilter);
  } else if (categoryFilter) {
    filteredBrands = brands.filter((b) =>
      b.categories.includes(categoryFilter)
    );
  }

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [brandFilter, categoryFilter, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBrands.length / brandsPerPage)
  );
  const paginatedBrands = filteredBrands.slice(
    (page - 1) * brandsPerPage,
    page * brandsPerPage
  );

  const handleCardClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setSheetOpen(true);
  };

  const handleCategoryPillClick = (catName: string | null) => {
    if (!catName || catName === "All brands") {
      router.push("/discover");
    } else {
      router.push(`/discover?category=${encodeURIComponent(catName)}`);
    }
  };

  const filterList = ["All brands", ...categories.map((cat) => cat.name)];

  // Build the breadcrumb path for the selected category
  const categoryPath = categoryFilter
    ? findCategoryPath(categories, categoryFilter) || [
        "All brands",
        categoryFilter,
      ]
    : null;

  return (
    <div className="min-w-0 w-full">
      {/* Search indicator */}
      {searchQuery && (
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-2 rounded-full border border-[#e5e0d5] bg-[#f6f3ee] px-4 py-2 w-fit">
            <span className="rounded-full bg-[#E9E3D4] px-5 py-2 text-base font-medium text-neutral-800">
              Search: {searchQuery}
            </span>
            <button
              className="ml-2 text-neutral-500 hover:text-black transition-colors"
              onClick={() => router.push("/discover")}
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="ml-4 text-right">
            <span className="text-[#b3a47a] font-semibold text-sm align-middle">
              Showing
            </span>
            <span className="ml-2 text-sm text-neutral-800 font-medium align-middle">
              {filteredBrands.length} brands
            </span>
          </div>
        </div>
      )}
      {/* Breadcrumb indicator */}
      {!searchQuery && categoryPath && (
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-2 rounded-full border border-[#e5e0d5] bg-[#f6f3ee] px-4 py-2 w-fit">
            {categoryPath.map((cat: string, idx: number) => (
              <div key={cat} className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleCategoryPillClick(cat === "All brands" ? null : cat)
                  }
                  className="rounded-full bg-[#E9E3D4] px-5 py-2 text-base font-medium text-neutral-800 hover:bg-[#e0d9c7] transition-colors"
                >
                  {cat}
                </button>
                {idx < categoryPath.length - 1 && (
                  <ChevronRight className="h-5 w-5 text-neutral-400" />
                )}
              </div>
            ))}
            <button
              className="ml-2 text-neutral-500 hover:text-black transition-colors"
              onClick={() => handleCategoryPillClick(null)}
              aria-label="Clear filter"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="ml-4 text-right">
            <span className="text-[#b3a47a] font-semibold text-sm align-middle">
              Showing
            </span>
            <span className="ml-2 text-sm text-neutral-800 font-medium align-middle">
              {filteredBrands.length} brands
            </span>
          </div>
        </div>
      )}
      {/* Brand grid */}
      <div className="grid grid-cols-3 gap-2">
        {paginatedBrands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleCardClick(brand)}
            className="cursor-pointer"
          >
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            {getPageNumbers(page, totalPages).map((p, i) =>
              p === "..." ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    isActive={page === p}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(p as number);
                    }}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.min(totalPages, p + 1));
                }}
                aria-disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      {selectedBrand && (
        <BrandSheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          brand={selectedBrand}
        />
      )}
    </div>
  );
}
