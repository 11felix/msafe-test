import React, { useEffect } from "react";
import { getAlphaPrice } from "sui-alpha-sdk";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";
import PriceToTick from "./components/PriceToTick";
import MergeCoins from "./components/MergeCoins";
import Rebalance from "./components/Rebalance";

function Admin() {
  // const currentAccount = useCurrentAccount();
  const a = getAllDoubleAssetVaults();
  console.log("a", a);
  useEffect(() => {
    const test = async () => {
      const data = await getAlphaPrice(true);
      console.log("data2", data);
    };
    test();
  }, []);

  return (
    <>
      <div className="bg-[#F4F6FA] h-screen px-8 py-4 mx-auto">
        <Rebalance />
        <PriceToTick />
        <MergeCoins />
      </div>
    </>
  );
}

export default Admin;
