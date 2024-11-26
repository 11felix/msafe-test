import React, { useEffect, useState } from "react";
import walletIcon from "../assets/icons/whiteWallet.svg";
import Spinner from "./Spinner";

interface CommonButtonProps {
  text: string;
  isWalletConnected: boolean;
  disabled: boolean;
  callFunction?: any;
  isLoading?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  isWalletConnected,
  disabled,
  callFunction,
  isLoading
}) => {
  const [walletConnected, setWalletConnected] = useState(false);
  console.log("sui stake function", disabled, callFunction)
  useEffect(() => {
    setWalletConnected(isWalletConnected);
  }, [walletConnected]);


  return (
    <>
      {!isWalletConnected ? (
        <button
          
          // onClick={onConnectWallet}
          className="flex justify-center items-center text-center bg-black py-[4.18vw] md:py-[1vw] rounded-[3.48vw] md:rounded-[1.19vw] text-white text-[3.95vw] md:text-[1.1vw] font-poppins font-medium"
        >
          <img
            src={walletIcon}
            alt="Wallet Icon"
            className="w-[4.89vw] h-[4vw] md:h-[1.19vw] md:w-[1.45vw] mr-[3.79vw] md:mr-[1.19vw]"
          />
          {text}
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={callFunction}
          className="text-center bg-black py-[4.18vw] md:py-[1vw] rounded-[3.48vw] md:rounded-[1.19vw] text-white text-[3.95vw] md:text-[1.1vw] font-poppins font-medium justify-center flex"
        >
          {isLoading ? <Spinner /> : text}
        </button>
      )}
    </>
  );
};

export default CommonButton;
