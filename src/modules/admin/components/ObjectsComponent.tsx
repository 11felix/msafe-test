import React from "react";
interface Props {
  tittle: string;
  input1: string;
  input2: string;
  buttonText: string;
}
function ObjectsComponent(props: Props) {
  const { tittle, input1, input2, buttonText } = props;
  return (
    <div className="w-[33.489vw] h-[23.02vw] bg-white rounded-[2.08vw] mt-[1.04vw] p-[2.08vw]">
      <div className="text-[#3D5060] text-[1.562vw] font-poppinsbold">
        {tittle}
      </div>
      <div className="flex flex-col my-[2.08vw]">
        <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
          {input1}
        </label>
        <input
          type="text"
          className="w-[26.458vw] h-[2.08vw] border rounded-[0.364vw] no-spinner px-[0.45vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[0.885vw] mb-[0.52vw] font-natosansbold text-[#222F3B]">
          {input2}
        </label>
        <input
          type="text"
          className="w-[26.458vw] h-[2.08vw] border rounded-[0.364vw] no-spinner px-[0.45vw] font-poppinsbold text-[1.145vw] focus:outline-none focus:ring-0 leading-[1.145vw] text-[#222F3B]"
        />
      </div>
      <button className="w-[26.458vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] text-white font-poppinsbold mt-[1.822vw]">
        {buttonText}
      </button>
    </div>
  );
}

export default ObjectsComponent;
