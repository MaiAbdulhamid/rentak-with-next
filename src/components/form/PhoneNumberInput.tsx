"use client";
import { useController, useForm } from "react-hook-form";

import { type InputTypes } from "./types";

const PhoneNumberInput = ({
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
      <input
        id={name}
        type="tel"
        className="form-input mt-2"
        placeholder={placeholder}
        {...field}
      />
    </>
  );
};

export default PhoneNumberInput;
