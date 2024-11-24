import React from "react";
import statsIcon from "../../../assets/icons/statsIcon.svg";

const MobileStats: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[11.39vw]">
      <div className="flex items-center text-[4.65vw] font-inter font-medium mb-[7.7vw]">
        <img
          src={statsIcon}
          alt="Wallet Icon"
          className="h-[3.1vw] w-[3.2vw] mr-[2.55vw]"
        />
        Stats
      </div>

      <div className="flex">
        <div className="mr-[6.74vw]">
          <div className="mb-[5.58vw]">
            <span className="text-[4.18vw] text-[#222F3B] font-inter font-bold">
              $25,000,000
            </span>
            <p className="text-[3.02vw] text-[#829CB2] font-inter">
              stSUI market cap
            </p>
          </div>
          <div>
            <span className="text-[4.18vw] text-[#222F3B] font-inter font-bold">
              3000
            </span>
            <p className="text-[3.02vw] text-[#829CB2] font-inter">
              Total stakers
            </p>
          </div>
        </div>
        <div>
          <div className="mb-[5.58vw]">
            <span className="text-[4.18vw] text-[#222F3B] font-inter font-bold">
              10,000,000
            </span>
            <p className="text-[3.02vw] text-[#829CB2] font-inter">
              Total SUI staked
            </p>
          </div>
          <div>
            <span className="text-[4.18vw] text-[#222F3B] font-inter font-bold">
              450
            </span>
            <p className="text-[3.02vw] text-[#829CB2] font-inter">
              Current epoch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStats;
