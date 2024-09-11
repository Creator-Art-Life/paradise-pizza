import { Info, MapPin } from 'lucide-react';
import React from 'react';
import { CitySearchPanel, PopupInfo } from '.';

interface Props {
    className?: string;
}

export const InfoMenu: React.FC<Props> = ({ className }) => {
    const [isInfoOpen, setIsInfoOpen] = React.useState(false);
    const [city, setCity] = React.useState('New-York'); 

    const toggleInfo = () => setIsInfoOpen(prev => !prev);

    const handleCityChange = (selectedCity: string) => {
        setCity(selectedCity);
    };
    return (
        <div className={`mt-4 w-full flex flex-col items-start px-7 text-white ${className}`}>
            <div className="flex items-center gap-2">
                <MapPin />
                <div>
                    <p className="text-lg">{city}</p>
                    <CitySearchPanel onCitySelect={handleCityChange} />
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