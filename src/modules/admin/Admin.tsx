import React, { useEffect } from "react";
import { getAlphaPrice } from "sui-alpha-sdk";
import PriceToTick from "./components/PriceToTick";
import MergeCoins from "./components/MergeCoins";
import Rebalance from "./components/Rebalance";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";
import SetWeight from "./components/SetWeight";

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
      <div className="bg-[#F4F6FA] px-[14.58vw] pb-20">
        <div className="flex justify-center gap-[2.44vw] py-4">
          <div>
            <Rebalance />
          </div>
          <div className="">
            <PriceToTick />
            <MergeCoins />
          </div>
        </div>
        <div>
          <SetWeight />
        </div>
      </div>
    </>
  );
}

export default Admin;
