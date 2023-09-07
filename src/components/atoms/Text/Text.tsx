import { ITextProps } from "./Text.props";
import { twMerge } from "tailwind-merge";

export const Text = ({
  variant,
  children,
  className,
  ...props
}: ITextProps) => {
  switch (variant) {
    case "title":
      return (
        <h1 className={twMerge("font-bold", className)} {...props}>
          {children}
        </h1>
      );
    case "subTitle":
      return (
        <h2 className={twMerge("font-semibold", className)} {...props}>
          {children}
        </h2>
      );
    case "body":
      return (
        <div className={twMerge("font-medium", className)} {...props}>
          {children}
        </div>
      );
    default:
      return (
        <div className={`${className}`} {...props}>
          {children}
        </div>
      );
  }
};
