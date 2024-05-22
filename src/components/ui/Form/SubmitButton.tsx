import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { type SubmitButtonProps } from "./types";

const SubmitButton = ({ isSubmitting, text, ...props }: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isSubmitting} {...props}>
      {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
      {text}
    </Button>
  );
};

export default SubmitButton;
