"use client";
import { Suspense } from "react";
import CategoriesTab from "@/components/CategoriesTab";
import { useDiscoverTab } from "@/context/DiscoverTabContext";
import BrandsTab from "@/components/BrandsTab";

export default function DiscoverPage() {
  const { tab } = useDiscoverTab();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {tab === "brands" ? <BrandsTab /> : <CategoriesTab />}
      </Suspense>
    </div>
  );
}
