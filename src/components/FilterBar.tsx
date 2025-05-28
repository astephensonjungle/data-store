import React from "react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  className = "",
}) => {
  return (
    <div className={`mb-2 pb-2 sticky top-16 z-20 bg-[#f6f3ee] ${className}`}>
      <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent max-w-full">
        {filters.map((filter) => (
          <Button
            key={filter}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-neutral-200 text-black hover:bg-neutral-300"
            }`}
            onClick={() => onFilterChange(filter)}
            variant="secondary"
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
