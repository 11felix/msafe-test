import React, { useState } from "react";
import FAQView from "./faqComponent";
import SingleOpportunities from "./singleOpportunity";
import sui_icon from "../../../assets/icons/suiLogo.svg";
import alpha_icon from "../../../assets/icons/alpha_logo.png";

const Opportunities: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[2.174vw]">
        <SingleOpportunities
          icon1={alpha_icon}
          icon2={sui_icon}
          name={"ALPHA-stSUI"}
          apy={"50.00%"}
          tvl={"$10M"}
        />
        <SingleOpportunities
          icon1={alpha_icon}
          name={"ALPHA-stSUI"}
          apy={"50.00%"}
          tvl={"$10M"}
        />
      </div>
    </div>
  );
};

export default Opportunities;
