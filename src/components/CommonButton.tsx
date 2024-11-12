import React, { useEffect, useState } from "react";

interface CommonButtonProps {
  text: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({ text }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    setWalletConnected(true);
  }, []);

  return (
    <>
      {!walletConnected ? (
        <button
          // onClick={onConnectWallet}
          className="flex items-center text-center bg-black py-[1vw] rounded-[1.19vw] text-white text-[1.1vw] font-poppins font-medium"
        >
          {!walletConnected && (
            <img
              alt="Wallet Icon"
              className="h-[0.917vw] w-[1.12vw] mr-2 text-white"
            />
          )}
          {text}
        </button>
      ) : (
        <button
          // onClick={onConnectWallet}
          className="text-center bg-black py-[1vw] rounded-[1.19vw] text-white text-[1.1vw] font-poppins font-medium"
        >
          {text}
        </button>
      )}
    </>
  );
};

export default CommonButton;
