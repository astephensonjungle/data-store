import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Audience {
  id: number;
  name: string;
  description: string;
  brand: string;
  type: string;
  lastModified: string;
}

interface AudienceCardProps {
  audience: Audience;
  onClick?: () => void;
}

export default function AudienceCard({ audience, onClick }: AudienceCardProps) {
  return (
    <Card
      className="flex flex-col items-start bg-[#F4F1EB] hover:bg-[#E9E3D4] transition-colors border-0 shadow-none"
      onClick={onClick}
    >
      <div className="px-6">
        <Image
          src="/assets/audience.webp"
          alt={audience.name}
          width={300}
          height={160}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="p-6 pb-2">
        <div className="font-semibold text-lg mb-1 text-neutral-900">
          {audience.name}
        </div>
        <div className="text-sm text-neutral-700 mb-4">
          {audience.description}
        </div>
        <div className="border-t border-[#e5e0d5] pt-2 mt-2">
          <div className="flex justify-between text-sm py-1">
            <span className="font-semibold text-neutral-700">Brand</span>
            <span className="text-neutral-900">{audience.brand}</span>
          </div>
          <div className="border-t border-[#e5e0d5]" />
          <div className="flex justify-between text-sm py-1">
            <span className="font-semibold text-neutral-700">Type</span>
            <span className="text-neutral-900">{audience.type}</span>
          </div>
          <div className="border-t border-[#e5e0d5]" />
          <div className="flex justify-between text-sm py-1">
            <span className="font-semibold text-neutral-700">
              Last modified
            </span>
            <span className="text-neutral-900">{audience.lastModified}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
