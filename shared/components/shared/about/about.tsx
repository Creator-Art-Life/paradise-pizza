import React from "react";
import { Ingredient, Introduction, Openness } from ".";

interface Props {
    className?: string;
}

export const AboutProject: React.FC<Props> = ({ className }) => {
    return (
        <>
            <Introduction />
            <Ingredient />
            <Openness />
        </>
    );
};