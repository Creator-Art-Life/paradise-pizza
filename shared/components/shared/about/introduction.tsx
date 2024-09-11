import React from "react";

interface Props {
    className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
    return (
        <div className="bg-white p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">We</h1>
            <p className="text-gray-700 mb-6">
                Usually people come to Our Pizza just to eat. Our promoters hand out leaflets about a slice of pizza for twenty rubles or something else advantageous. We do this as a first step to get to know each other.
            </p>
            <p className="text-gray-700 mb-6">
                But for us, Dodo is not just pizza. It is pizza too, but first and foremost, it is a big deal,
                which inspires us, makes us wake up every morning and continue working with interest.   
            </p>
            <p className="text-gray-700 mb-6">
                What is our interest? We will tell you now.
            </p>
            <div className="relative mt-8 left-10">
                <img
                    src='/assets/about/1.webp'
                    alt="About Pizza"
                />
            </div>
        </div>
    );
};