import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown";
interface Props {
  tittle: string;
  buttonText1: string;
  buttonText2: string;
}
interface Vault {
  name: string;
  name1: string;
  name2: string;
}
function AutoCompound(props: Props) {
  const { tittle, buttonText1, buttonText2 } = props;
  const [selectedVault, setSelectedVault] = useState<any>(null);

  const handleVaultSelect = (vault: Vault) => {
    setSelectedVault(vault);
    console.log("Selected from parent Vault:", vault);
  };
  console.log("selectedVault:", selectedVault);
  return (
    <div className="w-[33.489vw] h-[23.02vw] bg-white rounded-[2.08vw] mt-[1.04vw] p-[2.08vw]">
      <div className="text-[#3D5060] text-[1.562vw] font-poppinsbold">
        {tittle}
      </div>
      <button className="w-[26.458vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] text-white font-poppinsbold mt-[1.822vw]">
        {buttonText1}
      </button>
      <div className="flex flex-col mt-[2.08vw]">
        <p className="text-[0.88vw] font-noto font-bold text-[#222F3B] mb-[0.52vw]">
          Select Pool
        </p>
        <Dropdown onSelect={handleVaultSelect} />
      </div>
      <button className="w-[26.458vw] h-[3.541vw] text-[1.25vw] text-center items-center rounded-[0.677vw] bg-[#3D5060] text-white font-poppinsbold mt-[2.08vw]">
        {buttonText2}
      </button>
    </div>
  );
}

export default AutoCompound;
