"use client";

import { useDebounce } from "@uidotdev/usehooks";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export function SearchInput() {
	const [searchText, setSearchText] = useQueryState("searchText", { shallow: false });
	const [localValue, setLocalValue] = useState(searchText ?? "");
	const debouncedValue = useDebounce(localValue, 500);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setSearchText(debouncedValue);
	}, [debouncedValue]);

	return (
		<Input
			value={localValue}
			onChange={(e) => setLocalValue(e.target.value)}
			placeholder="Search..."
			className="w-[400px]"
		/>
	);
}
