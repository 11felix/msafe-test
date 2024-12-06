import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { getTokenIcon } from "../components/tokenIconList";
import { getAllDoubleAssetVaults } from "@alphafi/alphafi-sdk";

interface Vault {
  name: string;
  name1: string;
  name2: string;
}

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Vault | null>(null);
  const [vaults, setVaults] = useState<Vault[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchVaults = async () => {
      try {
        const data: string[] = await getAllDoubleAssetVaults();
        // console.log("DATA-->>", data);
        const formattedVaults = data.map((item) => {
          const parts = item.split("-");
          if (parts.length === 3) {
            return {
              name: item,
              name1: parts[1],
              name2: parts[2],
            };
          } else if (parts.length === 2) {
            return {
              name: item,
              name1: parts[0],
              name2: parts[1],
            };
          } else {
            throw new Error(`Unexpected format: ${item}`);
          }
        });

        setVaults(formattedVaults);
      } catch (error) {
        console.error("Error fetching or formatting vaults:", error);
      }
    };

    fetchVaults();
  }, []);

  // console.log("VAULTS--->>>>", vaults);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: Vault) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-fit justify-center items-center rounded-[0.256vw] bg-[#F4F6FA] px-[1.04vw] py-[0.256vw] text-[0.88vw] font-bold text-[#222F3B] cursor-pointer focus:outline-none"
        >
          {selectedItem ? (
            <>
              <div className="flex items-center mr-[0.83vw]">
                <img
                  src={getTokenIcon(selectedItem.name1)}
                  className="w-[1.35vw] h-[1.35vw]"
                />
                <img
                  src={getTokenIcon(selectedItem.name2)}
                  className="w-[1.35vw] h-[1.35vw] ml-[-0.25vw]"
                />
              </div>
              {selectedItem.name}
            </>
          ) : (
            <>
              <span className="mr-2">Select pool</span>
            </>
          )}
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-1 w-fit h-[30vw] overflow-y-scroll origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {vaults.map((vault, index) => (
              <button
                key={index}
                onClick={() => handleSelect(vault)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <span className="mr-[0.83vw]">
                  <div className="flex items-center">
                    <img
                      src={getTokenIcon(vault.name1)}
                      className="w-[1.35vw] h-[1.35vw]"
                    />
                    <img
                      src={getTokenIcon(vault.name2)}
                      className="w-[1.35vw] h-[1.35vw] ml-[-0.25vw]"
                    />
                  </div>
                </span>
                {vault.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
