import Link from "next/link";
import React from "react";
import { CartDrawer } from "..";

interface Props {
    className?: string;
    onClick?: () => void;
}

export const Cart: React.FC<Props> = ({ className, onClick }) => {
    return (
        <CartDrawer>
            <div className={className}>
                {/* Теперь по клику на текст откроется всплывающее меню */}
                <button
                    className="text-white bg-black py-4 text-xl"
                    onClick={onClick}
                >
                    <b>Cart</b>
                </button>
            </div>
        </CartDrawer>
    );
};
