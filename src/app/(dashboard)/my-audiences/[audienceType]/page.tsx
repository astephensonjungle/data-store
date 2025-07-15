import AudienceCardDetailed from "@/components/audience-card-detailed";
import { api } from "@/trpc/server";
import { AudienceType } from "@prisma/client";

export async function generateStaticParams() {
	return [{ audienceType: "all" }, { audienceType: "deterministic" }, { audienceType: "extended" }];
}

export default async function MyAudiencesPage({
	params,
}: { params: Promise<{ audienceType: "all" | "deterministic" | "extended" }> }) {
	const { audienceType } = await params;

	const audiences = await api.audience.listSaved({
		audienceType:
			audienceType === "all"
				? undefined
				: audienceType === "deterministic"
					? AudienceType.DETERMINISTIC
					: AudienceType.EXTENDED,
	});

	return (
		<>
			{audiences.map((audience) => (
				<AudienceCardDetailed savedAudience={audience} key={audience.id} />
			))}
			{audiences.length === 0 && <div className="text-center text-2xl">No audiences found</div>}
		</>
	);
}
