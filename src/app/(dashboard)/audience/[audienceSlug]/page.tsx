import { AudienceAccordion } from "@/components/audience-accordion";
import { ConsumersInformationCard } from "@/components/consumers-information-card";
import { RelatedProductsList } from "@/components/related-products-list";
import { HydrateClient, api } from "@/trpc/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function AudiencePage({ params }: { params: Promise<{ audienceSlug: string }> }) {
	const { audienceSlug } = await params;

	const [audience, relatedAudiences] = await Promise.all([
		api.audience.get({ slug: audienceSlug }),
		api.audience.listRelated({ slug: audienceSlug }),
	]);

	if (!audience) {
		return notFound();
	}

	return (
		<HydrateClient>
			<div className="h-[calc(100vh-64px)] overflow-y-auto p-8">
				<main className="mx-auto flex w-full max-w-7xl flex-col gap-12">
					<div className="flex flex-row gap-20">
						<div className="flex flex-1 flex-col gap-6">
							<div className="flex flex-row gap-4">
								<Image
									src={audience.logoUrl ?? ""}
									alt={audience.name}
									width={200}
									height={200}
									className="aspect-square h-[200px] w-[200px] flex-none overflow-hidden rounded-2xl object-cover"
								/>
								<div className="flex flex-col gap-2">
									<h2 className="font-medium text-xl">{audience.name}</h2>
									<p className="text-base text-muted-foreground">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cupiditate, minima sequi dolore
										perferendis nobis odit omnis doloribus at, voluptas a deserunt nulla accusamus illum architecto quod
										nam deleniti magni.
									</p>
								</div>
							</div>
							<AudienceAccordion audience={audience} />
						</div>

						<ConsumersInformationCard audience={audience} />
					</div>

					<div>
						<h2 className="mb-3 font-medium text-2xl">Explore sample products from this brand</h2>
						<RelatedProductsList />
					</div>

					<div>
						<h2 className="mb-3 font-medium text-2xl">Explore more audiences</h2>
						{/* <div className="flex w-full gap-2 overflow-x-auto">
							{relatedAudiences.map((audience) => (
								<AudienceCard audience={audience} key={audience.slug} />
							))}
						</div> */}
					</div>
				</main>
			</div>
		</HydrateClient>
	);
}
