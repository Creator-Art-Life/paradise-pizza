'use client';

import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';
import { ChoosePizzaFormMobile, ChooseProductFormMobile } from '.';

interface Props {
    product: ProductWithRelations;
    onSubmit?: VoidFunction;
}

export const ProductFormMobile: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
      try {
        const itemId = productItemId ?? firstItem.id;
  
        await addCartItem({
          productItemId: itemId,
          ingredients,
        });
  
        toast.success(product.name + ' added to cart');
  
        _onSubmit?.();
      } catch (err) {
        toast.error('Failed to add product to cart');
        console.error(err);
      }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaFormMobile
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <>
      <ChooseProductFormMobile
        imageUrl={product.imageUrl}
        name={product.name}
        onSubmit={onSubmit}
        price={firstItem.price}
        loading={loading}
      />
    </>
  );
};