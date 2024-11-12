import React, { useState } from "react";
import rightIcon from "../../../assets/icons/right_icon.png"

interface Props {
    question: string;
    answer: string;
    showAnswer: boolean;
}

const FAQView  = (props: Props) => {
    const {question, answer, showAnswer} = props
    const [showExpanded, setShowExpanded] = useState(false);
    
    return (
        <div className="flex justify-center mb-[0.9375vw]" onClick={() => {
            setShowExpanded(!showExpanded);
          }}> 
            <div className={`flex flex-col w-fit border-solid border-[0.052vw] border-[#E0F1FF] rounded-[1.927vw] pt-[2.265vw] ${showExpanded ? "pb-[0.6vw]": "pb-[2.265vw]"} pl-[1.975vw] pr-[1.975vw] bg-[#F4F6FA3C] bg-repeat w-[32.135vw]`}>
                <div className="flex flex-row">
                    <div className="flex justify-left text-[1.302vw] w-[32.135vw]">{question}</div>
                    <div className="flex justify-center items-center">
                        <img src={rightIcon} className="rotate-90 w-[1.417vw] h-[0.708vw]" />
                    </div>
                </div>
                
                {showExpanded &&
                    <div className="mt-[1.391vw] text-[1.04vw] mb-[1.04vw]">
                        {answer}<br />
                    </div>
                }
            </div>
        </div>
    );
};

export default FAQView;