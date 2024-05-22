"use client";
import { useLocale } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { Unit } from "@/components/Unit";
import useTextDirection from "@/hooks/useTextDirection";

import { type UnitsSliderProps } from "./types";

const UnitsSlider = ({ units }: UnitsSliderProps) => {
  const locale = useLocale();
  const direction = useTextDirection(locale);

  return (
    <Carousel
      opts={{
        direction,
      }}
    >
      <CarouselContent>
        {units.map((unit) => (
          <CarouselItem key={unit.id} className="md:basis-1/2 lg:basis-1/3">
            <Unit item={unit} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex items-center justify-center gap-4">
        <CarouselPrevious className="static translate-y-0" variant="ghost" />
        <CarouselDots />
        <CarouselNext className="static translate-y-0" variant="ghost" />
      </div>
    </Carousel>
  );
};
export default UnitsSlider;
