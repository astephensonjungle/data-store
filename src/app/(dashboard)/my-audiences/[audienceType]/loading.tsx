import { Skeleton } from "@/components/ui/skeleton";

export default function MyAudiencesLoading() {
	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<Skeleton key={index} className="h-[402px] w-full" />
			))}
		</>
	);
}
