import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface Audience {
  id: number;
  name: string;
  description: string;
  brand: string;
  type: string;
  lastModified: string;
  categories?: string[];
  deterministicAudience?: {
    size: string;
    lookbackWindow: string;
    averageIncome?: string;
    averageAge?: string | number;
    genderDistribution?: string;
  };
}

interface AudienceSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  audience: Audience | null;
}

export default function AudienceSheet({
  open,
  onOpenChange,
  audience,
}: AudienceSheetProps) {
  if (!audience) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="max-w-3xl w-full bg-[#f6f3ee] p-0">
        <div className="p-8 h-full flex flex-col">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-semibold">
              {audience.name}
            </SheetTitle>
            <SheetClose className="absolute right-8 top-8 text-2xl"></SheetClose>
          </SheetHeader>
          {/* Info Table */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-b pb-6 mb-8 text-base">
            <div className="text-neutral-500">Brand</div>
            <div className="text-neutral-900">{audience.brand}</div>
            <div className="text-neutral-500">Type</div>
            <div className="text-neutral-900">{audience.type}</div>
            <div className="text-neutral-500">Categories</div>
            <div className="flex gap-2 flex-wrap">
              {audience.categories?.map((cat) => (
                <span
                  key={cat}
                  className="bg-[#e5dfd2] text-neutral-800 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="text-neutral-500">Last modified</div>
            <div className="text-neutral-900">{audience.lastModified}</div>
          </div>
          {/* Audience Details Card */}
          <div className="bg-[#f3efe7] rounded-xl p-6 mb-8">
            <div className="font-semibold text-lg mb-1">Audience Details</div>
            <div className="text-neutral-600 text-sm mb-4">
              Understand who is in this audience based on real shopper behavior.
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-base">
              <div className="text-neutral-500">Size</div>
              <div className="text-neutral-900">
                {audience.deterministicAudience?.size || "-"} consumers
              </div>
              <div className="text-neutral-500">Lookback window</div>
              <div className="text-neutral-900">
                {audience.deterministicAudience?.lookbackWindow || "-"}
              </div>
              <div className="text-neutral-500">Average Income</div>
              <div className="text-neutral-900">
                {audience.deterministicAudience?.averageIncome || "$161k"}
              </div>
              <div className="text-neutral-500">Average age</div>
              <div className="text-neutral-900">
                {audience.deterministicAudience?.averageAge || "Lorem ipsum"}
              </div>
              <div className="text-neutral-500">Gender distribution</div>
              <div className="text-neutral-900">
                {audience.deterministicAudience?.genderDistribution ||
                  "45% Male / 35% Female"}
              </div>
            </div>
          </div>
          <div className="mt-auto flex justify-end">
            <Button className="rounded-full px-8 py-3 text-sm bg-black text-white">
              Activate audience
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
