import { useState, useEffect } from "react";

export interface Audience {
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
    propensityToPurchase?: number;
    averageIncome?: string;
    averageAge?: string | number;
    genderDistribution?: string;
  };
  propensityToPurchase?: number;
}

const STORAGE_KEY = "my_audiences";

export function useAudiences() {
  const [audiences, setAudiences] = useState<Audience[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(audiences));
  }, [audiences]);

  function addAudience(audience: Audience) {
    setAudiences((prev) => [audience, ...prev]);
  }

  function removeAudience(id: number) {
    setAudiences((prev) => prev.filter((a) => a.id !== id));
  }

  return { audiences, addAudience, removeAudience };
}
