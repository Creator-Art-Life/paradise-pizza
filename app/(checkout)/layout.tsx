import { Container, Header } from "@/shared/components/shared";
import { Suspense } from "react";

export const metadata = {
    title: 'Paradise Pizza | Cart',
    description: 'Generated by Next.js',
};
  
export default function CheckOutLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#F4F1EE]">
            <Container>
                <Suspense>
                    <Header hasSearch={false} hasCart={false} className="border-b-gray-200" />
                </Suspense>
                {children}
            </Container>
        </main>
    );
}