import React from "react";

interface Props {}
function SetWeight(props: Props) {
  const {} = props;
  const data = [
    {
      name: "ALPHA",
      currentWeight: 0,
      currentPercentage: 25,
      newWeight: 50,
      newPercentage: 25,
    },
    {
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
    <>
      <div className="w-[69.427vw] h-auto bg-white rounded-[2.08vw] pt-[2.343vw] pl-[2.08vw] pr-[2.812vw]">
        <div className="pl-[1.04vw] text-[#3D5060] text-[1.562vw] font-poppinsbold">
          Set Weights
        </div>
        <div className="flex flex-col items-center mt-[0.572vw]">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <td className="pb-[1.04vw]">
                  <div className="flex items-center">
                    <div className="pl-[2.76vw] text-left text-[#3D5060]">
                      <br />
                      <span className="opacity-70 text-[1.145vw] font-natosansregular">
                        Name
                      </span>
                    </div>

                    <div className="ml-[7.47vw] text-[#3D5060] font-natosansbold text-[1.145vw]">
                      Current <br />
                      <span className="opacity-70 text-[1.145vw] font-natosansregular">
                        Weight
                      </span>
                    </div>

                    <div className="ml-[6.11vw] text-[#3D5060] font-natosansbold text-[1.145vw]">
                      Current
                      <br />
                      <span className="opacity-70 text-[1.145vw] font-natosansregular">
                        Percentage
                      </span>
                    </div>

                    <div className="ml-[8vw] text-[#3D5060] font-natosansbold text-[1.145vw]">
                      New
                      <br />
                      <span className="opacity-70 text-[1.145vw] font-natosansregular">
                        Weight
                      </span>
                    </div>

                    <div className="ml-[4vw] text-[#3D5060] font-natosansbold text-[1.145vw]">
                      New
                      <br />
                      <span className="opacity-70 text-[1.145vw] font-natosansregular">
                        Percentage
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#F4F6FA]" : "bg-white"}
                >
                  <td
                    colSpan={5}
                    className="w-[64.53vw] rounded-[1.614vw] pt-[0.72vw] pb-[0.937vw] pl-[2.76vw] pr-[9.21vw]"
                  >
                    <div className="flex items-center">
                      <div className="flex-1 text-left whitespace-nowrap text-[1.25vw] text-[#3D5060] font-poppinsbold pr-[3vw]">
                        {row.name}
                      </div>

                      <div className="flex-1 text-[1.25vw] text-[#3D5060] font-poppinsbold pr-[1vw]">
                        {row.currentWeight}
                      </div>

                      <div className="flex-1 text-[1.25vw] text-[#3D5060] font-poppinsbold pr-[3vw]">
                        {row.currentPercentage.toFixed(2)}%
                      </div>

                      <div className="flex-1 pl-[2vw]">
                        <input
                          type="number"
                          value={row.newWeight}
                          className={`w-20 rounded px-2 py-1 text-center text-[1.25vw] text-[#3D5060] font-poppinsbold ${
                            index % 2 === 0 ? "" : "bg-[#F4F6FA]"
                          }`}
                        />
                      </div>

                      <div className="flex-1 text-[1.25vw] text-[#3D5060] font-poppinsbold">
                        {row.newPercentage.toFixed(2)}%
                      </div>
                    </div>
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
    </>
  );
}

export default SetWeight;
