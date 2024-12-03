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
      <div className="text-red-800">
        Admin
      </div>
    </>

  );
}

export default StakeUnstake;