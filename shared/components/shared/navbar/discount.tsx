import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    onClick: () => void; // добавляем onClick как проп
}

export const Discount: React.FC<Props> = ({ className, onClick }) => {
    return (
        <div className={className}>
            <Link href='/bonusactions'>
                <button
                    className="text-white bg-black py-4 text-xl"
                    onClick={onClick}
                >
                    <b>Discounts</b>
                </button>
            </Link>
        </div>
    );
};
