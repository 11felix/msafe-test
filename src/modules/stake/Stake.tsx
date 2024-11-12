import React from "react";
import InputContainer from "../../components/InputContainer";
import stSuiLogo from "../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../assets/icons/suiLogo.svg";
import CommonButton from "../../components/CommonButton";
import FAQ from "./components/faq";
import Opportunities from "./components/stSuiOpportunities";

const Stake: React.FC = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const onConnectWallet = () => {
  //     console.log("wallet connect");
  //   };

  return (
    <div className="bg-[#E9EFF4] pt-5 pb-10 w-full h-full">
      <div className="w-[26.30vw] h-fit p-[2.08vw] bg-white rounded-[1.45vw] flex flex-col mx-auto">
        <div className="mb-2">
          <InputContainer
            title="Stake SUI"
            balance={10000.5}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={true}
          />
        </div>
        <div className="mb-3">
          <InputContainer
            title="Receive"
            balance={10000.5}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={false}
          />
        </div>
        <CommonButton />
        <div className="mt-3">
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
      <Opportunities />
      <FAQ />
    </div>
  );
};

export default Stake;
