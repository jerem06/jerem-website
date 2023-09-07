import { HTMLAttributes } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
}

export type ButtonVariant = "classic" | "outline" | "none";
