import { Skeleton } from "@/components/ui/skeleton";

export default function DiscoverLoadingPage() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center p-6">
				<div className="flex items-center gap-4">
					<Skeleton className="h-10 w-10 rounded-md" />
					<Skeleton className="h-9 w-48 rounded-md" />
				</div>
			</div>

			<div className="flex flex-col divide-y">
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className="flex w-full overflow-x-auto py-4">
						<div className="sticky left-0 z-20 w-64 flex-none bg-background p-6">
							<div className="flex items-center gap-3">
								<Skeleton className="h-7 w-7 rounded-md" />
								<Skeleton className="h-6 w-32 rounded-md" />
							</div>
							<Skeleton className="mt-3 h-6 w-24 rounded-md" />
						</div>

						<div className="flex items-center gap-2 px-6">
							<Skeleton className="h-[200px] w-[300px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[200px] w-[300px] flex-shrink-0 rounded-2xl" />
							<Skeleton className="h-[200px] w-[300px] flex-shrink-0 rounded-2xl" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
