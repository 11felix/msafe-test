import React, { useState } from "react";
import down_icon from "../../../assets/icons/down_pointer.svg";

interface Props {
  question: string;
  answer: string;
}

const FAQView = (props: Props) => {
  const { question, answer } = props;
  const [showExpanded, setShowExpanded] = useState(false);

  return (
    <div
      className="flex justify-center mx-auto mb-[3.72vw] md:mb-[0.9375vw] w-[75.46vw] md:w-[40.677vw]"
      onClick={() => {
        setShowExpanded(!showExpanded);
      }}
    >
      <div
        className={`flex flex-col w-fit border-solid border-[0.30vw] md:border-[0.052vw] border-[#E0F1FF] rounded-[3.48vw] md:rounded-[1.927vw] md:pt-[2.265vw] py-[5vw] ${
          showExpanded ? "md:pb-[0.6vw]" : "md:pb-[2.265vw]"
        } pl-[5.11vw] md:pl-[1.975vw] pr-[9.30vw] md:pr-[1.975vw] bg-[#F4F6FA3C] bg-repeat w-[40.677vw]`}
      >
        <div className="flex flex-row">
          <div className="flex justify-left text-[3.25vw] md:text-[1.302vw] w-[74.46vw] md:w-[40.677vw] font-poppinsregular">
            {question}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={down_icon}
              className={`w-[3.25vw] h-[1.62vw] md:w-[1.417vw] h-[0.708vw] ${
                showExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {showExpanded && (
          <div className="mt-[4vw] md:mt-[1.391vw] text-[3.25vw] md:text-[1.04vw] mb-[1.04vw] w-full md:w-[33.22vw] font-inter">
            {answer}
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQView;
