import { MyAudiencesSidebar } from "@/components/my-audiences-sidebar";

export default function MyAudiencesLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex h-screen">
			<div className="w-[300px] p-6">
				<h2 className="font-bold text-2xl">My audiences</h2>
				<MyAudiencesSidebar />
			</div>
			<div className="grid flex-1 grid-cols-1 items-start gap-6 overflow-y-auto p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{children}
			</div>
		</main>
	);
}
