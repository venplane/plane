import * as React from "react";
import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

export interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  name: string;
  value?: string | number | readonly string[];
  mode?: "primary" | "transparent" | "secondary" | "disabled";
  register?: UseFormRegister<any>;
  validations?: RegisterOptions;
  error?: any;
  className?: string;
  size?: "rg" | "lg";
  fullWidth?: boolean;
}
