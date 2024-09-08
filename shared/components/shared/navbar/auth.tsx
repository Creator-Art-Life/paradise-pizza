import React from "react";
import { AuthModal } from "..";

interface Props {
    className?: string;
}

export const Auth: React.FC<Props> = ({ className }) => {
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    return (
        <div className={className}>
            <button
                onClick={() => setOpenAuthModal(true)}
                className="text-white bg-black py-4 mr-56 text-xl"
            >
                <b>Login</b>
            </button>

            {/* Окно авторизации */}
            <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
        </div>
    );
};