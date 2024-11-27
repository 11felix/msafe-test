import React from "react";
import InputContainer from "../../../components/InputContainer";
import stSuiLogo from "../../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../../assets/icons/suiLogo.svg";
import CommonButton from "../../../components/CommonButton";

const Unstake = (props: any) => {
  const {redeemSuiTokens, unstakeStSuiValue, setUnstakeStSuiValue, unstakeStSuiValueForDisplay, setUnstakeStSuiValueForDisplay,isWalletConnected, unstakeLoader, userTokenBalancesArray, stSuiExchangeRateValue} = props;
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
            balance={userTokenBalancesArray && userTokenBalancesArray.stsui ? userTokenBalancesArray.stsui.balance : 0}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={true}
            setInputVal={setUnstakeStSuiValue}
            setInputValForDisplay={setUnstakeStSuiValueForDisplay}
            inputVal={unstakeStSuiValue}
            inputValForDisplay={unstakeStSuiValueForDisplay}
            userTokenBalancesArray={userTokenBalancesArray}
            stSuiExchangeRateValue={stSuiExchangeRateValue}
          />
        </div>
        <div className="mb-[3.02vw] md:mb-[0.93vw]">
          <InputContainer
            title="Receive"
            balance={userTokenBalancesArray && userTokenBalancesArray.sui ? userTokenBalancesArray.sui.balance : 0}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={false}
            inputVal={unstakeStSuiValue && stSuiExchangeRateValue ? (unstakeStSuiValue * parseFloat(stSuiExchangeRateValue)).toString() : "0"}
            inputValForDisplay={unstakeStSuiValue && unstakeStSuiValue > 0 && stSuiExchangeRateValue ? ((unstakeStSuiValue * parseFloat(stSuiExchangeRateValue)).toFixed(4)).toString() : "0"}
            userTokenBalancesArray={userTokenBalancesArray}
            stSuiExchangeRateValue={stSuiExchangeRateValue}
          />
        </div>
        <CommonButton 
          text={isWalletConnected && unstakeStSuiValue && parseFloat(unstakeStSuiValue) > 0 ? "Unstake "+ parseFloat(unstakeStSuiValue) +" stSUI" : isWalletConnected && unstakeStSuiValue && parseFloat(unstakeStSuiValue) === 0 ? "Unstake stSUI" : "Connect Wallet"}  
          isWalletConnected={isWalletConnected} 
          disabled={!isWalletConnected || (unstakeStSuiValue && parseFloat(unstakeStSuiValue) === 0)}
          callFunction={redeemSuiTokens}
          isLoading={unstakeLoader}
        />
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
    </div>
  );
};

export default Unstake;
