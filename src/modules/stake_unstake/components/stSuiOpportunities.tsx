import React, { useState } from "react";
import FAQView from "./faqComponent";
import SingleOpportunities from "./singleOpportunity";
import sui_icon from "../../../assets/icons/suiLogo.svg";
import alpha_icon from "../../../assets/icons/alpha_logo.png";

const Opportunities: React.FC = () => {

    return (
        <div className="mt-[12.8vw]">
            <h1 className="flex justify-center text-[1.823vw] font-poppins">
            DeFi opportunities with your stSUI
            </h1>
            <div className="flex flex-col mt-[6.95vw] gap-[2.174vw]">
                <SingleOpportunities icon1={alpha_icon} icon2={sui_icon} name={"ALPHA-stSUI"} apy={"50.00%"} tvl={"$10M"} />
                <SingleOpportunities icon1={alpha_icon} name={"ALPHA-stSUI"} apy={"50.00%"} tvl={"$10M"} />
            </div>
        </div>
    );
};

export default Opportunities;