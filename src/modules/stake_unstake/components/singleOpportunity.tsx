import React, { useState } from "react";
import redirect_icon from "../../../assets/icons/redirect_icon.svg";

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
        <div className="flex flex-row w-fit border-solid border-[0.052vw] border-[#D3E6F5] rounded-[1.302vw] pb-[2.236vw] pt-[2.326vw] pl-[1.5625vw] pr-[1.5625vw] bg-[#F4F6FA3C] bg-repeat w-[49.0625vw] mx-auto gap-[2.174vw]">
            <div className="grid grid-cols-[10%_25%_15%_15%_35%] w-[49.0625vw] gap-[1.04vw]">
                {icon2 !== undefined ?
                <div className="flex flex-row">
                    <img src={icon1} className="w-[2.343vw] h-[2.342vw]" />
                    <img src={icon2} className="w-[2.343vw] h-[2.342vw] ml-[-0.5vw]" />
                </div>
                :
                <div>
                    <img src={icon1} className="w-[3.541vw] h-[3.541vw]" />
                </div>
                }
                
                <h1>{name}</h1>
                <div className="flex flex-col">
                    <p className="text-[1.04vw] text-[#000000]">
                    APY
                    </p>
                    <p className="text-[1.25vw] text-[#000000]">
                    {apy}
                    </p>

                </div>
                <div className="flex flex-col">
                    <p className="text-[1.04vw] text-[#000000]">
                    TVL
                    </p>
                    <p className="text-[1.25vw] text-[#000000]">
                    {tvl}
                    </p>
                </div>
                <div className="flex flex-row bg-[#000000] w-fit pl-[1.51vw] pr-[1.51vw] pt-[0.52vw] pb-[0.52vw] h-fit rounded-[0.52vw]">
                    <p className="text-[1.14vw] text-[#FFFFFF] font-poppins">
                        Add Liquidity
                    </p>
                    <img src={redirect_icon} className="w-[0.6435vw] h-[0.6435vw]" />
                </div>
            </div>
        </div>
    );
};

export default SingleOpportunities;