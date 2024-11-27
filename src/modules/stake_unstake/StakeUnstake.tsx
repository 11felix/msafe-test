import React, { useEffect, useState } from "react";
import Unstake from "./components/Unstake";
import Stake from "./components/Stake";
import { mint, getSuiClient, redeem, stSuiExchangeRate } from "stsui-sdk";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { fetchUserBalanceArray } from "../../service/functions";
// import { getSuiClient} from "sui-alpha-sdk";

const StakeUnstake = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");
  const [stakeSuiValue, setStakeSuiValue] = useState("0");
  const [stakeSuiValueForDisplay, setStakeSuiValueForDisplay] = useState("0");
  const [unstakeStSuiValue, setUnstakeStSuiValue] = useState("0");
  const [unstakeStSuiValueForDisplay, setUnstakeStSuiValueForDisplay] = useState("0");
  const [userTokenBalancesArray, setUserTokenBalancesArray] = useState([]);
  const [stakeLoader, setStakeLoader] = useState(false)
  const [unstakeLoader, setUnstakeLoader] = useState(false)
  const [stSuiExchangeRateValue, setStSuiExchangeRateValue] = useState("1");
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
      fetchUserTokenBalances()
    }
  }, [currentAccount])

  useEffect(() => {
    fetchStSuiExchangeRate()
  }, [])
  
  const mintSuiTokens = async () => {
    try {
      if(currentAccount?.address){
        setStakeLoader(true)
        const txb = await mint((parseFloat(stakeSuiValue) * 1e9).toString(), {address: currentAccount.address});
        if (txb) {
          signAndExecuteTransaction(
            {
              transaction: txb as unknown as Transaction,
            },
            {
              onSuccess: async (result: any) => {
                
                const txbCheck = await suiClient.waitForTransaction({
                  digest: result.digest,
                  options: {
                    showEffects: true,
                  },
                });
                
                if (
                  txbCheck.effects &&
                  txbCheck.effects.status &&
                  txbCheck.effects.status.status
                ) {
                  if (txbCheck.effects.status.status === "success") {
                    setStakeLoader(false)
                    fetchStSuiExchangeRate()
                    fetchUserTokenBalances()
                   
                  } else {
                    setStakeLoader(false)
                    
                  }
                }
              },
  
              onError: async (result: any) => {
                console.log("trx reject", result);
                setStakeLoader(false)
                
              },
              onSettled(data, error, variables, context) {
                console.log("trx settled", data, error, variables, context);
                
                setStakeLoader(false)
              },
            }
          );
        }
      }
      
    } catch(error){
      console.log("error", error)
      setStakeLoader(false)
    }
  }

  const redeemSuiTokens = async () => {
    try {
      if(currentAccount?.address){
        setStakeLoader(true)
        const txb = await redeem((parseFloat(unstakeStSuiValue) * 1e9).toString(), {address: currentAccount?.address});
        if (txb) {
          signAndExecuteTransaction(
            {
              transaction: txb as unknown as Transaction,
            },
            {
              onSuccess: async (result: any) => {
               
                const txbCheck = await suiClient.waitForTransaction({
                  digest: result.digest,
                  options: {
                    showEffects: true,
                  },
                });
                console.log("trx status check", txbCheck);
                
                if (
                  txbCheck.effects &&
                  txbCheck.effects.status &&
                  txbCheck.effects.status.status
                ) {
                  if (txbCheck.effects.status.status === "success") {
                    setStakeLoader(false)
                    fetchStSuiExchangeRate()
                    fetchUserTokenBalances()
                    
                  } else {
                    setStakeLoader(false)
                    fetchStSuiExchangeRate()
                    fetchUserTokenBalances()
                  }
                }
              },
  
              onError: async (result: any) => {
                setStakeLoader(false)
                console.log("trx reject", result);
                
              },
              onSettled(data, error, variables, context) {
                setStakeLoader(false)
                console.log("trx settled", data, error, variables, context);
                
              },
            }
          );
        }
      }
      
    } catch(error){
      setStakeLoader(false)
      console.log("error", error)
    }
  }
  
  const fetchUserTokenBalances = async() => {
    try {
      const user_token_balances = await fetchUserBalanceArray(currentAccount?.address)
      setUserTokenBalancesArray(user_token_balances)
    } catch(error){
      console.log("error", error)
    }
  } 

  const fetchStSuiExchangeRate = async () => {
    try {
      const stSuiExchangeRateVal = await stSuiExchangeRate();
      setStSuiExchangeRateValue(stSuiExchangeRateVal);
    } catch(error){
      console.log("err",error);
    }
  }

  return (
    <div className="overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-[#E9EFF4] to-[#FFFFFF] mb-[2vw]">
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
              userTokenBalancesArray={userTokenBalancesArray}
              stSuiExchangeRateValue={stSuiExchangeRateValue}
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
              userTokenBalancesArray={userTokenBalancesArray}
              stSuiExchangeRateValue={stSuiExchangeRateValue}
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
      
    </div>
  );
};

export default StakeUnstake;
