import React from "react";
import InputContainer from "../../../components/InputContainer";
import stSuiLogo from "../../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../../assets/icons/suiLogo.svg";
import CommonButton from "../../../components/CommonButton";
import Stats from "./Stats";
import MobileStats from "./MobileStats";

const Unstake: React.FC = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const onConnectWallet = () => {
  //     console.log("wallet connect");
  //   };

  return (
    <div className="flex flex-col md:flex-row md:relative mt-[5.58vw] md:mt-[1.66vw]">
      <div className="w-[91.62vw] md:w-[26.30vw] h-fit p-[6.97vw] md:p-[2.08vw] bg-white rounded-[6.51vw] md:rounded-[1.45vw] flex flex-col mx-auto shadow-custom">
        <div className="mb-[3.02vw] md:mb-[0.93vw]">
          <InputContainer
            title="Unstake SUI"
            balance={10000.5}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={true}
          />
        </div>
        <div className="mb-[3.02vw] md:mb-[0.93vw]">
          <InputContainer
            title="Receive"
            balance={10000.5}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={false}
          />
        </div>
        <CommonButton text="Connect Wallet" isWalletConnected={false} />
        <div className="mt-[6.51vw] md:mt-[1.97vw]">
          <div className="flex justify-between items-center mb-[1.5vw]">
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter">
              Exchange rate
            </p>
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter font-semibold">
              1SUI=1stSUI
            </p>
          </div>
          <div className="flex justify-between items-center mb-[1.5vw]">
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter">
              Unstaking fee
            </p>
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter font-semibold">
              0.00%
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-[-7vw] bottom-0">
        <Stats />
      </div>
      <div className="md:hidden ">
        <MobileStats />
      </div>
    </div>
  );
};

export default Unstake;
