import React from "react";
import InputContainer from "../../../components/InputContainer";
import stSuiLogo from "../../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../../assets/icons/suiLogo.svg";
import CommonButton from "../../../components/CommonButton";
import Stats from "./Stats";

const Stake: React.FC = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const onConnectWallet = () => {
  //     console.log("wallet connect");
  //   };

  return (
    <div className="flex relative pt-[1.66vw]">
      <div className="w-[26.30vw] h-fit p-[2.08vw] bg-white rounded-[1.45vw] flex flex-col mx-auto">
        <div className="mb-[0.93vw]">
          <InputContainer
            title="Stake SUI"
            balance={10000.5}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={true}
          />
        </div>
        <div className="mb-[0.93vw]">
          <InputContainer
            title="Receive"
            balance={10000.5}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={false}
          />
        </div>
        <CommonButton text="Stake 2 SUI" isWalletConnected={true} />
        <div className="mt-[1.97vw]">
          <div className="flex justify-between items-center">
            <p className="text-black text-[1.04vw] font-inter">Exchange rate</p>
            <p className="text-black text-[1.04vw] font-inter font-bold">
              1SUI=1stSUI
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black text-[1.04vw] font-inter">Staking fee</p>
            <p className="text-black text-[1.04vw] font-inter font-bold">
              0.00%
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black text-[1.04vw] font-inter">APY</p>
            <p className="text-black text-[1.04vw] font-inter font-bold">
              4.03%
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-[-7vw] bottom-0">
        <Stats />
      </div>
    </div>
  );
};

export default Stake;
