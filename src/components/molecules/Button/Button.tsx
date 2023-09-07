import { twMerge } from "tailwind-merge";
import { IButtonProps } from ".";
import { buttonVariants } from "./Button.utils";

export const Button = ({
  className,
  variant = "none",
  children,
  ...props
}: IButtonProps) => {
  return (
    <button className={twMerge(buttonVariants[variant], className)} {...props}>
      {children}
    </button>
  );
};
