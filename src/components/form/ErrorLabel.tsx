import { type ErrorLabelTypes } from "./types";

const ErrorLabel = ({ errors, name }: ErrorLabelTypes) => {
  return (
    <>
      {errors[name] && (
        <p className="text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </>
  );
};

export default ErrorLabel;
