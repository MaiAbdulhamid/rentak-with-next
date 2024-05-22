import * as ToastPrimitives from "@radix-ui/react-toast";
import { type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

import { toastVariants } from "../helpers";

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

export default Toast;
