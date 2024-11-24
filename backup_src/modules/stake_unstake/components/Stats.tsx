import React, { useState } from "react";
import statsIcon from "../../../assets/icons/statsIcon.svg";

const Stats: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStats = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col align-left">
      <button
        onClick={toggleStats}
        className="flex items-center justify-center py-[0.57vw] px-[0.85vw] rounded-[0.7vw] bg-white shadow-custom transition-transform"
      >
        <span className="flex items-center text-[1.04vw] font-inter font-medium">
          {" "}
          <img
            src={statsIcon}
            alt="Wallet Icon"
            className="h-[0.57vw] w-[0.64vw] mr-[0.57vw]"
          />{" "}
          Stats
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-[1.8vw] rounded-lg transition-all duration-300 ease-in-out opacity-0 transform -translate-y-2 animate-slide-in">
          <div className="text-left space-y-[1.5vw]">
            <div>
              <span className="text-[1.25vw] text-[#222F3B] font-inter font-bold">
                $25,000,000
              </span>
              <p className="text-[0.93vw] text-[#829CB2] font-inter">
                stSUI market cap
              </p>
            </div>
            <div>
              <span className="text-[1.25vw] text-[#222F3B] font-inter font-bold">
                10,000,000
              </span>
              <p className="text-[0.93vw] text-[#829CB2] font-inter">
                Total SUI staked
              </p>
            </div>
            <div>
              <span className="text-[1.25vw] text-[#222F3B] font-inter font-bold">
                3000
              </span>
              <p className="text-[0.93vw] text-[#829CB2] font-inter">
                Total stakers
              </p>
            </div>
            <div>
              <span className="text-[1.25vw] text-[#222F3B] font-inter font-bold">
                450
              </span>
              <p className="text-[0.93vw] text-[#829CB2] font-inter">
                Current epoch
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
