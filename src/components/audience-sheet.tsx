"use client";

import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { AudienceType, LookbackWindow } from "@prisma/client";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Skeleton } from "./ui/skeleton";

export default function AudienceSheet({
	savedAudienceId,
	open,
	onOpenChange,
}: {
	savedAudienceId: string | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const {
		data: savedAudience,
		isLoading,
		refetch,
	} = api.audience.getSavedAudience.useQuery({ id: savedAudienceId ?? "" }, { enabled: !!savedAudienceId && open });

	const audience = savedAudience?.audience;

	let audienceCount = 0;
	if (
		savedAudience?.audienceType === AudienceType.DETERMINISTIC &&
		savedAudience?.lookbackWindow === LookbackWindow.DAYS_90
	) {
		audienceCount = audience?.audienceDeterministic90days ?? 0;
	} else if (
		savedAudience?.audienceType === AudienceType.DETERMINISTIC &&
		savedAudience?.lookbackWindow === LookbackWindow.YEARS_1
	) {
		audienceCount = audience?.audienceDeterministic1year ?? 0;
	} else if (
		savedAudience?.audienceType === AudienceType.EXTENDED &&
		savedAudience?.lookbackWindow === LookbackWindow.DAYS_90
	) {
		audienceCount = audience?.audienceExtended90days ?? 0;
	} else if (
		savedAudience?.audienceType === AudienceType.EXTENDED &&
		savedAudience?.lookbackWindow === LookbackWindow.YEARS_1
	) {
		audienceCount = audience?.audienceExtended1year ?? 0;
	}

	const acitvateAudience = api.audience.setIsActivated.useMutation({
		onSuccess: async () => {
			await refetch();
		},
	});

	return (
		<Sheet open={open && !!savedAudienceId} onOpenChange={onOpenChange}>
			<SheetContent className="w-full max-w-xl text-sm">
				<SheetHeader>
					<SheetTitle className="font-medium text-xl">
						{isLoading ? <Skeleton className="h-6 w-48" /> : audience?.name} -{" "}
						{savedAudience?.audienceType === AudienceType.DETERMINISTIC ? "Deterministic" : "Extended"}
					</SheetTitle>
				</SheetHeader>
				<div className="flex h-full flex-1 flex-col gap-4 p-6 pt-0">
					<div className="flex flex-1 flex-col gap-8">
						<div className="flex flex-col divide-y">
							<div className="flex justify-between py-3">
								<div className="font-medium">Brand</div>
								<div className="text-foreground">{isLoading ? <Skeleton className="h-5 w-32" /> : audience?.name}</div>
							</div>
							<div className="flex justify-between py-3">
								<div className="font-medium">Categories</div>
								<div className="flex gap-2 text-foreground">
									{isLoading ? (
										<>
											<Skeleton className="h-5 w-24" />
											<Skeleton className="h-5 w-24" />
										</>
									) : (
										<>
											<Badge variant="outline">{audience?.leafCategory.baseCategory.name}</Badge>
											<Badge variant="outline">{audience?.leafCategory.name}</Badge>
										</>
									)}
								</div>
							</div>
						</div>

						<div className="rounded-lg bg-[#EEEAE2] p-4">
							<h3 className="font-medium text-lg">Audience Details</h3>
							<p className="mt-1.5 text-muted-foreground text-sm">
								Understand who is in the audience based on real shopper behavior.
							</p>
							<div className="mt-3 flex flex-col divide-y">
								<div className="flex justify-between py-2">
									<div className="font-medium">Audience Count</div>
									<div className="text-foreground">
										{isLoading ? (
											<Skeleton className="h-5 w-20" />
										) : (
											new Intl.NumberFormat("en-US").format(audienceCount)
										)}
									</div>
								</div>
								<div className="flex justify-between py-2">
									<div className="font-medium">Audience Type</div>
									<div className="text-foreground">
										{isLoading ? <Skeleton className="h-5 w-28" /> : "Prefabricated"}
									</div>
								</div>
								<div className="flex justify-between py-2">
									<div className="font-medium">Lookback window</div>{" "}
									<div className="text-foreground">
										{isLoading ? (
											<Skeleton className="h-5 w-24" />
										) : savedAudience?.lookbackWindow === LookbackWindow.DAYS_90 ? (
											"90 days"
										) : (
											"1 year"
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-lg bg-[#EEEAE2] p-4">
							<h3 className="font-medium text-lg">Activation Details</h3>
							<p className="mt-1.5 text-muted-foreground text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
							</p>
							<div className="mt-3 flex flex-col divide-y">
								<div className="flex justify-between py-2">
									<div className="font-medium">Status</div>
									<div
										className={cn(
											savedAudience?.isActivated ? "bg-[#ade357] text-[#2d3a0d]" : "bg-red-100 text-red-700",
											"rounded-full px-3 py-1 font-medium text-sm",
										)}
									>
										{savedAudience?.isActivated ? "Activated" : "Deactivated"}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between gap-20 pb-6">
						<div className="flex flex-col gap-1.5">
							<h3 className="font-medium text-base">Activation Details</h3>
							<p className="text-muted-foreground text-sm">Via LiveRamp Connect and a Trade Desk Seat ID</p>
						</div>
						<Button
							onClick={() =>
								acitvateAudience.mutate({ audienceId: savedAudienceId ?? "", isActivated: !savedAudience?.isActivated })
							}
							disabled={acitvateAudience.isPending}
							size="lg"
						>
							{savedAudience?.isActivated ? "Deactivate Audience" : "Activate Audience"}
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
