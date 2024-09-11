import { CircleX, X } from 'lucide-react';
import React from 'react';

interface PopupInfoProps {
    onClose: () => void;
}

export const PopupInfo: React.FC<PopupInfoProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-start z-50 left-7 -top-12" onClick={onClose}>
            <div className="popup-container p-5 rounded-lg shadow-lg text-white w-[80%] max-w-sm" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Delivery times and costs may vary.</h3>
                <button onClick={onClose} className="text-gray-400 text-2xl -mt-8 -mr-2">
                <CircleX color="#ffffff" />
                </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">Depending on the load on the pizzeria</p>
            <p className="text-2xl font-bold mt-4">31 minutes</p>
            <p className="text-sm mt-1">Average delivery time</p>
            <p className="text-sm mt-1">
                If we don't make it in 60 minutes, we'll send you a promo code for a free pizza
            </p>
            <div className="flex items-center mt-4">
                <p className="text-2xl text-yellow-400 font-bold">4.79</p>
                <div className="flex ml-2">
                {[...Array(4)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd200'}}>⭐</span>
                ))}
                <span className="star half-star">⭐</span>
                </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">2126 ratings</p>
            <p className="text-sm text-gray-400">You can rate your order in the mobile app</p>
            </div>
        </div>
    );
};
