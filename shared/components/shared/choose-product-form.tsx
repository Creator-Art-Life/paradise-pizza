import React from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
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
 * Форма выбора ПРОДУКТА
*/
export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,
    onSubmit,
    loading,
    price,
    className
}) => {
    return (
        <div className={cn(className, 'flex flex-1 w-full h-full')}>
            <div className="flex items-center justify-center flex-1 w-full h-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="object-cover w-[70%] h-[70%]"
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7 h-full flex flex-col justify-between">
                <Title text={name} size="md" className="font-extrabold mb-1" />
                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Add to cart for {price} $
                </Button>
            </div>
        </div>
    );
};
