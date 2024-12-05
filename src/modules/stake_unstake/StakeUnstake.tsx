import React, { useEffect } from "react";
// import {useCurrentAccount} from "@mysten/dapp-kit";
import { getAlphaPrice } from "sui-alpha-sdk";
import Rebalance from "./Rebalance";
// import { getAllDoubleAssetVaults } from "../../../../alphaFi New/alphafi-sdk/dist/cjs/getAllVaults";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";

function StakeUnstake() {
  // const currentAccount = useCurrentAccount();

  useEffect(() => {
    // getAlphaPrice(true).then((data) => {
    //   console.log("data1", data);
    // });
    // getLatestPrices(["SUI/USD"],true).then((data) => {
    //   console.log(data);
    // });
    const test = async () => {
      const data = await getAlphaPrice(true);
      console.log("data2", data);
    };
    test();
  }, []);

  const vaults = getAllDoubleAssetVaults();
  console.log("VAULTS-->>", vaults);

  return (
    <>
      <div className="bg-gray-200 h-screen px-8 py-4 mx-auto">
        <Rebalance />
      </div>
    </>
  );
}

export default StakeUnstake;
