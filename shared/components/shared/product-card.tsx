import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    ingredients: Ingredient[];
    className?: string;
}

export const ProductCard: React.FC<Props> = ({
    id,
    name,
    price,
    imageUrl,
    ingredients,
    className,
}) => {
    return (
        <div className={`${className} max-md:flex max-md:items-center max-md:space-x-4`}>
            <Link href={`/product/${id}`} className="flex flex-col max-md:flex-row max-md:items-center">
                <div className="flex justify-center p-6 rounded-lg h-[260px] bg-secondary max-md:bg-transparent max-md:w-[50%]">
                    <img className="max-md:w-[150px] max-md:h-[150px] w-[215px] h-[215px] object-cover" src={imageUrl} alt={name} />
                </div>
                <div className="flex flex-col max-md:w-[50%] p-4">
                    <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                    <p className="text-sm text-gray-400">
                        {ingredients.map((ingredient) => ingredient.name).join(', ')}
                    </p>
                    <div className="flex justify-between items-center mt-4 max-md:hidden">
                        <span className="text-[20px]">
                            from <b>{price} $</b>
                        </span>
                        <Button variant="secondary" className="text-base font-bold">
                            <Plus size={20} className="mr-1" />
                            Add
                        </Button>
                    </div>
                    <div className="flex items-center mt-4 min laptop:hidden">
                        <Button variant="secondary" className="text-base font-bold">
                            <span className="text-[17px]">
                                from {price} $
                            </span>
                        </Button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
