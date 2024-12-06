import React from "react";
import Dropdown from "../../../components/Dropdown";
// import { getCurrentCetusPoolPrice } from "sui-alpha-sdk";

const Rebalance = () => {
  // const cetusPoolPriceArray = await getCurrentCetusPoolPrice(false);
  // let currPrice = cetusPoolPriceArray.get("ALPHA-SUI");
  return (
    <>
      <div className="flex flex-col w-[29.32vw] h-[40.88vw] bg-white rounded-[2.08vw] p-[2.08vw]">
        <div className="font-poppinsbold text-[1.56vw] mb-[1.51vw] text-[#3D5060]">
          Rebalance
        </div>
        <div className="flex flex-col mb-[1.8vw]">
          <p className="text-[0.88vw] font-noto font-bold text-[#222F3B] mb-[0.52vw]">
            Select Pool
          </p>
          <Dropdown />
        </div>
        <div className="flex justify-between mb-[1.56vw]">
          <div className="flex flex-col">
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Price:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                1.374 USDC PER ALPHA
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Lower:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                0.428
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Upper:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                8.367
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Tick:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                -1
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Lower:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                0
              </p>
            </div>
            <div className="flex mb-[0.36vw]">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Upper:{" "}
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                2
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
