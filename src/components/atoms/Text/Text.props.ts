import { HTMLAttributes } from "react";

export interface ITextProps
  extends HTMLAttributes<HTMLDivElement | HTMLHeadingElement> {
  variant?: TextVariant;
}

export type TextVariant = "title" | "subTitle" | "body";
