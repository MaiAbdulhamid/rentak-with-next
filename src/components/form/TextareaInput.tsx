"use client";
import { useController } from "react-hook-form";

import { type InputTypes } from "./types";

const TextareaInput = ({
  label,
  name,
  placeholder,
  control,
  rules,
}: InputTypes) => {
  const {
    field,
    fieldState: { error, invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <>
      <label htmlFor={name} className="font-medium">
        {label}:
      </label>
      <textarea
        id={name}
        className="form-input textarea mt-2"
        placeholder={placeholder}
        {...field}
      ></textarea>
    </>
  );
};

export default TextareaInput;
