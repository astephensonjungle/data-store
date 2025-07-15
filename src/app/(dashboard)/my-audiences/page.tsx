import AudienceCardDetailed from "@/components/audience-card-detailed";
import { getSavedAudienceSlugs } from "@/lib/audience-cookies";
import { api } from "@/trpc/server";

export default async function MyAudiencesPage() {
	const savedAudienceSlugs = await getSavedAudienceSlugs();

	const audiences = await api.audience.listFromSlugs({ slugs: savedAudienceSlugs });

	return (
		<main className="flex h-screen">
			<div className="w-[300px] p-6">
				<h2 className="font-bold text-2xl">My audiences</h2>
				<div className="flex flex-col gap-6 pt-8 pl-5">
					<button type="button" className="text-left font-normal text-base">
						All audiences
					</button>
					<button type="button" className="text-left font-normal text-base">
						Deterministic audiences
					</button>
					<button type="button" className="text-left font-normal text-base">
						Extended audiences
					</button>
				</div>
			</div>
			<div className="grid flex-1 grid-cols-4 items-start gap-6 overflow-y-auto p-6">
				{audiences.map((audience) => (
					<AudienceCardDetailed audience={audience} key={audience.slug} />
				))}
			</div>
		</main>
	);
}
