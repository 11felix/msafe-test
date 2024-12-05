import React from "react";
import Dropdown from "../../components/Dropdown";

const Rebalance = () => {
  return (
    <>
      <div className="flex flex-col w-[29.32vw] h-auto bg-white rounded-[2.08vw] p-[2.08vw]">
        <div className="flex flex-col">
          <p className="text-[0.88vw] text-[#222F3B] mb-[0.52vw]">
            Select pool
          </p>
          <Dropdown />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Price:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                1.374 USDC PER ALPHA
              </p>
            </div>
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Lower:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                0.428
              </p>
            </div>
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Price Upper:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                8.367
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Current Tick:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                -1
              </p>
            </div>
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Lower:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                0
              </p>
            </div>
            <div className="flex">
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                Tick Upper:
              </p>
              <p className="text-[0.98vw] text-[#222F3B] font-noto font-medium">
                2
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Rebalance;
