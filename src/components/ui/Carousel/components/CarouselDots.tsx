import * as React from "react";

import { cn } from "@/lib/utils";

import { useCarousel } from "../hooks";

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollSnaps, selectedIndex, onDotButtonClick } = useCarousel();

  if (!scrollSnaps.length) return null;

  return (
    <div className={cn("flex gap-3", className)} ref={ref} {...props}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          aria-label={`Slide - ${index}`}
          className={cn(
            "size-2.5 cursor-pointer rounded-full",
            index === selectedIndex
              ? "bg-slate-800 hover:bg-slate-800/80"
              : "bg-slate-300 hover:bg-slate-300/80",
          )}
          onClick={() => {
            onDotButtonClick(index);
          }}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = "CarouselDots";

export default CarouselDots;
