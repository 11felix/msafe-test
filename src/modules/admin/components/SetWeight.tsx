import React, { useState } from "react";
import alphalogo from "../../../assets/icons/alpha_logo.png";
import lock from "../../../assets/icons/lock.svg";
import suilogo from "../../../assets/icons/sui-logo1.svg";
import usdc from "../../../assets/icons/USDC.svg";
import usdt from "../../../assets/icons/USDT.png";
import hasui from "../../../assets/icons/hasui.svg";
import sui from "../../../assets/icons/sui-ic.png";
import usdy from "../../../assets/icons/usdy.svg";
interface RowData {
  icon1?: string | null;
  icon2?: string | null;
  lockIcon?: string | null;
  name: string;
  currentWeight: number;
  currentPercentage: number;
  newWeight: number;
  newPercentage: number;
}
function SetWeight() {
  const [data, setData] = useState<RowData[]>([
    {
      icon1: alphalogo,
      icon2: null,
      lockIcon: lock,
      name: "ALPHA",
      currentWeight: 0,
      currentPercentage: 25,
      newWeight: 50,
      newPercentage: 25,
    },
    {
      icon1: alphalogo,
      icon2: suilogo,
      lockIcon: null,
      name: "ALPHA - SUI",
      currentWeight: 10,
      currentPercentage: 15,
      newWeight: 30,
      newPercentage: 15,
    },
    {
      icon1: usdt,
      icon2: usdc,
      lockIcon: null,
      name: "USDT–USDC",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
    {
      icon1: hasui,
      icon2: sui,
      lockIcon: null,
      name: "haSUI–SUI",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
    {
      icon1: usdy,
      icon2: usdc,
      lockIcon: null,
      name: "USDY–USDC",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = Number(e.target.value);
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      newWeight: isNaN(newValue) ? 0 : newValue,
    };
    console.log(`Updated index: ${index}`, updatedData[index]);
    setData(updatedData);
  };

  return (
    <div className="w-[69.427vw] h-auto bg-white rounded-[2.08vw] pt-[2.343vw] pl-[2.08vw] pr-[2.812vw]">
      <div className="pl-[1.04vw] text-[#3D5060] text-[1.562vw] font-poppinsbold">
        Set Weights
      </div>
      <div className="flex flex-col items-center mt-[0.572vw]">
        <table className="table-auto text-left w-full">
          <thead>
            <tr>
              <th className="pl-[8.4vw] text-[#3D5060] text-[1.145vw] font-natosansregular opacity-70 w-[20vw]">
                Name
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw] pl-[3vw] w-[7vw]">
                Current <br />
                <span className="opacity-70">Weight</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw] pl-[3vw] w-[10vw]">
                Current <br />
                <span className="opacity-70">Percentage</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw] pl-[4vw] w-[15vw]">
                New <br />
                <span className="opacity-70">Weight</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw]">
                New <br />
                <span className="opacity-70">Percentage</span>
              </th>
              <th className="w-[4vw]" />
            </tr>
            <tr>
              <td colSpan={5} className="h-[1vw]"></td>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-[#F4F6FA]" : "bg-white"}
              >
                <td className="pl-[2.76vw] py-[0.937vw] rounded-l-[2.08vw]">
                  <div className="flex items-center">
                    <div className="flex w-[5vw] h-auto">
                      {row.icon1 && !row.icon2 && !row.lockIcon && (
                        <img
                          src={row.icon1}
                          alt="icon"
                          className="w-[1.979vw] h-[1.979vw]"
                        />
                      )}
                      {row.icon1 && row.icon2 && !row.lockIcon && (
                        <>
                          <img
                            src={row.icon1}
                            alt="icon"
                            className="w-[1.979vw] h-[1.979vw]"
                          />
                          <img
                            src={row.icon2}
                            alt="icon"
                            className="w-[1.979vw] h-[1.979vw] ml-[-0.5vw]"
                          />
                        </>
                      )}
                      {row.icon1 && row.lockIcon && !row.icon2 && (
                        <>
                          <img
                            src={row.icon1}
                            alt="icon"
                            className="w-[1.979vw] h-[1.979vw]"
                          />
                          <img
                            src={row.lockIcon}
                            alt="icon"
                            className="w-[0.88vw] h-[0.88vw] ml-[-0.5vw] mt-[1.2vw]"
                          />
                        </>
                      )}
                    </div>
                    <span className="ml-2 text-[#3D5060] font-poppinsbold text-[1.25vw] whitespace-nowrap">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="text-center text-[1.25vw] text-[#3D5060] font-poppinsbold">
                  {row.currentWeight}
                </td>
                <td className="text-center text-[1.25vw] text-[#3D5060] font-poppinsbold">
                  {row.currentPercentage.toFixed(2)}%
                </td>
                <td className="text-center">
                  <input
                    type="number"
                    value={row.newWeight || ""}
                    className={`w-[7vw] rounded py-1 text-center text-[1.25vw] text-[#3D5060] font-poppinsbold no-spinner focus:outline-none focus:ring-0 ${
                      index % 2 === 0 ? "" : "bg-[#F4F6FA]"
                    }`}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td className="text-center text-[1.25vw] text-[#3D5060] font-poppinsbold pr-[7vw]">
                  {row.newPercentage.toFixed(2)}%
                </td>
                <td className="rounded-r-[2.08vw] w-[4vw]" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col px-4 pb-[2.395vw] mt-[2vw]">
        <div className="text-[1.25vw] font-poppinsbold text-[#3D5060] mb-[0.98vw] pl-[2.76vw]">
          New Total Weight: 140
        </div>
        <button className="bg-[#3D5060] text-white rounded-[1.61vw] pt-[0.883vw] pb-[1.09vw] w-[26.458vw]">
          Set Weight
        </button>
      </div>
    </div>
  );
}

export default SetWeight;
