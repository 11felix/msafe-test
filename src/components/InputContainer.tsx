import React, { useState } from "react";
import GreyWallet from "../assets/icons/greyWallet.svg";

interface InputContainerProps {
  title: string;
  balance: number;
  tokenName: string;
  tokenIcon: string;
  isMaxBtn: boolean;
  setInputVal?: any;
  setInputValForDisplay?: any
  inputVal?: string;
  inputValForDisplay?: string;
}

const InputContainer: React.FC<InputContainerProps> = ({
  title,
  balance,
  tokenName,
  tokenIcon,
  isMaxBtn,
  setInputVal,
  setInputValForDisplay,
  inputVal,
  inputValForDisplay
}) => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const [usdValue, setUsdValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : "";
    setInputValue(value);
    setInputVal(value)
    setInputValForDisplay(value)
    setUsdValue(value ? value * 1.89 : 0);
  };

  const handleMaxClick = () => {
    setInputValue(balance);
    setUsdValue(balance * 1.89);
    setInputVal(balance)
    setInputValForDisplay(balance)
  };

  return (
    <div className="pt-[3.72vw] px-[4.65vw] md:pt-[1.14vw] pb-[2.9vw] md:pb-[0.83vw] md:px-[1.45vw] border border-[0.23vw] md:border-[0.05vw] border-[#D3E6F5] rounded-[5.81vw] md:rounded-[1.3vw] w-[100%] h-fit">
      <div className="text-[3.25vw] md:text-[1.04vw] font-inter font-medium text-black">
        {title}
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="flex justify-between items-center w-[100%]">
          <div>
            <input
              type="number"
              value={inputValForDisplay}
              onChange={handleInputChange}
              placeholder="0"
              className="no-spinner w-[43.1vw] md:w-[11.3vw] text-[5.81vw] md:text-[1.77vw] font-inter font-medium text-black outline-none"
            />
          </div>
          <div className="flex items-center">
            {isMaxBtn && (
              <button
                onClick={handleMaxClick}
                className="border-[0.23vw] md:border-[0.104vw] border-[#000000] h-fit p-[0.93vw] md:pt-[0.3vw] md:pb-[0.2vw] md:px-[0.3vw] rounded-[1.39vw] md:rounded-[0.41vw] hover:bg-black hover:text-white text-[2.32vw] md:text-[0.67vw] font-poppins font-semibold"
              >
                MAX
              </button>
            )}
            <div className="flex items-center ml-[1.57vw] md:ml-[0.6vw]">
              <img
                src={tokenIcon}
                alt={`${tokenName} icon`}
                className="w-[5.59vw] h-[5.59vw] md:w-[1.66vw] md:h-[1.66vw] rounded-full"
              />
              <span className="text-black text-[3.48vw] md:text-[1.14vw] font-inter font-bold ml-[0.97vw] md:ml-[0.3vw]">
                {tokenName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>
            {inputValue && (
              <div className="text-[#829CB2] font-inter font-medium text-[2.79vw] md:text-[0.88vw]">
                ${usdValue.toFixed(2)}
              </div>
            )}
          </div>
          <div className="flex items-center text-[#829CB2] font-inter font-medium text-[2.79vw] md:text-[0.88vw]">
            <img
              src={GreyWallet}
              alt="wallet"
              className="h-[3.25vw] w-[3.63vw] md:h-[0.83vw] md:w-[0.93vw] mr-[1.39vw] md:mr-[0.31vw]"
            />
            {balance.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
