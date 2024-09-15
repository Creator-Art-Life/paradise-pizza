import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  size?: 20 | 30 | 40;
}

export const PizzaImagePhone: React.FC<Props> = ({imageUrl, size, className }) => {
    return (
      <div className={cn('flex items-center justify-center flex-1 relative w-full mt-8', className)}>
        <img
          src={imageUrl}
          alt="Logo"
          className={cn('relative left-2 top-2 transition-all z-10 w-[350px] h-[350px]', className)}
        />
      </div>
    );
};
