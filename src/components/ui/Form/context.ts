import React from "react";

import { type FormFieldContextValue, type FormItemContextValue } from "./types";

export const FormFieldContext = React.createContext<
  FormFieldContextValue | undefined
>(undefined);

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
