import React, { useEffect, useState } from "react";
// import InputContainer from "../../components/InputContainer";
// import stSuiLogo from "../../assets/icons/stSuiLogo.svg";
// import suiLogo from "../../assets/icons/suiLogo.svg";
// import CommonButton from "../../components/CommonButton";
import FAQ from "./components/faq";
import Opportunities from "./components/stSuiOpportunities";
import Unstake from "./components/Unstake";
import Stake from "./components/Stake";
import downArrow from "../../assets/icons/downArrow.svg";
import { mint, getSuiClient, redeem } from "stsui-sdk";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
// import { getSuiClient} from "sui-alpha-sdk";

const StakeUnstake = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");
  const [stakeSuiValue, setStakeSuiValue] = useState("1");
  const [stakeSuiValueForDisplay, setStakeSuiValueForDisplay] = useState("0");
  const [unstakeStSuiValue, setUnstakeStSuiValue] = useState("0");
  const [unstakeStSuiValueForDisplay, setUnstakeStSuiValueForDisplay] = useState("0");
  const [stakeLoader, setStakeLoader] = useState(false)
  const [unstakeLoader, setUnstakeLoader] = useState(false)
  const tabs = ["Stake", "Unstake"];
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const suiClient = getSuiClient();
  const currentAccount = useCurrentAccount();

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    if(currentAccount?.address){
      // mintSuiTokens()
      // redeemSuiTokens()
    }
  }, [currentAccount])
  
  const mintSuiTokens = async () => {
    console.log("in stake func", currentAccount?.address, suiClient)
    try {
      setStakeLoader(true)
      const txb = await mint("1000000000", {address: "0xb26c4b36f48f96a5e615c821b30fdd564dd6a047cdad8c56e61a4c47f38c4173"});
      if (txb) {
        signAndExecuteTransaction(
          {
            transaction: txb as unknown as Transaction,
          },
          {
            onSuccess: async (result: any) => {
              // if (debug) {
              //   console.log("executed transaction block", result);
              // }
              // const transLink = `${transactionUrl}/${result.digest}`;
              // setTransactionLink(transLink);
              // const notification_obj = {
              //   link: "",
              //   message: `Broadcasting transaction ..`,
              //   type: "request",
              // };
              // setNotificationObj(notification_obj);
              const txbCheck = await suiClient.waitForTransaction({
                digest: result.digest,
                options: {
                  showEffects: true,
                },
              });
              console.log("trx status check", txbCheck);
              // if (debug) {
              //   console.log("trx status check", txbCheck);
              // }
              if (
                txbCheck.effects &&
                txbCheck.effects.status &&
                txbCheck.effects.status.status
              ) {
                if (txbCheck.effects.status.status === "success") {
                  setStakeLoader(false)
                  // const obj = {
                  //   link: `${transactionUrl}/${txbCheck.digest}`,
                  //   message: `You have successfully swapped ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol}.`,
                  //   type: "success",
                  // };
                  // console.log("transactionLink", transactionLink, obj);
                  // if (debug) {
                  //   console.log("transactionLink", transactionLink, obj);
                  // }
                } else {
                  setStakeLoader(false)
                  // const obj = {
                  //   link: `${transactionUrl}/${txbCheck.digest}`,
                  //   message: `You swap of ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol} has failed.`,
                  //   type: "failed",
                  // };
                  // setNotificationObj(obj);
                  // setLoadingState(false);
                }
              }
            },

            onError: async (result: any) => {
              console.log("trx reject", result);
              setStakeLoader(false)
              // if (debug) {
              //   console.log("trx reject", result);
              // }
              // const obj = {
              //   link: "",
              //   message: `You have rejected the transaction to swap ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol}`,
              //   type: "rejected",
              // };
              // setLoadingState(false);
              // setNotificationObj(obj);
              // setTokenBalanceLoadingState(false);
            },
            onSettled(data, error, variables, context) {
              console.log("trx settled", data, error, variables, context);
              // if (debug) {
              //   console.log("trx settled", data, error, variables, context);
              // }
              setStakeLoader(false)
            },
          }
        );
      }
    } catch(error){
      console.log("error", error)
      setStakeLoader(false)
    }
  }

  const redeemSuiTokens = async () => {
    console.log("in stake func", currentAccount?.address, suiClient)
    try {
      const txb = await redeem("1000000000", {address: "0xb26c4b36f48f96a5e615c821b30fdd564dd6a047cdad8c56e61a4c47f38c4173"});
      if (txb) {
        signAndExecuteTransaction(
          {
            transaction: txb as unknown as Transaction,
          },
          {
            onSuccess: async (result: any) => {
              // if (debug) {
              //   console.log("executed transaction block", result);
              // }
              // const transLink = `${transactionUrl}/${result.digest}`;
              // setTransactionLink(transLink);
              // const notification_obj = {
              //   link: "",
              //   message: `Broadcasting transaction ..`,
              //   type: "request",
              // };
              // setNotificationObj(notification_obj);
              const txbCheck = await suiClient.waitForTransaction({
                digest: result.digest,
                options: {
                  showEffects: true,
                },
              });
              console.log("trx status check", txbCheck);
              // if (debug) {
              //   console.log("trx status check", txbCheck);
              // }
              if (
                txbCheck.effects &&
                txbCheck.effects.status &&
                txbCheck.effects.status.status
              ) {
                if (txbCheck.effects.status.status === "success") {
                  // const obj = {
                  //   link: `${transactionUrl}/${txbCheck.digest}`,
                  //   message: `You have successfully swapped ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol}.`,
                  //   type: "success",
                  // };
                  // console.log("transactionLink", transactionLink, obj);
                  // if (debug) {
                  //   console.log("transactionLink", transactionLink, obj);
                  // }
                } else {
                  // const obj = {
                  //   link: `${transactionUrl}/${txbCheck.digest}`,
                  //   message: `You swap of ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol} has failed.`,
                  //   type: "failed",
                  // };
                  // setNotificationObj(obj);
                  // setLoadingState(false);
                }
              }
            },

            onError: async (result: any) => {
              console.log("trx reject", result);
              // if (debug) {
              //   console.log("trx reject", result);
              // }
              // const obj = {
              //   link: "",
              //   message: `You have rejected the transaction to swap ${sendTokenValueForDisplay} ${sentToken.symbol} to ${receiveTokenValueForDisplay} ${receiveToken.symbol}`,
              //   type: "rejected",
              // };
              // setLoadingState(false);
              // setNotificationObj(obj);
              // setTokenBalanceLoadingState(false);
            },
            onSettled(data, error, variables, context) {
              console.log("trx settled", data, error, variables, context);
              // if (debug) {
              //   console.log("trx settled", data, error, variables, context);
              // }
            },
          }
        );
      }
    } catch(error){
      console.log("error", error)
    }
  }
  

  return (
    <div className="overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-[#E9EFF4] to-[#FFFFFF]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-[12.32vw] md:space-x-[5.1vw] justify-center pt-[13vw] md:pt-[2.91vw]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleSelectTab(tab)}
                className={`pb-[0.15vw] md:pb-[0.15vw] text-black text-[3.48vw] md:text-[1.09vw] font-poppins font-medium ${
                  selectedTab === tab
                    ? "border-b-[0.69vw] md:border-b-[0.15vw] border-black"
                    : "border-b-[0.69vw] md:border-b-[0.15vw] border-[#E9EFF4] border-hidden opacity-45"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="pb-[3.5vw]">
            {selectedTab === "Stake" ? 
            <Stake 
              mintSuiTokens={mintSuiTokens} 
              stakeSuiValue={stakeSuiValue}
              setStakeSuiValue={setStakeSuiValue} 
              stakeSuiValueForDisplay={stakeSuiValueForDisplay} 
              setStakeSuiValueForDisplay={setStakeSuiValueForDisplay}
              isWalletConnected={currentAccount?.address ? true : false}
              setStakeLoader={setStakeLoader}
              stakeLoader={stakeLoader}
            /> 
            : 
            <Unstake 
              redeemSuiTokens={redeemSuiTokens} 
              unstakeStSuiValue={unstakeStSuiValue}
              setUnstakeStSuiValue={setUnstakeStSuiValue}
              unstakeStSuiValueForDisplay={unstakeStSuiValueForDisplay}
              setUnstakeStSuiValueForDisplay={setUnstakeStSuiValueForDisplay}
              isWalletConnected={currentAccount?.address ? true : false}
              unstakeLoader={unstakeLoader}
              setUnstakeLoader={setUnstakeLoader}
            />}
          </div>
        </div>

        <div className="hidden md:block absolute z-10 flex flex-col w-fit ml-[6.3vw] rounded-[1.14vw] bg-[#EFF4F7] hover:bg-[#E5EBEF] ml-[1vw] pt-[0.67vw] pb-[0.83vw] px-[1.09vw] cursor-default absolute">
          <p className="text-[0.83vw] text-black text-center font-inter">
            Powered by
          </p>
          <p className="text-[1.14vw] text-black text-center font-nebula">
            ALPHA FI
          </p>
        </div>
      </div>
      <div className="hidden md:block relative bg-[url('/src/assets/images/secondSectionBg.png')] bg-contain bg-center bg-no-repeat h-[29.73vw] mt-[-3.3vw]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-[1.823vw] mt-[12vw] font-poppinsmedium text-black">
            DeFi opportunities with your stSUI
          </h1>
        </div>
      </div>

      <div className="block md:hidden flex justify-center mt-[16vw] mb-[14vw]">
        <img
          src={downArrow}
          alt="downArrow"
          className="h-[5.58vw] w-[5.58vw]"
        />
      </div>

      <div className="block md:hidden relative bg-[url('/src/assets/images/circle1.png')] bg-contain bg-center bg-no-repeat w-full h-[53vw] mb-[5vw] mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-[5.58vw] mt-[0vw] font-poppinsmedium text-black text-center">
            DeFi opportunities with
            <br /> your stSUI
          </h1>
        </div>
      </div>
      <div className="hidden md:block relative">
        <div className="absolute bg-[url('/src/assets/images/circle1.png')] bg-contain bg-center bg-no-repeat w-[29.98vw] h-[29.98vw] mt-[3.5vw] right-[-11vw] clip-path-[inset(0_9vw_0_0)]"></div>
      </div>
      <Opportunities />
      <div className="block md:hidden flex flex-col w-fit mx-auto rounded-[3.95vw] bg-[#EFF4F7] hover:bg-[#E5EBEF] pt-[3.02vw] pb-[3.25vw] px-[5.81vw] mt-[20vw] mb-[30vw]">
        <p className="text-[3.02vw] text-black text-center font-inter">
          Powered by
        </p>
        <p className="text-[4.18vw] text-black text-center font-nebula">
          ALPHA FI
        </p>
      </div>
      <div className="hidden md:block absolute bg-[url('/src/assets/images/circle2.png')] bg-contain bg-center bg-no-repeat w-[15.92vw] h-[15.92vw] mt-[21vw] right-[8.95vw]"></div>
      <div className="hidden md:block absolute bg-[url('/src/assets/images/circle3.png')] bg-contain bg-center bg-no-repeat w-[29.98vw] h-[29.98vw] mt-[30vw] left-[-8vw]"></div>
      <div className="mb-[24vw] md:mb-0">
        <FAQ />
      </div>
    </div>
  );
};

export default StakeUnstake;
