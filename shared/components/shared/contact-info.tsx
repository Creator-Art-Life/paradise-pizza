import React from "react";
import { FaStar, FaSubway } from "react-icons/fa";

interface Props {
    className?: string;
    place: string;
    time: string;
    metro?: string;
    street: string;
    grade?: string
    hasMetro?: boolean;
}

export const ContactInfo: React.FC<Props> = ({
    className,
    place,
    time,
    hasMetro=false,
    metro,
    street,
    grade="4.71"
}) => {
    return (
        <div className={className}>
            <div className="border p-4 max-w-md bg-white">
                <h2 className="text-xl font-extrabold mb-4">{place}</h2>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 text-lg">{time} min</span>
                    <div className="flex items-center ml-4">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <span className="ml-2 text-lg">{grade}</span>
                    </div>
                </div>
                {hasMetro &&
                    <div className="flex items-center mb-4">
                        <FaSubway className="text-red-600 mr-2" />
                        <span>{metro}</span>
                    </div>
                }
                <div className="text-gray-700 mb-4">
                   {street}
                </div>
                <div>
                    <strong>Delivery</strong>
                    <p>Mon-Sun: 09:00 — 23:00</p>
                </div>
                <div className="mt-2">
                    <strong>Restaurant and pickup</strong>
                    <p>Mon-Sun: 09:00 — 23:00</p>
                </div>
            </div>
        </div>
    );
};