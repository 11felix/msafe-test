import React, { useState } from "react";
// import InputContainer from "../../components/InputContainer";
// import stSuiLogo from "../../assets/icons/stSuiLogo.svg";
// import suiLogo from "../../assets/icons/suiLogo.svg";
// import CommonButton from "../../components/CommonButton";
import FAQ from "./components/faq";
import Opportunities from "./components/stSuiOpportunities";
import Unstake from "./components/Unstake";
import Stake from "./components/Stake";

const StakeUnstake: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");
  const tabs = ["Stake", "Unstake"];

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-[#E9EFF4] to-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-[5.1vw] justify-center pt-[2.91vw]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleSelectTab(tab)}
                className={`pb-[0.15vw] text-black text-[1.09vw] font-poppins font-medium ${
                  selectedTab === tab
                    ? "border-b-[0.15vw] border-black"
                    : "border-b-[0.15vw] border-[#E9EFF4] opacity-45"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="pb-[3.5vw]">
            {selectedTab === "Stake" ? <Stake /> : <Unstake />}
          </div>
        </div>
        <div className="pb-[2vw]">
          <div className="flex flex-col w-fit ml-[6.3vw] rounded-[1.14vw] bg-[#EFF4F7] hover:bg-[#E5EBEF] ml-[1vw] pt-[0.67vw] pb-[0.83vw] px-[1.09vw] cursor-default">
            <p className="text-[0.83vw] text-black text-center font-inter">
              Powered by
            </p>
            <p className="text-[1.14vw] text-black text-center font-nebula">
              ALPHA FI
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/src/assets/images/secondSectionBg.png')] bg-contain bg-center bg-no-repeat h-[29.73vw] mt-[-9.3vw]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-[1.823vw] mt-[12vw] font-poppins text-black">
            DeFi opportunities with your stSUI
          </h1>
        </div>
      </div>
      <Opportunities />
      <FAQ />
    </>
  );
};

export default StakeUnstake;
