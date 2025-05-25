import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
      className="flex flex-col items-start bg-[#F4F1EB] hover:bg-[#E9E3D4] transition-colors border-0 shadow-none cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="w-full">
        <div className="flex items-center gap-2 mb-2">
          <div>
            <span className="font-semibold">{audience.name}</span>
            <div className="text-xs">{audience.description}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-1 text-xs text-neutral-700">
          <div>
            <span className="font-semibold">Brand: </span>
            {audience.brand}
          </div>
          <div>
            <span className="font-semibold">Type: </span>
            {audience.type}
          </div>
          <div>
            <span className="font-semibold">Last modified: </span>
            {audience.lastModified}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
