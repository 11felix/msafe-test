import React, { useEffect } from "react";
// import {useCurrentAccount} from "@mysten/dapp-kit";
import { getAlphaPrice } from "sui-alpha-sdk";
import PriceToTick from "./components/PriceToTick";
import MergeCoins from "./components/MergeCoins";
import Rebalance from "./components/Rebalance";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";

function Admin() {
  // const currentAccount = useCurrentAccount();
  // const doubleAssetVaults = getAllDoubleAssetVaults().then((data) => {
  //      console.log(data))};
  // console.log("doubleAssetVaults", doubleAssetVaults);
  useEffect(() => {
    // getAlphaPrice(true).then((data) => {
    //   console.log("data1", data);
    // });
    getAllDoubleAssetVaults().then((data) => {
      console.log(data);
    });
    const test = async () => {
      const data = await getAlphaPrice(true);
      console.log("data2", data);
    };
    test();
  }, []);

  return (
    <>
      <div className="flex justify-center bg-[#F4F6FA] h-screen gap-[2.44vw] py-4">
        <div>
          <Rebalance />
        </div>
        <div className="">
          <PriceToTick />
          <MergeCoins />
        </div>
      </div>
    </>
  );
}

export default Admin;
