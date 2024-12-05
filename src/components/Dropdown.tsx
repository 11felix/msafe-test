import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { getTokenIcon } from "../components/tokenIconList";

interface DropdownItem {
  id: number;
  name1: string;
  name2: string;
  icon: JSX.Element;
  label: string;
}

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const items: DropdownItem[] = [
    {
      id: 1,
      name1: "ALPHA",
      name2: "SUI",
      icon: (
        <div className="flex items-center">
          <img src={getTokenIcon("alpha")} className="w-[1.35vw] h-[1.35vw]" />
          <img
            src={getTokenIcon("sui")}
            className="w-[1.35vw] h-[1.35vw] ml-[-0.25vw]"
          />
        </div>
      ),
      label: "ALPHA-SUI",
    },
    {
      id: 2,
      name1: "WSOL",
      name2: "WBTC",
      icon: (
        <div className="flex items-center">
          <img src={getTokenIcon("wsol")} className="w-[1.35vw] h-[1.35vw]" />
          <img
            src={getTokenIcon("wbtc")}
            className="w-[1.35vw] h-[1.35vw] ml-[-0.25vw]"
          />
        </div>
      ),
      label: "WSOL-WBTC",
    },
    {
      id: 3,
      name1: "USDC",
      name2: "usdt",
      icon: (
        <div className="flex items-center">
          <img src={getTokenIcon("usdc")} className="w-[1.35vw] h-[1.35vw]" />
          <img
            src={getTokenIcon("usdt")}
            className="w-[1.35vw] h-[1.35vw] ml-[-0.25vw]"
          />
        </div>
      ),
      label: "USDC-USDT",
    },
  ];

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

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full justify-center items-center rounded-[0.256vw] bg-[#F4F6FA] px-[1.04vw] py-[0.256vw] text-[0.88vw] font-bold text-[#222F3B] cursor-pointer focus:outline-none"
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
              {selectedItem.label}
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
        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <span className="mr-[0.83vw]">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
