import React from "react";
import { depositSingleAssetTxb } from "@alphafi/alphafi-sdk";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";
import AlphaConnectWallet from "./connect_wallet";

const FirstExpandedAlphaSuiVault = () => {
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const depositTokens = async () => {
    try {
      if (currentAccount) {
        const tx = await depositSingleAssetTxb(
          "NAVI-SUI",
          currentAccount.address,
          "100000000"
        );

        signAndExecuteTransaction(
          {
            transaction: tx,
          },
          {
            onSuccess: async (result: any) => {
              console.log("success!", result);
            },
            onError(error: any, variables: any, context: any) {
              console.log("error", error, variables, context);
            },
          }
        );
      }
    } catch (error) {
      console.log(`error in deposit tokens of NAVI-SUI`, error);
    }
  };

  return (
    <>
      <AlphaConnectWallet />
      <button
        onClick={() => {
          depositTokens();
        }}
      >
        {" "}
        Deposit
      </button>
    </>
  );
};

export default FirstExpandedAlphaSuiVault;
