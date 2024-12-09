import React from "react";
import alphalogo from "../../../assets/icons/alpha_logo.png";
import lock from "../../../assets/icons/lock.svg";
import suilogo from "../../../assets/icons/sui-logo1.svg";

interface Props {}

function SetWeight(props: Props) {
  const {} = props;
  const data = [
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
      name: "USDT–USDC",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
    {
      name: "haSUI–SUI",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
    {
      name: "USDY–USDC",
      currentWeight: 20,
      currentPercentage: 10,
      newWeight: 20,
      newPercentage: 10,
    },
  ];

  return (
    <div className="w-[69.427vw] h-auto bg-white rounded-[2.08vw] pt-[2.343vw] pl-[2.08vw] pr-[2.812vw]">
      <div className="pl-[1.04vw] text-[#3D5060] text-[1.562vw] font-poppinsbold">
        Set Weights
      </div>
      <div className="flex flex-col items-center mt-[0.572vw]">
        <table className="table-auto text-left w-full">
          <thead>
            <tr>
              <th className="pl-[2.76vw] text-[#3D5060] text-[1.145vw] font-natosansregular opacity-70">
                Name
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw]">
                Current <br />
                <span className="opacity-70">Weight</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw]">
                Current <br />
                <span className="opacity-70">Percentage</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw]">
                New <br />
                <span className="opacity-70">Weight</span>
              </th>
              <th className="text-[#3D5060] font-natosansbold text-[1.145vw]">
                New <br />
                <span className="opacity-70">Percentage</span>
              </th>
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
                    <span className="ml-2 text-[#3D5060] font-poppinsbold text-[1.25vw]">
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
                    value={row.newWeight}
                    className={`w-20 rounded px-2 py-1 text-center text-[1.25vw] text-[#3D5060] font-poppinsbold ${
                      index % 2 === 0 ? "" : "bg-[#F4F6FA]"
                    }`}
                  />
                </td>
                <td className="text-center text-[1.25vw] text-[#3D5060] font-poppinsbold">
                  {row.newPercentage.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col px-4 pb-[2.395vw] mt-[0.982vw]">
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
