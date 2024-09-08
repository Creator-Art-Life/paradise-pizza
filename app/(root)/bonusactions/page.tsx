import { Article, Container, Title } from "@/shared/components/shared";
import { CashBack, Charity, Checks, Work } from "@/shared/constants";
import React from "react";

export default async function Bonusactions() {
    return (
        <>
            <Container className="mt-6">
                <Title text="Discounts" size="lg" className="font-extrabold max-xl:ml-6 max-md:text-2xl"/>
            </Container>
            <div className="mt-5 space-y-6">
                <Article
                    ImageUrl={CashBack.img} 
                    title={CashBack.title} 
                    desc={CashBack.desc}
                    hasButtom={false}
                />
                <Article ImageUrl={Work.img} title={Work.title} desc={Work.desc}/>
                <Article ImageUrl={Checks.img} title={Checks.title} desc={Checks.desc} hasButtom={false}/>
                <Article ImageUrl={Charity.img} title={Charity.title} desc={Charity.desc}/>
            </div>
        </>
    );
};