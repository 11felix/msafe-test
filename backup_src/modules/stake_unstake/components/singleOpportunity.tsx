import React from "react";
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
        <div className="flex flex-row w-fit border-solid border-[0.052vw] border-[#D3E6F5] rounded-[1.302vw] pb-[2.236vw] pt-[2.326vw] pl-[1.5625vw] pr-[1.5625vw] bg-[#F4F6FA3C] bg-repeat w-[49.0625vw] mx-auto gap-[2.174vw] justify-center">
            <div className="grid grid-cols-[10%_25%_15%_15%_35%] w-[49.0625vw] gap-[1.04vw]">
                {icon2 !== undefined ?
                <div className="flex flex-row flex items-center">
                    <img src={icon1} className="w-[2.343vw] h-[2.342vw]" alt="token-icon" />
                    <img src={icon2} className="w-[2.343vw] h-[2.342vw] ml-[-0.5vw]" alt="token-icon" />
                </div>
                :
                <div>
                    <img src={icon1} className="w-[3.541vw] h-[3.541vw]" alt="token-icon" />
                </div>
                }
                
                <h1 className="font-intermedium flex items-center">{name}</h1>
                <div className="flex flex-col items-center">
                    <p className="text-[1.04vw] text-[#000000] font-poppinslight">
                    APY
                    </p>
                    <p className="text-[1.25vw] text-[#000000] font-intersemibold">
                    {apy}
                    </p>

                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[1.04vw] text-[#000000] font-poppinslight">
                    TVL
                    </p>
                    <p className="text-[1.25vw] text-[#000000] font-intersemibold">
                    {tvl}
                    </p>
                </div>
                <div className="flex flex-row bg-[#000000] w-fit pl-[1.51vw] pr-[1.51vw] pt-[0.52vw] pb-[0.52vw] h-fit rounded-[0.52vw] items-center">
                    <p className="text-[1.14vw] text-[#FFFFFF] font-poppinsmedium">
                        Add Liquidity
                    </p>
                    <img src={redirect_icon} className="w-[0.6435vw] h-[0.6435vw] ml-[0.8vw]" alt="redirect-icon" />
                </div>
            </div>
        </div>
    );
};

export default SingleOpportunities;