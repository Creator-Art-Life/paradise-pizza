import React from "react";

interface Props {
    className?: string;
}

export const Ingredient: React.FC<Props> = ({ className }) => {
    return (
        <div className="bg-white p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-black mb-4">Ideal Ingredients</h1>
        <p className="text-lg text-gray-700 mb-6">
            Why do we want to get acquainted so much? Because after that, the pizza does everything on its own. 
            People see that it's delicious and come back again. The main thing for us is to show it for the first time.
        </p>
        <p className="text-lg text-gray-700 mb-8">
            In general, pizza is a very simple thing, it's hard to mess up. All you need is good ingredients and the right dough. 
            It's like a constructor: if the details are of good quality, the result will be great. Here are our details:
        </p>

        {/* Ingredient Cards */}
        <div className="grid grid-cols-1 gap-6">
            {/* Dough Card */}
            <div className="bg-orange-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-700 mb-2">Dough</h2>
                <p className="text-gray-700">
                    The thinnest part. The main thing is to make it "alive." It's a whole quest of grams, 
                    degrees, percentages, and hours with minutes. The process is not easy, but we succeed!
                </p>
            </div>

            {/* Mozzarella Card */}
            <div className="bg-orange-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-700 mb-2">Mozzarella</h2>
                <p className="text-gray-700">
                    Cheese in pizza is the key ingredient. We use real mozzarella from good suppliers.
                    The cheese should stretch, like in the picture.
                </p>
            </div>

            {/* Topping Card */}
            <div className="bg-orange-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-700 mb-2">Topping</h2>
                <p className="text-gray-700">
                    There are two main rules for tasty toppings: don't skimp on the toppings and 
                    obsessively follow the storage regime. This is the real secret.
                </p>
            </div>

            {/* Tomato Sauce Card */}
            <div className="bg-orange-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-700 mb-2">Tomato Sauce</h2>
                <p className="text-gray-700">
                    The main thing you need to know about a good tomato sauce: it must be made from tomatoes. 
                    Sounds logical, but think about it!
                </p>
            </div>
        </div>
    </div>
    );
};