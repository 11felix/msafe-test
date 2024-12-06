import React, { useEffect } from "react";
// import {useCurrentAccount} from "@mysten/dapp-kit";
import { getAlphaPrice } from "sui-alpha-sdk";
import PriceToTick from "./components/PriceToTick";
import MergeCoins from "./components/MergeCoins";
import Rebalance from "./components/Rebalance";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";

function Admin() {
  // const currentAccount = useCurrentAccount();
  const a = getAllDoubleAssetVaults();
  console.log("a", a);
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

  return (
    <>
      <div className="flex justify-between bg-[#F4F6FA] h-screen px-[14.58vw] py-4 mx-auto">
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
