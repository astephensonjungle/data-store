"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brands } from "@/data/brands";
import BrandCard from "@/components/BrandCard";
import BrandSheet from "@/components/BrandSheet";
import { Button } from "@/components/ui/button";
import type { Brand } from "@/data/brands";
import { categories } from "@/data/categories";

export default function BrandsTab() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const brandFilter = searchParams.get("brand");
  const categoryFilter = searchParams.get("category");

  let filteredBrands = brands;
  if (brandFilter) {
    filteredBrands = brands.filter((b) => b.name === brandFilter);
  } else if (categoryFilter) {
    filteredBrands = brands.filter((b) =>
      b.categories.includes(categoryFilter)
    );
  }

  const handleCardClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setSheetOpen(true);
  };

  const handleCategoryPillClick = (catName: string | null) => {
    if (!catName) {
      router.push("/discover");
    } else {
      router.push(`/discover?category=${encodeURIComponent(catName)}`);
    }
  };

  return (
    <div className="min-w-0 w-full">
      {/* Horizontally scrollable Tier 1 Category filter pills */}
      <div className="flex gap-2 mb-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent pb-2 w-full max-w-full min-w-0">
        <Button
          className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            !categoryFilter
              ? "bg-black text-white"
              : "bg-neutral-200 text-black hover:bg-neutral-300"
          }`}
          onClick={() => handleCategoryPillClick(null)}
          variant="secondary"
        >
          All brands
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.name}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
              categoryFilter === cat.name
                ? "bg-black text-white"
                : "bg-neutral-200 text-black hover:bg-neutral-300"
            }`}
            onClick={() => handleCategoryPillClick(cat.name)}
            variant="secondary"
          >
            {cat.name}
          </Button>
        ))}
      </div>
      {/* Always show filter indicator when a filter is active */}
      {(brandFilter || categoryFilter) && (
        <div className="mb-4 flex items-center gap-2">
          <span className="px-4 py-2 rounded-full bg-neutral-200 font-medium text-sm flex items-center gap-1">
            {brandFilter ? (
              <>
                Brand: <span className="font-bold">{brandFilter}</span>
              </>
            ) : (
              <>
                Category: <span className="font-bold">{categoryFilter}</span>
              </>
            )}
            <button
              className="ml-2 text-neutral-500 hover:text-black text-base"
              onClick={() => handleCategoryPillClick(null)}
              aria-label="Clear filter"
            >
              &times;
            </button>
          </span>
        </div>
      )}
      {/* Brand grid */}
      <div className="grid grid-cols-3 gap-2">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleCardClick(brand)}
            className="cursor-pointer"
          >
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
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
