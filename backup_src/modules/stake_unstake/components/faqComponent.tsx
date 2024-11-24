import React, { useState } from "react";
import down_icon from "../../../assets/icons/down_pointer.svg"

interface Props {
    question: string;
    answer: string;
}

const FAQView  = (props: Props) => {
    const {question, answer} = props
    const [showExpanded, setShowExpanded] = useState(false);
    
    return (
        <div className="flex justify-center mx-auto mb-[0.9375vw] w-[40.677vw]" onClick={() => {
            setShowExpanded(!showExpanded);
          }}> 
            <div className={`flex flex-col w-fit border-solid border-[0.052vw] border-[#E0F1FF] rounded-[1.927vw] pt-[2.265vw] ${showExpanded ? "pb-[0.6vw]": "pb-[2.265vw]"} pl-[1.975vw] pr-[1.975vw] bg-[#F4F6FA3C] bg-repeat w-[40.677vw]`}>
                <div className="flex flex-row">
                    <div className="flex justify-left text-[1.302vw] w-[40.677vw] font-poppinsregular">{question}</div>
                    <div className="flex justify-center items-center">
                        <img src={down_icon} className={`w-[1.417vw] h-[0.708vw] ${showExpanded ? "rotate-180": ""}`} alt="down-icon" />
                    </div>
                </div>
                
                {showExpanded &&
                    <div className="mt-[1.391vw] text-[1.04vw] mb-[1.04vw] w-[33.22vw] font-inter">
                        {answer}<br />
                    </div>
                }
            </div>
        </div>
    );
};

export default FAQView;