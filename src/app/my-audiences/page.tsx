"use client";
import { useState } from "react";
import AudienceCard from "@/components/AudienceCard";
import AudienceSheet from "@/components/AudienceSheet";
import { useAudiences } from "@/hooks/useAudiences";
import FilterBar from "@/components/FilterBar";

interface Audience {
  id: number;
  name: string;
  description: string;
  brand: string;
  type: string;
  lastModified: string;
  categories?: string[];
  deterministicAudience?: {
    size: string;
    lookbackWindow: string;
    averageIncome?: string;
    averageAge?: string | number;
    genderDistribution?: string;
  };
}

const filters = [
  "All audiences",
  "Deterministic Audiences",
  "Extended Audiences",
  "Active",
  "Inactive",
];

export default function MyAudiencesPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const { audiences } = useAudiences();

  const handleAudienceClick = (audience: Audience) => {
    setSelectedAudience(audience);
    setSheetOpen(true);
  };

  return (
    <>
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        className="sticky top-[5rem] z-20 bg-[#f6f3ee]"
      />
      <div className="grid grid-cols-3 gap-2">
        {audiences.map((audience) => (
          <AudienceCard
            key={audience.id}
            audience={audience}
            onClick={() => handleAudienceClick(audience)}
          />
        ))}
      </div>
      {selectedAudience && (
        <AudienceSheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          audience={selectedAudience}
        />
      )}
    </>
  );
}
