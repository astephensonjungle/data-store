"use client";
import { type ReactNode, createContext, useContext, useState } from "react";

type Tab = "brands" | "categories";
type DiscoverTabContextType = {
	tab: Tab;
	setTab: (tab: Tab) => void;
};

const DiscoverTabContext = createContext<DiscoverTabContextType | undefined>(undefined);

export function DiscoverTabProvider({ children }: { children: ReactNode }) {
	const [tab, setTab] = useState<Tab>("brands");
	return <DiscoverTabContext.Provider value={{ tab, setTab }}>{children}</DiscoverTabContext.Provider>;
}

export function useDiscoverTab() {
	const context = useContext(DiscoverTabContext);
	if (!context) throw new Error("useDiscoverTab must be used within DiscoverTabProvider");
	return context;
}
