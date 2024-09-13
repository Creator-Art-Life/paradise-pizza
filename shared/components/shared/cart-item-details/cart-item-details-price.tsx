import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return (
    <h2 className={cn('font-bold text-lg text-left', className)}>
      {value} $
    </h2>
  );
};
