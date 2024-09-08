import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    ImageUrl: string;
    title: string;
    desc: string;
    hasButtom?: boolean;
    url?: string
}

export const Article: React.FC<Props> = ({
    hasButtom = true,
    className,
    ImageUrl,
    title,
    desc,
    url
}) => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 mx-auto">
            <div className={`bg-white shadow-lg rounded-lg ${className}`}>
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-t-lg overflow-hidden">
                    <img
                        src={ImageUrl}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="p-4 text-left">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700">
                        {desc}
                    </p>
                </div>

                {hasButtom && (
                    <div className="flex justify-center pb-4">
                        <Link href={url ?? ""} className="bg-orange-200 text-orange-600 py-2 px-4 rounded-full hover:bg-orange-300 transition w-full mx-4">
                                <p className="text-center">Look</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
