import type { Brand } from "@/data/brands";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Card className="flex flex-col items-start bg-[#F4F1EB] hover:bg-[#E9E3D4] transition-colors border-0 shadow-none">
      <CardHeader className="w-full">
        <img
          src={brand.mainImage}
          alt={brand.name}
          className="w-full h-40 object-cover mb-4"
        />
        <div className="flex items-center gap-2 mb-2">
          <img
            src={brand.brandImage}
            alt={brand.name}
            className="w-6 h-6 rounded-full object-cover self-start"
          />
          <div>
            <span className="font-semibold">{brand.name}</span>
            <div className="text-xs">{brand.description}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex gap-2 flex-wrap justify-start">
          {brand.categories.map((cat: string, idx: number) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs font-medium px-3 py-1"
              title={cat}
            >
              {cat.length > 15 ? cat.substring(0, 15) + "..." : cat}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
