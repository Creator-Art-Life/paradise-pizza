import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImagePhone, PizzaInfo, Title } from ".";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

/**
* Форма выбора ПРОДУКТА FOR PHONE
*/

export const ChooseProductFormMobile: React.FC<Props> =({
  name,
  imageUrl,
  onSubmit,
  loading,
  price,
  className
}) => {
    return (
      <div className={cn("flex flex-col p-4", className)}>
        <div className="flex flex-col flex-grow p-4">
          <PizzaImagePhone imageUrl={imageUrl} />
        </div>

        <div className="flex justify-between items-center text-left">
          <Title text={name} size="md" className="font-semibold mb-1" />
          <PizzaInfo />
        </div>
        <Button
            loading={loading}
            onClick={() => onSubmit?.()}
            className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
            Add to cart for {price} $
        </Button>
      </div>
    );
};