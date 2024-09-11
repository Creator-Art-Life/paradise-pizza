import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    onClick: () => void;
}

export const About: React.FC<Props> = ({ className, onClick }) => {
    return (
        <div className={className}>
            <Link href={'/about'}>
                <button
                    className="text-white bg-black py-4 mr-56 text-xl"
                    onClick={onClick}
                >
                    <b>About Us</b>
                </button>
            </Link>
        </div>
    );
};