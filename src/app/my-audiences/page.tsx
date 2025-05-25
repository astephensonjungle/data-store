"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AudienceCard from "@/components/AudienceCard";
import AudienceSheet from "@/components/AudienceSheet";
import { useAudiences } from "@/hooks/useAudiences";

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
      {/* Filters and grid only, title/description now in Sidebar */}
      <div className="flex gap-2 mb-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent pb-2 w-full max-w-full min-w-0">
        {filters.map((filter) => (
          <Button
            key={filter}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-neutral-200 text-black hover:bg-neutral-300"
            }`}
            onClick={() => setActiveFilter(filter)}
            variant="secondary"
          >
            {filter}
          </Button>
        ))}
      </div>
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
