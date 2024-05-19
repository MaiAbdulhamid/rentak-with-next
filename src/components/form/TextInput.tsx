"use client";

import { useController } from "react-hook-form";

import ErrorLabel from "./ErrorLabel";
import { type InputTypes } from "./types";

const TextInput = ({
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
        type="text"
        className="form-input mt-2"
        placeholder={placeholder}
        {...field}
      />
      {/* <ErrorLabel errors={errors} name={name} /> */}
    </>
  );
};

export default TextInput;
