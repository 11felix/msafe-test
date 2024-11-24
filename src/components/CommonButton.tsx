import React, { useEffect, useState } from "react";
import walletIcon from "../assets/icons/whiteWallet.svg";

interface CommonButtonProps {
  text: string;
  isWalletConnected: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  isWalletConnected,
}) => {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    setWalletConnected(isWalletConnected);
  }, [walletConnected]);

  return (
    <>
      {!walletConnected ? (
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
          // onClick={onConnectWallet}
          className="text-center bg-black py-[4.18vw] md:py-[1vw] rounded-[3.48vw] md:rounded-[1.19vw] text-white text-[3.95vw] md:text-[1.1vw] font-poppins font-medium"
        >
          {text}
        </button>
      )}
    </>
  );
};

export default CommonButton;
