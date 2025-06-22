import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Brand } from "@/data/brands";
import Image from "next/image";
export default function BrandCard({ brand }: { brand: Brand }) {
	return (
		<Card className="flex flex-col items-start border-0 bg-[#F4F1EB] shadow-none transition-colors hover:bg-[#E9E3D4]">
			<CardHeader className="w-full">
				<Image
					src={brand.mainImage}
					alt={brand.name}
					width={400}
					height={160}
					className="mb-4 h-40 w-full object-cover"
				/>
				<div className="mb-2 flex items-center gap-2">
					<Image
						src={brand.brandImage}
						alt={brand.name}
						width={24}
						height={24}
						className="h-6 w-6 self-start rounded-full object-cover"
					/>
					<div>
						<span className="font-semibold">{brand.name}</span>
						<div className="text-xs">{brand.description}</div>
					</div>
				</div>
			</CardHeader>
			<CardContent className="px-4">
				<div className="flex flex-wrap justify-start gap-2">
					{brand.categories.map((cat: string, idx: number) => (
						<Badge key={idx} variant="secondary" className="px-3 py-1 font-medium text-xs" title={cat}>
							{cat.length > 15 ? `${cat.substring(0, 15)}...` : cat}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
