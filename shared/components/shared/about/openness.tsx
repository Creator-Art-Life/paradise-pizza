import React from "react";

interface Props {
    className?: string;
}

export const Openness: React.FC<Props> = ({ className }) => {
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Openness in Everything</h1>
            <p className="text-base mb-6">
                Anyone can write hundreds of rules, but by itself, it doesn't work. What is needed is strength, thanks to which standards will be upheld. For us, this strength has become transparency. We’ve made everything so transparent that deviating from the standards is simply impossible.
            </p>

            <h2 className="text-2xl font-semibold mb-5">How does this manifest in practice?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Open Kitchen</h3>
                    <ul className="list-none space-y-2">
                        <li>
                            <strong>Glass walls:</strong> No hidden corners, all kitchen processes are always in view.
                        </li>
                        <li>
                            <strong>Tours:</strong> We regularly dress up children and adults in gowns and caps to show the inside of our operations.
                        </li>
                        <li>
                            <strong>Webcams:</strong> Every kitchen continuously streams video from multiple cameras directly to our website.
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Public Control</h3>
                    <ul className="list-none space-y-2">
                        <li>
                            <strong>Secret shoppers:</strong> These aren't professional hires, but a special club consisting of our customers.
                        </li>
                        <li>
                            <strong>Cleanliness inspectors:</strong> We have inspectors who are not part of our service team—our strictest evaluators.
                        </li>
                        <li>
                            <strong>Ratings:</strong> Based on secret inspections, we create a rating of our pizzerias. The lowest-rated establishments can lose their franchise.
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Transparent Business</h3>
                    <ul className="list-none space-y-2">
                        <li>
                            <strong>Director's Day:</strong> On holidays, our directors work the register to better understand kitchen operations and help customers directly.
                        </li>
                        <li>
                            <strong>Open data:</strong> Our mobile app shows all the purchases of our stock clerks, who are responsible for ordering supplies.
                        </li>
                        <li>
                            <strong>Financial transparency:</strong> No one relies on "blind luck." Thanks to our system, financial data is transparent to everyone.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
