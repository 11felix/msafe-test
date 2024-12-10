import React, { useState } from "react";
import { getPriceToTick, getTickToPrice } from "@alphafi/alphafi-sdk";
import { Vault } from "../Admin";
import { PoolName } from "sui-alpha-sdk";

interface Props {
  selectedVault: Vault | null;
}

function PriceToTick(props: Props) {
  const { selectedVault } = props;

  const [price, setPrice] = useState<string>("");
  const [tick, setTick] = useState<string>("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleTickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTick(e.target.value);
  };

  const calculateTickFromPrice = async () => {
    if (price && selectedVault?.name) {
      try {
        const calculatedTick = await getPriceToTick(
          selectedVault.name as PoolName,
          price,
        );
        setTick(calculatedTick);
      } catch (error) {
        console.error("Error calculating tick:", error);
      }
    } else {
      console.warn("Please enter a valid price and select a vault.");
    }
  };

  const calculatePriceFromTick = async () => {
    if (tick && selectedVault?.name) {
      try {
        const calculatedPrice = await getTickToPrice(
          selectedVault.name as PoolName,
          tick,
        );
        setPrice(calculatedPrice);
      } catch (error) {
        console.error("Error calculating price:", error);
      }
    } else {
      console.warn("Please enter a valid tick and select a vault.");
    }
  };

  return (
    <div className="w-[33.489vw] bg-white h-[16.822vw] rounded-[2.08vw] p-[2.08vw]">
      <div className="font-poppinsbold text-[1.56vw] mb-[1.52vw] text-[#3D5060]">
        Price To Tick
      </div>
      <div className="flex gap-[1.927vw]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
              Enter Price
            </label>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              className="w-[13.697vw] bg-[#F4F6FA] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
            />
          </div>
          <button
            onClick={calculateTickFromPrice}
            className="w-[13.697vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.562vw] text-white font-poppinsbold"
          >
            Get Tick
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
              Enter Tick
            </label>
            <input
              type="number"
              value={tick}
              onChange={handleTickChange}
              className="w-[13.697vw] bg-[#F4F6FA] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 text-[#222F3B]"
            />
          </div>
          <button
            onClick={calculatePriceFromTick}
            className="w-[13.697vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.562vw] text-white font-poppinsbold"
          >
            Get Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceToTick;
