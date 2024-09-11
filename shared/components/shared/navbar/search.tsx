import { cn } from "@/shared/lib/utils";
import { Api } from "@/shared/services/api-client";
import { Product } from "@prisma/client";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useClickAway, useDebounce } from "react-use";
import { X, Search } from "lucide-react";

interface Props {
    className?: string;
}

export const SearchPanel: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [products, setProducts] = React.useState<Product[]>([]);
    const [focused, setFocused] = React.useState(false);
    const [focusedbuttom, setFocusedButtom] = React.useState(false);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocusedButtom(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery);
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        },
        250,
        [searchQuery],
    );

    const onClickItem = () => {
        setFocusedButtom(false);
        setFocused(false);
        setSearchQuery('');
        setProducts([]);
    };

    return (
        <div className={className}>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
            <button
                onClick={() => setFocused(true)}
                className="text-white bg-black py-4 mr-56 text-xl"
            >
                <b>Search</b>
            </button>

            {/* Modal with search input */}
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
                                'rounded-2xl outline-none w-full pl-11 bg-transparent', // фон прозрачный по умолчанию
                                focusedbuttom && 'bg-white' // фон белый при фокусе
                            )}
                            type="text"
                            placeholder="Find product..."
                            onFocus={() => setFocusedButtom(true)}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        {/* Dropdown for product suggestions */}
                        {products.length > 0 && (
                            <div className={cn(
                                'absolute w-full bg-[#1b1b1b] rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                                focused && 'visible opacity-100 top-12',
                            )}>
                            {
                                products.map(product => (
                                    <Link
                                        onClick={onClickItem}
                                        key={product.id}
                                        className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                                        href={`/product/${product.id}`}>
                                        <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                                        <span className="text-white"><b>{product.name}</b></span>
                                    </Link>
                                ))
                            }
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};