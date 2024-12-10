import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import {
  getCurrentCetusPoolPrice,
  getPositionRange,
  PoolName,
} from "sui-alpha-sdk";
import {
  getCurrentTick,
  getPositionTicks,
  getTickToPrice,
} from "@alphafi/alphafi-sdk";
import Spinner from "../../../components/Spinner";
import { Vault } from "../Admin";

interface RebalanceProps {
  selectedVault: Vault | null;
  setSelectedVault: React.Dispatch<React.SetStateAction<Vault | null>>;
}

const Rebalance = (props: RebalanceProps) => {
  const { selectedVault, setSelectedVault } = props;
  const [currentPrice, setCurrentPrice] = useState("");
  const [priceLower, setPriceLower] = useState("");
  const [priceUpper, setPriceUpper] = useState("");
  const [coinName1, setCoinName1] = useState("");
  const [coinName2, setCoinName2] = useState("");
  const [currentTick, setCurrentTick] = useState<number | null>(null);
  const [tickLower, setTickLower] = useState<number | null>(null);
  const [tickUpper, setTickUpper] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lowerTick, setLowerTick] = useState<string>("");
  const [upperTick, setUpperTick] = useState<string>("");
  const [lowerTickToPrice, setLowerTickToPrice] = useState<string>("");
  const [upperTickToPrice, setUpperTickToPrice] = useState<string>("");

  const handleLowerTickChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setLowerTick(value);
    if (value && selectedVault?.name) {
      try {
        const calculatedPrice = await getTickToPrice(
          selectedVault.name as PoolName,
          value,
        );
        setLowerTickToPrice(calculatedPrice);
      } catch (error) {
        console.error("Error calculating lower price:", error);
      }
    } else {
      setLowerTickToPrice("");
    }
  };

  const handleUpperTickChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setUpperTick(value);
    if (value && selectedVault?.name) {
      try {
        const calculatedPrice = await getTickToPrice(
          selectedVault.name as PoolName,
          value,
        );
        setUpperTickToPrice(calculatedPrice);
      } catch (error) {
        console.error("Error calculating upper price:", error);
      }
    } else {
      setUpperTickToPrice("");
    }
  };
  const handleVaultSelect = (vault: Vault) => {
    setSelectedVault(vault);
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchCetusPoolPrice = async () => {
      if (selectedVault !== null) {
        try {
          const cetusPoolPriceArray = await getCurrentCetusPoolPrice(false);
          const cetusPoolPrice = cetusPoolPriceArray.get(
            selectedVault.name as PoolName,
          );

          const positionRangeArray = await getPositionRange(false);
          const positionRange = positionRangeArray.get(
            selectedVault.name as PoolName,
          );

          const ticks = await getPositionTicks(selectedVault.name as PoolName);
          if (ticks.length >= 2) {
            const numericTicks = ticks.map(Number);
            setTickLower(Math.min(...numericTicks));
            setTickUpper(Math.max(...numericTicks));
          }

          const currentTick = await getCurrentTick(
            selectedVault.name as PoolName,
          );
          setCurrentTick(Number(currentTick));

          // console.log("TICKS--..", ticks);
          // console.log("currentTick--..", currentTick);
          // console.log("cetusPoolPrice", cetusPoolPrice);
          // console.log("position range", positionRange);

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
              5,
            );
            setPriceLower(minPrice);
            const maxPrice = (1 / parseFloat(positionRange.lowerPrice)).toFixed(
              5,
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
          setIsLoading(false);
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
  // console.log("CURRENT PRICE--->>", currentPrice);

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
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Price:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : currentPrice !== "" ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {currentPrice} {coinName2} PER {coinName1}
                </div>
              ) : (
                "-"
              )}
            </div>
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Lower:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : priceLower !== "" ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {priceLower}
                </div>
              ) : (
                "-"
              )}
            </div>
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Upper:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : priceUpper !== "" ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {priceUpper}
                </div>
              ) : (
                "-"
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Tick:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : currentTick ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium ">
                  {currentTick}
                </div>
              ) : (
                "-"
              )}
            </div>
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Lower: &nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : tickLower ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {tickLower}
                </div>
              ) : (
                "-"
              )}
            </div>
            <div className="flex mb-[0.36vw] items-center">
              <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Upper: &nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : tickUpper ? (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {tickUpper}
                </div>
              ) : (
                "-"
              )}
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
                value={lowerTick}
                onChange={handleLowerTickChange}
                className="w-[10.05vw] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
                New Tick Upper
              </label>
              <input
                type="number"
                value={upperTick}
                onChange={handleUpperTickChange}
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
                Current Ratio: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                100% USDC
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Ratio: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#2D9EFF] font-noto font-medium">
                35% USDC and 65% ALPHA
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Price Lower: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                {lowerTickToPrice
                  ? `${Number(lowerTickToPrice).toFixed(3)} ${coinName1} per ${coinName2}`
                  : "-"}
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Price Upper: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#2D9EFF] font-noto font-medium">
                {upperTickToPrice
                  ? `${Number(upperTickToPrice).toFixed(3)} ${coinName1} per ${coinName2}`
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rebalance;
