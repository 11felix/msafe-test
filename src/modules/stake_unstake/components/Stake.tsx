import React from "react";
import InputContainer from "../../../components/InputContainer";
import stSuiLogo from "../../../assets/icons/stSuiLogo.svg";
import suiLogo from "../../../assets/icons/suiLogo.svg";
import CommonButton from "../../../components/CommonButton";

const Stake = (props: any) => {
  const {mintSuiTokens, stakeSuiValue, setStakeSuiValue, stakeSuiValueForDisplay ,setStakeSuiValueForDisplay, isWalletConnected, stakeLoader, userTokenBalancesArray, stSuiExchangeRateValue} = props;
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const onConnectWallet = () => {
  //     console.log("wallet connect");
  //   };

  // const { stakeSuiTokens} = props;

  return (
    <div className="flex flex-col md:flex-row md:relative mt-[5.58vw] md:mt-[1.66vw]">
      <div className="w-[91.62vw] md:w-[26.30vw] h-fit p-[6.97vw] md:p-[2.08vw] bg-white rounded-[6.51vw] md:rounded-[1.45vw] flex flex-col mx-auto shadow-custom">
        <div className="mb-[3.02vw] md:mb-[0.93vw]">
          <InputContainer
            title="Stake SUI"
            balance={userTokenBalancesArray && userTokenBalancesArray.sui ? userTokenBalancesArray.sui.balance : 0}
            tokenName="SUI"
            tokenIcon={suiLogo}
            isMaxBtn={true}
            setInputVal={setStakeSuiValue}
            setInputValForDisplay={setStakeSuiValueForDisplay}
            inputVal={stakeSuiValue}
            inputValForDisplay={stakeSuiValueForDisplay}
            userTokenBalancesArray={userTokenBalancesArray}
            stSuiExchangeRateValue={stSuiExchangeRateValue}
          />
        </div>
        <div className="mb-[3.02vw] md:mb-[0.93vw]">
          <InputContainer
            title="Receive"
            balance={userTokenBalancesArray && userTokenBalancesArray.stsui ? userTokenBalancesArray.stsui.balance : 0}
            tokenName="stSUI"
            tokenIcon={stSuiLogo}
            isMaxBtn={false}
            // setInputVal={setStakeSuiValue}
            // setInputValForDisplay={setStakeSuiValueForDisplay}
            inputVal={stakeSuiValue && stSuiExchangeRateValue ? (stakeSuiValue / parseFloat(stSuiExchangeRateValue)).toString() : "0"}
            inputValForDisplay={stakeSuiValue && stakeSuiValue > 0 && stSuiExchangeRateValue ? ((stakeSuiValue / parseFloat(stSuiExchangeRateValue)).toFixed(4)).toString() : "0"}
            userTokenBalancesArray={userTokenBalancesArray}
            stSuiExchangeRateValue={stSuiExchangeRateValue}
          />
        </div>
        <CommonButton
          text={isWalletConnected && stakeSuiValue && parseFloat(stakeSuiValue) > 0 ? "Stake "+ parseFloat(stakeSuiValue) +" SUI" : isWalletConnected && stakeSuiValue && parseFloat(stakeSuiValue) === 0 ? "Stake SUI" : "Connect Wallet"}  isWalletConnected={isWalletConnected} 
          disabled={!isWalletConnected || (stakeSuiValue && parseFloat(stakeSuiValue) === 0)}
          callFunction={mintSuiTokens}
          isLoading={stakeLoader}

        />
        <div className="mt-[6.51vw] md:mt-[1.97vw]">
          <div className="flex justify-between items-center mb-[1.5vw]">
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter">
              Exchange rate
            </p>
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter font-semibold">
              1SUI={stSuiExchangeRateValue ? parseFloat(stSuiExchangeRateValue).toFixed(4): 1}stSUI
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter">
              APY
            </p>
            <p className="text-black text-[3.25vw] md:text-[1.04vw] font-inter font-semibold">
              4.03%
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Stake;
