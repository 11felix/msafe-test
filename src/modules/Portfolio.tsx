// App.tsx
import React, { useState } from "react";
import Stake from "./Stake";
import Unstake from "./Unstake";

const Portfolio: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");
  const tabs = ["Stake", "Unstake"];

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
    // Add any additional logic you need when a tab is selected
  };

  return (
    <>
      <div className="w-full h-full bg-[#E9EFF4] flex flex-col justify-center items-center">
        <div className="flex space-x-[5.1vw] justify-center">
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
        <div className="">
          {selectedTab === "Stake" ? <Stake /> : <Unstake />}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
