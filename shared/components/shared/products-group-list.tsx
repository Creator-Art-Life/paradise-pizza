'use client';

import React, { use } from 'react';
import { useIntersection} from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
    title: string;
    items: ProductWithRelations[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    listClassName,
    categoryId,
    className
}) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
            console.log(title, categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5 max-md:pl-3" />
            
            <div className={cn("grid grid-cols-3 gap-[50px] max-xl:gap-[30px] max-md:grid-cols-1", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                        ingredients={product.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};
