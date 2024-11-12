import React, { useEffect, useState } from "react";

const CommonButton: React.FC = () => {
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
          Stake 2 SUI
        </button>
      ) : (
        <button
          // onClick={onConnectWallet}
          className="text-center bg-black py-[1vw] rounded-[1.19vw] text-white text-[1.1vw] font-poppins font-medium"
        >
          Stake 2 SUI
        </button>
      )}
    </>
  );
};

export default CommonButton;
