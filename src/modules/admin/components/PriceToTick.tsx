import React from "react";

interface Props {}
function PriceToTick(props: Props) {
  const {} = props;

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
              className="w-[13.697vw] bg-[#F4F6FA] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
            />
          </div>
          <button className="w-[13.697vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.562vw] text-white font-poppinsbold">
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
              className="w-[13.697vw] bg-[#F4F6FA] rounded-[0.364vw] no-spinner px-[1.04vw] pt-[0.20vw] pb-[0.26vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 text-[#222F3B]"
            />
          </div>
          <button className="w-[13.697vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] mt-[1.562vw] text-white font-poppinsbold">
            Get Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceToTick;
