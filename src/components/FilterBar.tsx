import React from "react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
  onClear?: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  className = "",
  onClear,
}) => {
  const showIndicator = activeFilter !== filters[0];

  return (
    <>
      <div
        className={`flex gap-2 mb-2 py-2overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent pb-2 w-full max-w-full min-w-0 sticky top-16 z-20 bg-[#f6f3ee] ${className}`}
      >
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
      {showIndicator && (
        <div className="mb-4 flex items-center gap-2">
          <span className="px-4 py-2 rounded-full bg-neutral-200 font-medium text-sm flex items-center gap-1">
            Selected: <span className="font-bold">{activeFilter}</span>
            <button
              className="ml-2 text-neutral-500 hover:text-black text-base"
              onClick={() => {
                onFilterChange(filters[0]);
                if (onClear) onClear();
              }}
              aria-label="Clear filter"
            >
              &times;
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default FilterBar;
