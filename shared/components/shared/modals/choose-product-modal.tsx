'use client';

import React from "react";
import { cn } from "@/shared/lib/utils";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ProductForm, ProductFormMobile } from "..";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                    'max-md:w-full max-md:h-[100vh]',
                className,
                )}>
                <div className="max-md:hidden">
                    <ProductForm product={product} onSubmit={() => router.back()}/>
                </div>
                <div className="laptop:hidden">
                    <ProductFormMobile product={product} onSubmit={() => router.back()}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};