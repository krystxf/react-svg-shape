import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export const SvgBackground = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-72 h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 bg-[length:20px_20px] bg-[linear-gradient(45deg,#f8f9fa_25%,transparent_25%),linear-gradient(-45deg,#f8f9fa_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8f9fa_75%),linear-gradient(-45deg,transparent_75%,#f8f9fa_75%)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
