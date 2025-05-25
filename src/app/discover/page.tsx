"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { brands } from "../../data/brands";
import BrandCard from "@/components/BrandCard";
import CategoriesTab from "@/components/CategoriesTab";
import { useDiscoverTab } from "@/context/DiscoverTabContext";
import BrandSheet from "@/components/BrandSheet";
import { Button } from "@/components/ui/button";
import type { Brand } from "@/data/brands";
import BrandsTab from "@/components/BrandsTab";

export default function DiscoverPage() {
  const { tab } = useDiscoverTab();

  return <div>{tab === "brands" ? <BrandsTab /> : <CategoriesTab />}</div>;
}
