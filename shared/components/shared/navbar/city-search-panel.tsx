'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { useClickAway } from "react-use";
import { cn } from "@/shared/lib/utils";
import { cities } from "@/shared/constants";

interface CitySearchPanelProps {
    className?: string;
    onCitySelect: (city: string) => void; // Пропс для передачи функции обновления города
}

export const CitySearchPanel: React.FC<CitySearchPanelProps> = ({ className, onCitySelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [focused, setFocused] = useState(false);
    const [focusedbuttom, setFocusedButtom] = useState(false);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocusedButtom(false);
    });

    const groupedCities = cities.reduce((acc: Record<string, string[]>, city) => {
        const firstLetter = city[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(city);
        return acc;
    }, {});

    const handleSearch = (query: string) => {
        if (query === "") {
            return groupedCities;
        }

        const filteredGroupedCities = Object.keys(groupedCities).reduce((acc: Record<string, string[]>, letter) => {
            const filteredCities = groupedCities[letter].filter((city) =>
                city.toLowerCase().includes(query.toLowerCase())
            );

            if (filteredCities.length > 0) {
                acc[letter] = filteredCities;
            }

            return acc;
        }, {});

        return filteredGroupedCities;
    };

    const searchResults = handleSearch(searchQuery);

    return (
        <div className={className}>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
            <button
                onClick={() => setFocused(true)}
                className="text-sm text-gray-400"
            >
                <b>Edit</b>
            </button>

            {focused && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#1b1b1b] z-40 p-4 py-8">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={35}
                                    height={35}
                                    className="max-md:w-7 max-md:h-7"
                                />
                                <div>
                                    <h1 className="text-xl uppercase text-white font-black">Paradise Pizza</h1>
                                </div>
                            </div>
                        </Link>
                        <button onClick={() => setFocused(false)} className="text-gray-500">
                            <X />
                        </button>
                    </div>

                    <div
                        ref={ref}
                        className={cn(
                            'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
                            className
                        )}
                    >
                        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-[#8f8f8f]" />
                        <input
                            className={cn(
                                'rounded-2xl outline-none w-full pl-11 bg-transparent text-white',
                                focusedbuttom && 'bg-white text-black'
                            )}
                            type="text"
                            placeholder="Your city..."
                            onFocus={() => setFocusedButtom(true)}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 h-full overflow-y-auto text-white">
                        {Object.keys(searchResults).length > 0 ? (
                            Object.keys(searchResults).sort().map((letter) => (
                                <div key={letter} className="mb-4">
                                    <div className="flex">
                                        <div className="text-lg font-bold text-gray-300 w-8">{letter}</div>

                                        <ul className="ml-4 -mt-1 mb-2">
                                            {searchResults[letter].map((city, index) => (
                                                <li
                                                    key={index}
                                                    className="py-[6px] font-normal text-xl cursor-pointer"
                                                    onClick={() => {
                                                        onCitySelect(city); // Вызываем функцию обновления города
                                                        setFocused(false); // Закрываем панель поиска
                                                    }}
                                                >
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">City not found</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
