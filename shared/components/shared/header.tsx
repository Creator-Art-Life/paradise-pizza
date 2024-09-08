'use client';

import { cn } from "@/shared/lib/utils";
import React from 'react';
import { Container } from "./container";
import Image from "next/image";
import { AuthModal, CartButton, InfoMenu, Navbar, ProfileButton, SearchInput } from ".";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Info, MapPin, Menu, X } from "lucide-react";

interface Props {
    hasSearch?: boolean;
    hasCart?: boolean;
    className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
    const router = useRouter();
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const searchParams = useSearchParams();

    React.useEffect(() => {
        let toastMessage = '';
    
        if (searchParams.has('verified')) {
          toastMessage = 'Email successfully confirmed!';
        }
    
        if (toastMessage) {
          setTimeout(() => {
            router.replace('/');
            toast.success(toastMessage, {
              duration: 3000,
            });
          }, 1000);
        }
      }, []);

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleMenuClick = () => {
    setMenuOpen(prev => !prev);
    };
    return (
        <header className={cn('border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                
                <Link href="/">
                    <div className="flex items-center gap-4 max-xl:pl-6">
                        <Image src="/logo.png" alt="Logo" width={35} height={35} className="max-md:w-7 max-md:h-7" />
                        <div>
                            <h1 className="text-2xl uppercase font-black max-md:text-xl">Paradise Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3 max-md:hidden">it couldn't be tastier</p>
                        </div>
                    </div>
                </Link>

                <div className="max-md:flex items-center absolute top-8 right-7 laptop:hidden">
                    <Menu onClick={handleMenuClick} />
                </div>

                {menuOpen && <Navbar setMenuOpen={setMenuOpen} />}


                <div className="flex rounded-2xl flex-1 justify-between relative h-11 z-30 max-md:hidden "> 
                    { hasSearch && (
                        <div className="mx-10 flex-1">
                            <SearchInput />
                        </div>
                    )}

                    <div className="flex items-center gap-3 max-xl:mr-4">
                        <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
                        <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
                        {hasCart && (<CartButton />)}
                    </div>
                </div>
            </Container>
        </header>
    );
};
