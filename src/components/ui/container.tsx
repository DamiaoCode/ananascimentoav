import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        "w-full mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 