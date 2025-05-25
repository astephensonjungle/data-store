"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brands } from "@/data/brands";
import BrandCard from "@/components/BrandCard";
import BrandSheet from "@/components/BrandSheet";
import type { Brand } from "@/data/brands";
import { categories } from "@/data/categories";
import FilterBar from "@/components/FilterBar";

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

  const filterList = ["All brands", ...categories.map((cat) => cat.name)];

  return (
    <div className="min-w-0 w-full">
      <FilterBar
        filters={filterList}
        activeFilter={categoryFilter || "All brands"}
        onFilterChange={handleCategoryPillClick}
        className="sticky top-[5rem] z-20 bg-[#f6f3ee]"
      />
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
