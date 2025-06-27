import { Skeleton } from "@/components/ui/skeleton";

export default function AudienceLoadingPage() {
	return (
		<main className="mx-auto flex w-full max-w-7xl flex-col gap-12 p-8">
			<div className="flex flex-row gap-20">
				<div className="flex flex-1 flex-col gap-6">
					<div className="flex flex-row gap-4">
						<Skeleton className="h-[200px] w-[200px] flex-none rounded-2xl" />
						<div className="flex flex-1 flex-col gap-4 py-2">
							<Skeleton className="h-8 w-48 max-w-full rounded-md" />
							<div className="space-y-2">
								<Skeleton className="h-4 w-full rounded-md" />
								<Skeleton className="h-4 w-full rounded-md" />
								<Skeleton className="h-4 w-11/12 rounded-md" />
							</div>
						</div>
					</div>
					<Skeleton className="h-[200px] w-full" />
				</div>

				<div className="w-[300px] flex-none">
					<Skeleton className="h-[400px] w-full" />
				</div>
			</div>

			<div>
				<Skeleton className="mb-3 h-8 w-96 max-w-full" />
				<div className="flex w-full gap-2 overflow-x-auto pb-2">
					<Skeleton className="h-[200px] w-[200px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[200px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[200px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[200px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[200px] flex-shrink-0" />
				</div>
			</div>

			<div>
				<Skeleton className="mb-3 h-8 w-80 max-w-full" />
				<div className="flex w-full gap-2 overflow-x-auto pb-2">
					<Skeleton className="h-[200px] w-[300px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[300px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[300px] flex-shrink-0" />
					<Skeleton className="h-[200px] w-[300px] flex-shrink-0" />
				</div>
			</div>
		</main>
	);
}
