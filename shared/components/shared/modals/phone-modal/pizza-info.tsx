'use client';

import React, { useRef, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useClickAway } from "react-use";

interface Props {
    className?: string;
}

export const PizzaInfo: React.FC<Props> = ({ className }) => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const infoRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const toggleInfo = () => setIsInfoOpen(prev => !prev);

    useClickAway(infoRef, (e) => {
        if (isInfoOpen && !iconRef.current?.contains(e.target as Node)) {
            setTimeout(() => setIsInfoOpen(false), 100); 
        }
    });

    return (
        <div className={`relative ${className}`}>
            <div ref={iconRef}>
                <IoMdInformationCircleOutline
                    onClick={toggleInfo} 
                    className="cursor-pointer text-3xl"
                />
            </div>

            {isInfoOpen && (
                <div
                    ref={infoRef}
                    className="absolute top-8 right-0 text-white p-3 rounded-lg shadow-lg w-52 z-10"
                    style={{ backgroundColor: '#373535' }}
                >
                    <p className="text-sm font-semibold text-gray-400 mb-2">Nutritional value per 100 g:</p>
                    <div className="text-sm flex justify-between">
                        <span>Energy value:</span> 
                        <span>267.2 kcal</span>
                    </div>
                    <div className="text-sm flex justify-between">
                        <span>Proteins:</span> 
                        <span>10.2 g</span>
                    </div>
                    <div className="text-sm flex justify-between">
                        <span>Fats:</span> 
                        <span>10.1 g</span>
                    </div>
                    <div className="text-sm flex justify-between">
                        <span>Carbohydrates:</span> 
                        <span>32 g</span>
                    </div>
                    <div className="text-sm flex justify-between">
                        <span>Weight:</span> 
                        <span>570 g</span>
                    </div>
                </div>
            )}
        </div>
    );
};
