import AudienceCardDetailed from "@/components/audience-card-detailed";
import { blurhashToDataUrl } from "@/lib/blurhas-to-data-url";
import { api } from "@/trpc/server";
import { AudienceType } from "@prisma/client";
import Image from "next/image";

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
				<AudienceCardDetailed savedAudience={audience} key={audience.id}>
					<Image
						src={audience.audience.logoUrl}
						alt={audience.audience.name}
						placeholder={audience.audience.logoBlurhash ? "blur" : undefined}
						blurDataURL={audience.audience.logoBlurhash ? blurhashToDataUrl(audience.audience.logoBlurhash) : undefined}
						width={300}
						height={160}
						className="h-40 w-full rounded-lg object-cover"
					/>
				</AudienceCardDetailed>
			))}
			{audiences.length === 0 && <div className="text-center text-2xl">No audiences found</div>}
		</>
	);
}
