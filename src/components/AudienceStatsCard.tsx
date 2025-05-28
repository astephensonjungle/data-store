import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import React from "react";

interface SliderConfig {
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  formatValue?: (value: number) => string;
}

interface AudienceStatsCardProps {
  title: string;
  size: string | number;
  propensity: number;
  description?: string;
  details?: React.ReactNode;
  editable?: boolean;
  sliders?: {
    size?: SliderConfig;
    age?: SliderConfig;
    gender?: SliderConfig;
  };
  onSave?: () => void;
  saveLabel?: string;
  children?: React.ReactNode;
}

export default function AudienceStatsCard({
  title,
  size,
  propensity,
  details,
  editable = false,
  sliders,
  onSave,
  saveLabel = "Save Audience",
  children,
}: AudienceStatsCardProps) {
  return (
    <div className="bg-[#FBFBFB] border border-[#E4E4E7] rounded-xl p-6 flex-1 flex flex-col gap-1 min-w-[340px] shadow-none h-full">
      <div className="text-sm text-neutral-500 mb-1">{title}</div>
      <div className="text-3xl font-bold mb-1">
        {typeof size === "number" ? `${size}M` : size} consumers
      </div>
      <div className="text-base text-neutral-700 mb-2">
        {propensity}% propensity to purchase
      </div>
      <div className="bg-[#F4F1EB] rounded-lg p-4 flex flex-col gap-2">
        {details}
        {editable && sliders && (
          <>
            {sliders.size && (
              <div className="bg-[#F4F1EB] mb-2">
                <div className="flex justify-between text-xs mb-4">
                  <span>Size</span>
                  <span>
                    {sliders.size.formatValue
                      ? sliders.size.formatValue(sliders.size.value[0])
                      : `${sliders.size.value[0]}M consumers`}
                  </span>
                </div>
                <Slider
                  min={sliders.size.min}
                  max={sliders.size.max}
                  step={sliders.size.step}
                  value={sliders.size.value}
                  onValueChange={sliders.size.onChange}
                  className="mb-2 mt-2"
                />
              </div>
            )}
            {sliders.age && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Average age</span>
                  <span>{sliders.age.value[0]}</span>
                </div>
                <Slider
                  min={sliders.age.min}
                  max={sliders.age.max}
                  step={sliders.age.step}
                  value={sliders.age.value}
                  onValueChange={sliders.age.onChange}
                  className="mb-2"
                />
              </div>
            )}
            {sliders.gender && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Gender Distribution</span>
                  <span>
                    {sliders.gender.value[0]}% Male /{" "}
                    {100 - sliders.gender.value[0]}% Female
                  </span>
                </div>
                <Slider
                  min={sliders.gender.min}
                  max={sliders.gender.max}
                  step={sliders.gender.step}
                  value={sliders.gender.value}
                  onValueChange={sliders.gender.onChange}
                  className="mb-2"
                />
              </div>
            )}
          </>
        )}
      </div>
      {children}
      {onSave && (
        <Button
          className="mt-auto bg-black text-white rounded-full px-8 py-3 text-sm font-normal cursor-pointer"
          onClick={onSave}
        >
          {saveLabel}
        </Button>
      )}
    </div>
  );
}
