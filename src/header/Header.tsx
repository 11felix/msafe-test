import React, { useState } from "react";
import stSuiLogo from "../assets/icons/stSuiLogo.svg";
import walletIcon from "../assets/icons/walletIcon.svg";
import whiteWallet from "../assets/icons/whiteWallet.svg";
import CrossIcon from "../assets/icons/black_cross_icon.svg";
import MenuIcon from "../assets/icons/menuIcon.svg";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import medium from "../assets/icons/medium.svg";

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

      <div className="flex md:hidden">
        <button
          onClick={onConnectWallet}
          className="flex items-center bg-black px-[3.02vw] py-[1.62vw] mr-[3.02vw] rounded-[2.32vw] text-white text-[3.02vw] font-poppins font-medium"
        >
          Connect Wallet
        </button>
        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none"
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
              className="h-[4.65vw] w-[4.88vw] mr-0"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#E9EFF4] z-50 flex flex-col items-center">
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

          <div className="flex items-center mt-[40.85vw] mb-[20.69vw]">
            <img
              src={stSuiLogo}
              alt="Logo"
              className="h-[17.98vw] w-[17.98vw] rounded-full mr-[4.72vw]"
            />
            <span className="font-poppins font-medium text-[8.13vw]">
              stSUI
            </span>
          </div>

          <a
            href="#link1"
            className="hover:text-[#73A6FC] text-[4.18vw] font-poppins font-bold mb-[5.34vw]"
            onClick={() => setIsOpen(false)}
          >
            ALPHA FI
          </a>
          <a
            href="#link2"
            className="hover:text-[#73A6FC] text-[4.18vw] font-poppins font-bold"
            onClick={() => setIsOpen(false)}
          >
            DOCS
          </a>
          <button
            onClick={() => {
              onConnectWallet();
              setIsOpen(false);
            }}
            className="flex items-center bg-black px-[4.18vw] py-[2.32vw] rounded-[12px] text-[4.65vw] font-poppins font-medium text-white mt-[65vw]"
          >
            <img
              src={whiteWallet}
              alt="Wallet Icon"
              className="h-[4vw] w-[4.89vw] mr-[2.63vw] text-white"
            />
            Connect Wallet
          </button>
          <div className="flex justify-center items-center mt-[19.47vw]">
            <a href="" target="_blank" rel="" className="">
              <img
                src={twitter}
                alt="Twitter"
                className="w-[5.4vw] h-[4.88vw] mr-[7.80vw]"
              />
            </a>
            <a href="" target="_blank" rel="" className="">
              <img
                src={telegram}
                alt="Telegram"
                className="w-[5.91vw] h-[4.88vw] mr-[7.80vw]"
              />
            </a>
            <a href="" target="_blank" rel="" className="">
              <img
                src={medium}
                alt="Medium"
                className="w-[7.47vw] h-[4.24vw]"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
