import React from "react";
import stSuiLogo from "../assets/icons/stSuiLogo.svg";
import walletIcon from "../assets/icons/walletIcon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-6 py-8 md:px-[112px] md:py-[40px]">
      <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col justify-center items-center md:items-start md:w-[33%]">
          <div className="flex items-center">
            <img
              src={stSuiLogo}
              alt="Logo"
              className="h-12 w-12 md:h-[4.16vw] md:w-[4.16vw] rounded-full"
            />
            <span className="font-poppins font-medium text-lg md:text-[1.77vw] ml-3 md:ml-[1.04vw]">
              stSUI
            </span>
          </div>
          <p className="text-[#555555] font-inter font-normal mt-2 text-sm md:text-[0.93vw] text-center md:text-left">
            Copyright © 2024 Staked SUI. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 md:space-x-10 md:w-[33%]">
          <a
            href=""
            target="_blank"
            rel=""
            className="text-gray-500 hover:text-gray-800"
          >
            <img
              src={walletIcon}
              alt=""
              className="h-6 w-6 md:h-[0.917vw] md:w-[1.12vw]"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel=""
            className="text-gray-500 hover:text-gray-800"
          >
            <img
              src={walletIcon}
              alt=""
              className="h-6 w-6 md:h-[0.917vw] md:w-[1.12vw]"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel=""
            className="text-gray-500 hover:text-gray-800"
          >
            <img
              src={walletIcon}
              alt=""
              className="h-6 w-6 md:h-[0.917vw] md:w-[1.12vw]"
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-center md:w-[33%] space-y-4 md:space-y-0">
          <a
            href="#link1"
            className="hover:text-[#73A6FC] text-sm md:text-[0.937vw] font-poppins font-bold"
          >
            ALPHA FI
          </a>
          <a
            href="#link2"
            className="hover:text-[#73A6FC] text-sm md:text-[0.937vw] font-poppins font-bold mt-2 md:mt-0 md:ml-[2.76vw]"
          >
            DOCS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
