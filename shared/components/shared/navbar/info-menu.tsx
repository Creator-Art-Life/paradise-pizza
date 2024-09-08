import { Info, MapPin } from 'lucide-react';
import React from 'react';
import { PopupInfo } from '.';

interface Props {
    className?: string;
}

export const InfoMenu: React.FC<Props> = ({ className }) => {
    const [isInfoOpen, setIsInfoOpen] = React.useState(false);

    const toggleInfo = () => setIsInfoOpen(prev => !prev);

    return (
        <div className={`mt-4 w-full flex flex-col items-start px-7 text-white ${className}`}>
            <div className="flex items-center gap-2">
                <MapPin />
                <div>
                    <p className="text-lg">New-York</p>
                    <button className="text-sm text-gray-400">Edit</button>
                    <div className="w-96 border-b border-gray-600 mt-2" />
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 w-full relative left-8">
                <p className="text-lg font-bold">31 мин</p>
                <p className="text-lg text-yellow-400 font-bold">4.79</p>
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                </div>
                <button
                    onClick={toggleInfo}
                    className="absolute right-8 text-lg text-gray-400"
                >
                    <Info color="#ffffff" />
                </button>
            </div>
            
            <div className="-mx-7 w-screen border-b border-gray-600 mt-3" />

            {isInfoOpen && <PopupInfo onClose={toggleInfo} />}
        </div>
    );
};