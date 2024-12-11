import React, { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import {
  getCurrentCetusPoolPrice,
  getPositionRange,
  PoolName,
  alphaLpBreakdown,
  priceToTickIndexBoth,
} from "sui-alpha-sdk";
import {
  getCurrentTick,
  getPositionTicks,
  getTickToPrice,
} from "@alphafi/alphafi-sdk";
import Spinner from "../../../components/Spinner";
import { Vault } from "../Admin";
import { SuiTokensList } from "../../../service/suiTokensList";

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
  const [alphaLpBreakdownDetails, setAlphaLpBreakdownDetails] = useState<any>(
    {},
  );
  const [tokenShareInPool, setTokenShareInPool] = useState<string[]>([
    "0",
    "0",
  ]);

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
      if (!selectedVault) return;

      try {
        const [cetusPoolPriceArray, positionRangeArray, ticks, currentTick] =
          await Promise.all([
            getCurrentCetusPoolPrice(false),
            getPositionRange(false),
            getPositionTicks(selectedVault.name as PoolName),
            getCurrentTick(selectedVault.name as PoolName),
          ]);

        const cetusPoolPrice = cetusPoolPriceArray.get(
          selectedVault.name as PoolName,
        );
        const positionRange = positionRangeArray.get(
          selectedVault.name as PoolName,
        );

        if (ticks.length >= 2) {
          const numericTicks = ticks.map(Number);
          setTickLower(Math.min(...numericTicks));
          setTickUpper(Math.max(...numericTicks));
        }

        setCurrentTick(Number(currentTick));

        if (positionRange && cetusPoolPrice) {
          const isSpecialPair = isSpecialPairCombination(
            selectedVault.name1,
            selectedVault.name2,
          );
          const minPrice = isSpecialPair
            ? (1 / parseFloat(positionRange.upperPrice)).toFixed(5)
            : parseFloat(positionRange.lowerPrice).toFixed(5);
          const maxPrice = isSpecialPair
            ? (1 / parseFloat(positionRange.lowerPrice)).toFixed(5)
            : parseFloat(positionRange.upperPrice).toFixed(5);
          const currentPrice = isSpecialPair
            ? (1 / parseFloat(cetusPoolPrice)).toFixed(5)
            : parseFloat(cetusPoolPrice).toFixed(5);

          setPriceLower(minPrice);
          setPriceUpper(maxPrice);
          setCurrentPrice(currentPrice);
        }

        const [coinName1, coinName2] = determineCoinNames(selectedVault);
        setCoinName1(coinName1);
        setCoinName2(coinName2);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Cetus pool price:", error);
        setIsLoading(false);
      }
    };

    const fetchLPBreakdownDetails = async () => {
      if (!selectedVault) return;

      try {
        const lpDetailsInAlphaProtocol = await alphaLpBreakdown(
          selectedVault.name as PoolName,
          false,
        );
        setAlphaLpBreakdownDetails(lpDetailsInAlphaProtocol);
      } catch (error) {
        console.error("Error fetching LP Breakdown details:", error);
      }
    };

    fetchCetusPoolPrice();
    fetchLPBreakdownDetails();
  }, [selectedVault]);

  useEffect(() => {
    if (
      selectedVault?.name1 &&
      selectedVault?.name2 &&
      alphaLpBreakdownDetails
    ) {
      try {
        const token1Decimals =
          SuiTokensList[selectedVault.name1.toLowerCase()]?.decimals || 0;
        const token2Decimals =
          SuiTokensList[selectedVault.name2.toLowerCase()]?.decimals || 0;

        const token1Count =
          alphaLpBreakdownDetails.coinAInUsd / 10 ** token1Decimals;
        const token2Count =
          alphaLpBreakdownDetails.coinBInUsd / 10 ** token2Decimals;
        const totalTokens = token1Count + token2Count;

        if (totalTokens > 0) {
          const token1Share = (token1Count / totalTokens).toFixed(2);
          const token2Share = (token2Count / totalTokens).toFixed(2);

          setTokenShareInPool([token1Share, token2Share]);
        }
      } catch (error) {
        console.error("Error calculating token shares:", error);
      }
    }
  }, [selectedVault, alphaLpBreakdownDetails]);

  const rebalanceLowerTickAndUpperTick = async () => {
    if (!selectedVault) return;
    try {
      await priceToTickIndexBoth(
        selectedVault.name as PoolName,
        Number(lowerTickToPrice),
        Number(upperTickToPrice),
        SuiTokensList[selectedVault.name1.toLowerCase()]?.decimals || 0,
        SuiTokensList[selectedVault.name2.toLowerCase()]?.decimals || 0,
      );
    } catch (error) {
      console.error("Error in rebalancing:", error);
    }
  };

  const handleClickRebalance = () => {
    rebalanceLowerTickAndUpperTick();
  };

  const isSpecialPairCombination = (name1: string, name2: string) => {
    const upperName1 = name1.toUpperCase();
    const upperName2 = name2.toUpperCase();
    const specialPairs = [
      ["WUSDC", "SUI"],
      ["WUSDC", "WBTC"],
      ["USDC", "SUI"],
      ["USDC", "USDT"],
      ["USDC", "WUSDC"],
      ["BUCK", "SUI"],
      ["USDC", "ETH"],
      ["FUD", "SUI"],
    ];
    return specialPairs.some(
      ([a, b]) =>
        (upperName1 === a && upperName2 === b) ||
        (upperName1 === b && upperName2 === a),
    );
  };

  const determineCoinNames = (selectedVault: {
    name1: string;
    name2: string;
  }): [string, string] => {
    const upperName1 = selectedVault.name1.toUpperCase();
    const upperName2 = selectedVault.name2.toUpperCase();

    const isFirstCoinPrimary = [
      ["WUSDC", "SUI"],
      ["WUSDC", "WBTC"],
      ["USDC", "SUI"],
      ["USDC", "USDT"],
      ["USDC", "WUSDC"],
      ["BUCK", "SUI"],
      ["USDC", "ETH"],
    ].some(([a, b]) => upperName1 === a && upperName2 === b);

    if (isFirstCoinPrimary) {
      return [selectedVault.name2, selectedVault.name1];
    } else {
      return [selectedVault.name1, selectedVault.name2];
    }
  };
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
            <div className="flex items-center mb-[0.36vw]">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Price:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {currentPrice
                    ? `${currentPrice} ${coinName2}/${coinName1}`
                    : "-"}
                </div>
              )}
            </div>
            <div className="flex items-center mb-[0.36vw]">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Lower:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {priceLower ? priceLower : "-"}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Upper:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {priceUpper ? priceUpper : "-"}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-[0.36vw]">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Tick:&nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium ">
                  {currentTick ? currentTick : "-"}
                </div>
              )}
            </div>
            <div className="flex items-center mb-[0.36vw]">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Lower: &nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {tickLower ? tickLower : "-"}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <div className="whitespace-nowrap text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Upper: &nbsp;
              </div>
              {isLoading ? (
                <Spinner className="ml-2" />
              ) : (
                <div className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                  {tickUpper ? tickUpper : "-"}
                </div>
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
          <button
            className="cursor-not-allowed w-full h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.5vw] text-white font-poppinsbold mb-[1.04vw]"
            disabled={true}
            onClick={handleClickRebalance}
          >
            Rebalance
          </button>
          <div className="flex flex-col">
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Ratio: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                {parseFloat(tokenShareInPool[0]) * 100}%&nbsp;
                {selectedVault?.name1}&nbsp;|&nbsp;
                {parseFloat(tokenShareInPool[1]) * 100}%&nbsp;
                {selectedVault?.name2}
              </p>
            </div>
            <div className="flex justify-between mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                New Ratio: &nbsp;
              </p>
              <p className="text-[0.98vw] text-[#2D9EFF] font-noto font-medium">
                -
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
