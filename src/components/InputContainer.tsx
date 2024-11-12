import React, { useState } from "react";
import GreyWallet from "../assets/icons/greyWallet.svg";

interface InputContainerProps {
  title: string;
  balance: number;
  tokenName: string;
  tokenIcon: string;
  isMaxBtn: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  title,
  balance,
  tokenName,
  tokenIcon,
  isMaxBtn,
}) => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const [usdValue, setUsdValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : "";
    setInputValue(value);
    setUsdValue(value ? value * 1.89 : 0);
  };

  const handleMaxClick = () => {
    setInputValue(balance);
    setUsdValue(balance * 1.89);
  };

  return (
    <div className="pt-[1.14vw] pb-[0.83vw] px-[1.45vw] border border-[#89A2B5] rounded-[1.3vw] w-full h-fit">
      <div className="text-[1.04vw] font-inter font-medium text-black">
        {title}
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="flex justify-between items-center w-full">
          <div>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="0"
              className="w-36 text-[1.77vw] font-inter font-medium text-black outline-none"
            />
          </div>
          <div className="flex">
            {isMaxBtn && (
              <button
                onClick={handleMaxClick}
                className="border-[0.104vw] border-[#000000] h-fit pt-[0.36vw] pb-[0.23vw] px-[0.36vw] rounded-[0.62vw] hover:bg-black hover:text-white text-[0.67vw] font-poppins font-semibold"
              >
                MAX
              </button>
            )}
            <div className="flex items-center ml-[0.6vw]">
              <img
                src={tokenIcon}
                alt={`${tokenName} icon`}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-black text-[1.14vw] font-inter font-bold ml-[0.3vw]">
                {tokenName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>
            {inputValue && (
              <div className="text-gray-500 text-sm">
                ${usdValue.toFixed(2)}
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <img
              src={GreyWallet}
              alt="wallet"
              className="h-[0.83vw] w-[0.93vw] mr-[0.31vw]"
            />
            {balance.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
