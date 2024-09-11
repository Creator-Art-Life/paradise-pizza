import React from "react";
import { useSession } from "next-auth/react";
import { AuthModal } from ".."; // Импорт компонента модального окна для авторизации
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

interface Props {
    className?: string;
    onClick: () => void;
}

export const Auth: React.FC<Props> = ({ className, onClick }) => {
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    const { data: session } = useSession(); // Получение сессии из next-auth

    return (
        <div className={className}>
            {!session ? (
                <button
                    onClick={() => setOpenAuthModal(true)} // Открытие модального окна авторизации
                    className="text-white bg-black py-4 mr-56 text-xl"
                >
                    <User size={18} className="inline-block mr-2" />
                    <b>Login</b>
                </button>
            ) : (
                <Link href="/profile">
                    <button
                        className="text-white bg-black py-4 mr-56 text-xl"
                        onClick={onClick}
                    >
                        {/* <CircleUser size={18} className="inline-block mr-2" /> */}
                        <b>Profile</b>
                    </button>
                </Link>
            )}

            <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
        </div>
    );
};
