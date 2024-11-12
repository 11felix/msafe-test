import React from "react";
import InputContainer from "../../../components/InputContainer";
import stSuiLogo from "../../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../../assets/icons/suiLogo.svg";
import CommonButton from "../../../components/CommonButton";

const Unstake: React.FC = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const onConnectWallet = () => {
  //     console.log("wallet connect");
  //   };

  return (
    <div className="bg-[#E9EFF4] pt-5 pb-10">
      <div className="w-[26.30vw] h-fit p-[2.08vw] bg-white rounded-[1.45vw] flex flex-col mx-auto">
        <div className="mb-[0.93vw]">
          <InputContainer
            title="Unstake SUI"
            balance={10000.5}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={true}
          />
        </div>
        <div className="mb-[0.93vw]">
          <InputContainer
            title="Receive"
            balance={10000.5}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={false}
          />
        </div>
        <CommonButton text="Connect Wallet" isWalletConnected={false} />
        <div className="mt-[1.97vw]">
          <div className="flex justify-between items-center">
            <p className="text-black text-[1.04vw] font-inter">Exchange rate</p>
            <p className="text-black text-[1.04vw] font-inter font-bold">
              1SUI=1stSUI
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black text-[1.04vw] font-inter">Unstaking fee</p>
            <p className="text-black text-[1.04vw] font-inter font-bold">
              0.03%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unstake;
