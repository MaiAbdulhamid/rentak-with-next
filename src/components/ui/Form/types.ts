import { type FieldPath, type FieldValues } from "react-hook-form";

import { type ButtonProps } from "../button";

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export type SubmitButtonProps = ButtonProps & {
  isSubmitting: boolean;
  text: string;
};
