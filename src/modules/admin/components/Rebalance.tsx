import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { getCurrentCetusPoolPrice, getPositionRange } from "sui-alpha-sdk";
import {
  getCurrentTick,
  getPositionTicks,
  getPriceToTick,
  getTickToPrice,
} from "@alphafi/alphafi-sdk";

interface Vault {
  name: string;
  name1: string;
  name2: string;
}

const Rebalance = () => {
  const [selectedVault, setSelectedVault] = useState<any>(null);
  const [currentPrice, setCurrentPrice] = useState("");
  const [priceLower, setPriceLower] = useState("");
  const [priceUpper, setPriceUpper] = useState("");
  const [coinName1, setCoinName1] = useState("");
  const [coinName2, setCoinName2] = useState("");
  const [currentTick, setCurrentTick] = useState<number | null>(null);
  const [tickLower, setTickLower] = useState<number | null>(null);
  const [tickUpper, setTickUpper] = useState<number | null>(null);

  const handleVaultSelect = (vault: Vault) => {
    setSelectedVault(vault);
    console.log("Selected from parent Vault:", vault);
  };

  console.log(
    "SELECTED VAULT PARENT--->>>",
    selectedVault,
    typeof selectedVault
  );

  useEffect(() => {
    const fetchCetusPoolPrice = async () => {
      if (selectedVault !== null) {
        try {
          const cetusPoolPriceArray = await getCurrentCetusPoolPrice(false);
          const cetusPoolPrice = cetusPoolPriceArray.get(selectedVault.name);

          const positionRangeArray = await getPositionRange(false);
          const positionRange = positionRangeArray.get(selectedVault.name);

          const ticks: number[] = await getPositionTicks(selectedVault.name);
          if (ticks.length >= 2) {
            setTickLower(Math.min(...ticks));
            setTickUpper(Math.max(...ticks));
          }

          const currentTick = await getCurrentTick(selectedVault.name);
          setCurrentTick(currentTick);

          const t2p = getTickToPrice(selectedVault.name, "10980");
          const p2t = getPriceToTick(selectedVault.name, "3");

          console.log("TICKS--..", ticks);
          console.log("t2p--..", t2p);
          console.log("p2t--..", p2t);
          console.log("currentTick--..", currentTick);
          console.log("cetusPoolPrice", cetusPoolPrice);
          console.log("position range", positionRange);

          if (
            positionRange !== undefined &&
            cetusPoolPrice !== undefined &&
            ((selectedVault.name1.toUpperCase() === "WUSDC" &&
              selectedVault.name2.toUpperCase() === "SUI") ||
              (selectedVault.name1.toUpperCase() === "WUSDC" &&
                selectedVault.name2.toUpperCase() === "WBTC") ||
              (selectedVault.name1.toUpperCase() === "USDC" &&
                selectedVault.name2.toUpperCase() === "SUI") ||
              (selectedVault.name1.toUpperCase() === "USDC" &&
                selectedVault.name2.toUpperCase() === "USDT") ||
              (selectedVault.name1.toUpperCase() === "USDC" &&
                selectedVault.name2.toUpperCase() === "WUSDC") ||
              (selectedVault.name1.toUpperCase() === "BUCK" &&
                selectedVault.name2.toUpperCase() === "SUI") ||
              (selectedVault.name1.toUpperCase() === "USDC" &&
                selectedVault.name2.toUpperCase() === "ETH") ||
              (selectedVault.name1.toUpperCase() === "FUD" &&
                selectedVault.name2.toUpperCase() === "SUI"))
          ) {
            const minPrice = (1 / parseFloat(positionRange.upperPrice)).toFixed(
              5
            );
            setPriceLower(minPrice);
            const maxPrice = (1 / parseFloat(positionRange.lowerPrice)).toFixed(
              5
            );
            setPriceUpper(maxPrice);
            const currentPrice = (1 / parseFloat(cetusPoolPrice)).toFixed(5);
            setCurrentPrice(currentPrice);
          } else if (
            positionRange !== undefined &&
            cetusPoolPrice !== undefined
          ) {
            const minPrice = parseFloat(positionRange.lowerPrice).toFixed(5);
            setPriceLower(minPrice);
            const maxPrice = parseFloat(positionRange.upperPrice).toFixed(5);
            setPriceUpper(maxPrice);
            const currentPrice = parseFloat(cetusPoolPrice).toFixed(5);
            setCurrentPrice(currentPrice);
          }
        } catch (error) {
          console.error("Error fetching Cetus pool price:", error);
        }
        const coinName1 =
          (selectedVault.name1.toUpperCase() === "WUSDC" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "WUSDC" &&
            selectedVault.name2.toUpperCase() === "WBTC") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "USDT") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "WUSDC") ||
          (selectedVault.name1.toUpperCase() === "BUCK" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "ETH")
            ? selectedVault.name2
            : selectedVault.name1;
        setCoinName1(coinName1);
        const coinName2 =
          (selectedVault.name1.toUpperCase() === "WUSDC" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "WUSDC" &&
            selectedVault.name2.toUpperCase() === "WBTC") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "USDT") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "WUSDC") ||
          (selectedVault.name1.toUpperCase() === "BUCK" &&
            selectedVault.name2.toUpperCase() === "SUI") ||
          (selectedVault.name1.toUpperCase() === "USDC" &&
            selectedVault.name2.toUpperCase() === "ETH")
            ? selectedVault.name1
            : selectedVault.name2;
        setCoinName2(coinName2);
      }
    };
    fetchCetusPoolPrice();
  }, [selectedVault]);
  console.log("CURRENT PRICE--->>", currentPrice);

  return (
    <>
      <div className="flex flex-col w-[33.48vw] h-[40.88vw] bg-white rounded-[2.08vw] p-[2.08vw]">
        <div className="font-poppinsbold text-[1.56vw] mb-[1.51vw] text-[#3D5060]">
          Rebalance
        </div>
        <div className="flex flex-col mb-[1.8vw]">
          <p className="text-[0.88vw] font-noto font-bold text-[#222F3B] mb-[0.52vw]">
            Select Pool
          </p>
          <Dropdown onSelect={handleVaultSelect} />
        </div>
        <div className="flex justify-between mb-[1.56vw]">
          <div className="flex flex-col">
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Price:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                {currentPrice !== "" ? (
                  <>
                    &nbsp;{currentPrice} {coinName2} PER {coinName1}
                  </>
                ) : (
                  <>&nbsp;-</>
                )}
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Lower:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                {priceLower !== "" ? <>&nbsp;{priceLower}</> : <>&nbsp;-</>}
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Upper:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                {priceUpper !== "" ? <>&nbsp;{priceUpper}</> : <>&nbsp;-</>}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Tick:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                &nbsp;{currentTick ? currentTick : "-"}
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Lower:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                &nbsp;{tickLower ? tickLower : "-"}
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Upper:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                &nbsp;{tickUpper ? tickUpper : "-"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#F4F6FA] h-[20.20vw] rounded-[1.30vw] px-[2.08vw] py-[1.56vw]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
                New Tick Lower
              </label>
              <input
                type="number"
                className="w-[10.05vw] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
                New Tick Upper
              </label>
              <input
                type="number"
                className="w-[10.05vw] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 text-[#222F3B]"
              />
            </div>
          </div>
          <button className="w-full h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.5vw] text-white font-poppinsbold mb-[1.04vw]">
            Rebalance
          </button>
          <div className="flex flex-col">
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Ratio:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                100% USDC
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Ratio:{" "}
              </p>
              <p className="text-[0.98vw] text-[#2D9EFF] font-noto font-medium">
                35% USDC and 65% ALPHA
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Price Lower:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                0.9998 USDC per ALPHA
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Price Upper:{" "}
              </p>
              <p className="text-[0.98vw] text-[#2D9EFF] font-noto font-medium">
                1.0000 USDC per Alpha
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rebalance;
