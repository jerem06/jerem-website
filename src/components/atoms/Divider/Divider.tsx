import { IDividerProps } from "./Divider.props";
import { twMerge } from "tailwind-merge";

export const Divider = ({
  color = "bg-tertiary-900",
  className,
  ...props
}: IDividerProps) => {
  return (
    <div className={twMerge("h-14 w-0.5 mx-5", color, className)} {...props} />
  );
};
