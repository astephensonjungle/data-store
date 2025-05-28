"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import type { Brand } from "@/data/brands";
import { useAudiences } from "@/hooks/useAudiences";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import AudienceStatsCard from "@/components/AudienceStatsCard";
import { Slider } from "@/components/ui/slider";

type BrandSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  brand: Brand | null;
};

export default function BrandSheet({
  open,
  onOpenChange,
  brand,
}: BrandSheetProps) {
  const { addAudience } = useAudiences();

  if (!brand) return null;

  // Deterministic audience size as number
  const deterministicSize = Number(
    typeof brand.deterministicAudience.size === "string"
      ? brand.deterministicAudience.size.replace(/[^\d.]/g, "")
      : brand.deterministicAudience.size
  );
  const minExtendedSize = deterministicSize;
  const maxExtendedSize = Math.round(deterministicSize * 8 * 10) / 10; // 1 decimal

  // Slider state for Extended Audience
  const [size, setSize] = useState([minExtendedSize]);
  const [lookback, setLookback] = useState([0]); // 0: 90 days, 1: 6 months, 2: 1 year, 3: All time
  const lookbackOptions = ["90 days", "6 months", "1 year", "All time"];
  const [age, setAge] = useState([55]);
  const [gender, setGender] = useState([55]);

  // Dialog state for naming the audience
  const [dialogOpen, setDialogOpen] = useState(false);
  const [audienceName, setAudienceName] = useState("");
  const [pendingAudience, setPendingAudience] = useState<null | {
    type: "Deterministic" | "Extended";
  }>();

  const handleSave = () => {
    setPendingAudience({ type: "Deterministic" });
    setAudienceName("");
    setDialogOpen(true);
  };

  const handleSaveExtended = () => {
    setPendingAudience({ type: "Extended" });
    setAudienceName("");
    setDialogOpen(true);
  };

  const handleDialogConfirm = () => {
    if (!brand || !audienceName) return;
    if (pendingAudience?.type === "Deterministic") {
      addAudience({
        id: Date.now(),
        name: audienceName,
        description: brand.description,
        brand: brand.name,
        type: "Deterministic",
        lastModified: new Date().toLocaleDateString(),
        categories: brand.categories,
        deterministicAudience: {
          size: brand.deterministicAudience.size,
          lookbackWindow: brand.deterministicAudience.lookbackWindow,
          propensityToPurchase:
            brand.deterministicAudience.propensityToPurchase,
          averageIncome: "$161k",
          averageAge: brand.deterministicAudience.averageAge,
          genderDistribution: `${brand.deterministicAudience.genderDistribution.male}% Male / ${brand.deterministicAudience.genderDistribution.female}% Female`,
        },
      });
    } else if (pendingAudience?.type === "Extended") {
      addAudience({
        id: Date.now(),
        name: audienceName,
        description: brand.description,
        brand: brand.name,
        type: "Extended",
        lastModified: new Date().toLocaleDateString(),
        categories: brand.categories,
        deterministicAudience: {
          size: `${size[0]}M`,
          lookbackWindow: brand.deterministicAudience.lookbackWindow,
          propensityToPurchase: Number(extendedPropensity.toFixed(1)),
          averageIncome: "$161k",
          averageAge: age[0],
          genderDistribution: `${gender[0]}% Male / ${100 - gender[0]}% Female`,
        },
      });
    }
    toast.success("Audience saved!", {
      description: `Audience "${audienceName}" for ${brand.name} has been saved.`,
    });
    setDialogOpen(false);
    setPendingAudience(null);
    setAudienceName("");
  };

  // Calculate propensity to purchase for Extended Audience (linear decrease)
  const extendedSize = size[0];
  const extendedPropensity = Math.round(
    100 -
      ((extendedSize - minExtendedSize) / (maxExtendedSize - minExtendedSize)) *
        40
  ); // 100% to 60%

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="!w-[900px] max-w-none bg-[#f6f3ee] p-8"
      >
        <div className="h-full flex flex-col overflow-y-auto max-h-[90vh]">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <Image
                src={brand.brandImage}
                alt={brand.name}
                width={40}
                height={40}
                className="rounded-full w-10 h-10 self-start"
              />
              <div className="flex flex-col">
                <SheetTitle className="text-xl">{brand.name}</SheetTitle>
                <div className="flex gap-2 mb-4">
                  {brand.categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant="outline"
                      className="text-xs font-medium px-3 py-1"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <SheetDescription className="mb-6">
              Explore shoppers who have purchased {brand.name} products across
              top U.S. retailers. This audience reflects real, observed buying
              behavior and can be extended to modeled look-alikes for broader
              reach.
            </SheetDescription>
          </SheetHeader>
          {/* Both Audience Cards Side by Side */}
          <div className="flex gap-6 h-full items-stretch">
            <AudienceStatsCard
              title="Deterministic Audience"
              size={brand.deterministicAudience.size}
              propensity={100}
              details={
                <>
                  <div className="font-semibold mb-1">Audience Details</div>
                  <div className="text-xs text-neutral-500">
                    Understand who is in this audience based on real shopper
                    behavior.
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lookback window</span>
                    <span>90 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Size</span>
                    <span>{brand.deterministicAudience.size} consumers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Average age</span>
                    <span>{brand.deterministicAudience.averageAge}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gender distribution</span>
                    <span>
                      {brand.deterministicAudience.genderDistribution.male}%
                      Male /{" "}
                      {brand.deterministicAudience.genderDistribution.female}%
                      Female
                    </span>
                  </div>
                </>
              }
              onSave={handleSave}
            />
            <AudienceStatsCard
              title="ExtendedAudience™"
              size={size[0]}
              propensity={extendedPropensity}
              editable
              details={
                <>
                  <div className="font-semibold mb-1">Audience Builder</div>
                  <div className="text-xs text-neutral-500 mb-2">
                    Create a modeled audience that shares characteristics with
                    verified {brand.name} purchasers.
                  </div>
                  <div className="bg-[#F4F1EB] mb-2 rounded-lg">
                    <div className="flex justify-between text-xs mb-4">
                      <span>Lookback window</span>
                      <span>{lookbackOptions[lookback[0]]}</span>
                    </div>
                    <Slider
                      min={0}
                      max={3}
                      step={1}
                      value={lookback}
                      onValueChange={setLookback}
                      className="w-full mt-2"
                    />
                  </div>
                </>
              }
              sliders={{
                size: {
                  value: size,
                  onChange: setSize,
                  min: minExtendedSize,
                  max: maxExtendedSize,
                  step: 0.1,
                  label: "Size",
                  formatValue: (v) => `${v}M consumers`,
                },
              }}
              onSave={handleSaveExtended}
            />
          </div>
        </div>
        <SheetClose asChild></SheetClose>
      </SheetContent>
      {/* Audience Name Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Name your audience</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Audience name"
            value={audienceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAudienceName(e.target.value)
            }
            className="mb-2"
            maxLength={64}
          />
          <DialogFooter>
            <Button
              onClick={handleDialogConfirm}
              disabled={!audienceName.trim()}
              className="w-full"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  );
}
