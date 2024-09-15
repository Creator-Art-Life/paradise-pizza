'use client';

import React from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { PizzaImagePhone, PizzaInfo, GroupVariants, IngredientItem } from ".";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { getPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ с прокруткой для мобильного устройства
*/

export const ChoosePizzaFormMobile: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onSubmit,
  loading,
  className
}) => {
  const { size, type, selectedIngredients, currentItemId, availableSizes, setSize, setType, addIngredient } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn("flex flex-col h-screen overflow-y-auto", className)}>
      <div className="flex flex-col flex-grow p-4">
        <PizzaImagePhone imageUrl={imageUrl} size={size} />

        <div className="flex justify-between items-center text-left">
          <Title text={name} size="md" className="font-semibold mb-1" />
          <PizzaInfo />
        </div>

        <p className="text-gray-400">{textDetaills}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
      </div>

      <div className="bg-gray-50 p-5 rounded-md h-[auto] mt-5 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-3">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              name={ingredient.name}
              price={ingredient.price}
              imageUrl={ingredient.imageUrl}
              onClick={() => addIngredient(ingredient.id)}
              active={selectedIngredients.has(ingredient.id)}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4">
        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Add to cart for {totalPrice.toFixed(2)} $
        </Button>
      </div>
    </div>
  );
};
