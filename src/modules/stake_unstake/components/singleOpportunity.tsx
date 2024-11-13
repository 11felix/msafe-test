import React, { useState } from "react";
import FAQView from "./faqComponent";

interface Props {
    icon1: any;
    icon2?: any;
    name: string;
    apy: string;
    tvl: string;
}

const SingleOpportunities = (props: Props) => {
    const {icon1, icon2, name, apy, tvl} = props;

    return (
        <div className="flex flex-row w-fit border-solid border-[0.052vw] border-[#D3E6F5] rounded-[1.302vw] pb-[2.236vw] pt-[2.326vw] pl-[1.5625vw] pr-[1.5625vw] bg-[#F4F6FA3C] bg-repeat w-[32.135vw] mx-auto gap-[2.174vw]">
            <div className="flex flex-row">
                {icon2 !== undefined ?
                <>
                <img src={icon1} className="w-[2.343vw] h-[2.342vw]" />
                <img src={icon2} className="w-[2.343vw] h-[2.342vw]" />
                </>
                :
                <img src={icon1} className="w-[3.541vw] h-[3.541vw]" />
                }
                
                <h1>{name}</h1>
                <div className="flex flex-col">
                    <p>
                    APY
                    </p>
                    <p>
                    {apy}
                    </p>

                </div>
                <div className="flex flex-col">
                    <p>
                    TVL
                    </p>
                    <p>
                    {tvl}
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SingleOpportunities;