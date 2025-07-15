"use client";

import { useDebounce } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export function SearchInput() {
	const [searchText, setSearchText] = useQueryState("searchText", { shallow: false });
	const [localValue, setLocalValue] = useState(searchText ?? "");
	const debouncedValue = useDebounce(localValue, 500);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (searchText !== debouncedValue && searchText != null) {
			setSearchText(debouncedValue);
		}
	}, [debouncedValue]);

	const pathname = usePathname();

	if (!pathname.includes("/discover")) {
		return null;
	}

	return (
		<Input
			value={localValue}
			onChange={(e) => setLocalValue(e.target.value)}
			placeholder="Search brands or categories..."
			className="h-10 w-full rounded-full border border-border bg-secondary px-4"
		/>
	);
}
