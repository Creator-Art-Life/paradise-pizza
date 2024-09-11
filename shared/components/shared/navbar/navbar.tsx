'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { About, Auth, Contact, ContactBlock, Discount, InfoMenu, SearchPanel } from '.';

interface NavbarProps {
    setMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setMenuOpen }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-start z-50 py-8" ref={menuRef}>
            <div className="relative w-full flex justify-between items-center px-7">
                <Link href="/" onClick={() => setMenuOpen(false)}>
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
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute right-8 -top-1 text-white text-2xl laptop:hidden"
                >
                    &times;
                </button>
            </div>

            <InfoMenu />
            <div className="flex flex-col -space-y-2 mr-3">
                <Auth onClick={() => {setTimeout(() => setMenuOpen(false), 500); }}/>
                <SearchPanel />
                <Discount onClick={() => {setTimeout(() => setMenuOpen(false), 600); }}/>
                <Contact onClick={() => {setTimeout(() => setMenuOpen(false), 600); }}/>
                <About onClick={() => {setTimeout(() => setMenuOpen(false), 600); }}/>
                <ContactBlock /> 
            </div>
        </div>
    );
};