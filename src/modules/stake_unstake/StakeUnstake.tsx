import React, {useEffect} from 'react';
// import {useCurrentAccount} from "@mysten/dapp-kit";
import { getAlphaPrice } from "sui-alpha-sdk";

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
      }
        test();
  }, []);

  return (
    <>
      <div className="bg-gray-200 h-screen px-8 py-4 mx-auto">
        Admin
      </div>
    </>

  );
}

export default StakeUnstake;