'use client';

import React from "react";
import { Input } from "../ui";
import { RangeSlider, FilterCheckBox, Title } from "@/shared/components/shared"
import { CheckboxFiltersGroup } from "./check-filters-group";
import { useQueryFilters, useFilters, useIngredients } from "@/shared/hooks";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}



export const Filters: React.FC<Props> = ({ className }) => {
    const {ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name}));

    const updatePrices = (prices: number[]) => {
        console.log(prices, 999);
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    return (
        <div className={className}>
            <Title text="Filter" size="sm" className="mb-5 font-bold"/>

            {/* Верхние чекбоксы */}

            <CheckboxFiltersGroup
                title="Test type "
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    { text: 'Thin', value: '1'},
                    { text: 'Traditional', value: '2'},
                ]}
            />

            <CheckboxFiltersGroup
                title="Sizes"
                name="sizes"
                className="mb-5"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    { text: '20 cm', value: '20'},
                    { text: '30 cm', value: '30'},
                    { text: '40 cm', value: '40'},
                ]}
            />

            {/* Фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price from and to:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={20}
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={1}
                        max={20}
                        placeholder="20"
                        value={String(filters.prices.priceTo)}
                        onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={20}
                    step={0.5}
                    value={[ filters.prices.priceFrom || 0, filters.prices.priceTo || 20]} 
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ingredients"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />

        </div>
    );
};