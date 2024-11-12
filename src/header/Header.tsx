import React, { useState } from "react";
import stSuiLogo from "../assets/icons/stSuiLogo.svg";
import walletIcon from "../assets/icons/walletIcon.svg";
import CrossIcon from "../assets/icons/black_cross_icon.svg";
import MenuIcon from "../assets/icons/blue_menu_icon.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onConnectWallet = () => {
    console.log("wallet connect");
  };

  return (
    <header className="flex items-center justify-between px-3 md:px-[5.83vw] py-4 md:py-[1.82vw] bg-[#E9EFF4] text-black relative">
      <div className="flex items-center md:ml-[1.45vw]">
        <img
          src={stSuiLogo}
          alt="Logo"
          className="h-10 w-10 md:h-[4.16vw] md:w-[4.16vw] rounded-full"
        />
        <span className="font-poppins font-medium text-xl md:text-[1.77vw] ml-4 md:ml-[1.04vw]">
          stSUI
        </span>
      </div>

      <div className="hidden md:flex items-center">
        <a
          href="#link1"
          className="hover:text-[#73A6FC] text-[0.937vw] mr-[2.76vw] font-poppins font-bold"
        >
          ALPHA FI
        </a>
        <a
          href="#link2"
          className="hover:text-[#73A6FC] text-[0.937vw] mr-[2.76vw] font-poppins font-bold"
        >
          DOCS
        </a>
        <button
          onClick={onConnectWallet}
          className="flex items-center border-[0.104vw] border-[#000000] bg-[#E9EFF4] h-[2.5vw] px-6 rounded-[0.62vw] hover:bg-black hover:text-white text-[1.04vw] font-poppins font-medium group"
        >
          <img
            src={walletIcon}
            alt="Wallet Icon"
            className="h-[0.917vw] w-[1.12vw] mr-2 text-black group-hover:invert"
          />
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-black focus:outline-none"
      >
        {isOpen ? (
          <img
            src={CrossIcon}
            alt="Wallet Icon"
            className="h-[4.917vw] w-[5.12vw]"
          />
        ) : (
          <img
            src={MenuIcon}
            alt="Wallet Icon"
            className="h-[70px] w-[70px] mr-0"
          />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#E9EFF4] z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-black focus:outline-none"
          >
            <img
              src={CrossIcon}
              alt="Wallet Icon"
              className="h-[4.917vw] w-[5.12vw] mr-2 text-black group-hover:invert"
            />
          </button>

          <a
            href="#link1"
            className="hover:text-[#73A6FC] text-2xl font-poppins font-bold mb-6"
            onClick={() => setIsOpen(false)}
          >
            ALPHA FI
          </a>
          <a
            href="#link2"
            className="hover:text-[#73A6FC] text-2xl font-poppins font-bold mb-6"
            onClick={() => setIsOpen(false)}
          >
            DOCS
          </a>
          <button
            onClick={() => {
              onConnectWallet();
              setIsOpen(false);
            }}
            className="flex items-center border-2 border-[#000000] bg-[#E9EFF4] px-8 py-2 rounded-[12px] hover:bg-black hover:text-white text-2xl font-poppins font-medium"
          >
            <img
              src={walletIcon}
              alt="Wallet Icon"
              className="h-6 w-6 mr-3 text-black group-hover:invert"
            />
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
