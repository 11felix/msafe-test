import React, { useState } from "react";
import stSuiLogo from "../assets/icons/stSuiLogo.svg";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import medium from "../assets/icons/medium.svg";
import blueTwitter from "../assets/icons/blueTwitter.svg";
import blueTelegram from "../assets/icons/blueTelegram.svg";
import blueMedium from "../assets/icons/blueMedium.svg";
import movebit from "../assets/icons/movebit.png";
import zeroShadow from "../assets/icons/zeroShadow.png";
import safeLock from "../assets/icons/safe_lock.svg";
import { alphafiLink } from "../service/global-constant";

const Footer: React.FC = () => {
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isTelegramHovered, setIsTelegramHovered] = useState(false);
  const [isMediumHovered, setIsMediumHovered] = useState(false);

  return (
    <footer className="flex flex-col">
      <div className="bg-black pt-[4.06vw] pb-[4.87vw] flex flex-col justify-center w-full">
        <div className="mx-auto">
          <img
            src={safeLock}
            alt="lock"
            className="h-12 w-12 md:h-[2.01vw] md:w-[1.63vw]"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mr-[3.94vw]">
            <p className="text-white text-[1.45vw] font-poppins font-medium mb-[0.64vw]">
              Audited by
            </p>
            <div className="border rounded-[0.93vw] py-[0.88vw] px-[2.15vw] text-white">
              <img
                src={movebit}
                alt="movebit"
                className="h-12 w-12 md:h-[1.47vw] md:w-[7.24vw]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-[1.45vw] font-poppins font-medium mb-[0.64vw]">
              Secured by
            </p>
            <div className="border rounded-[0.93vw] py-[0.54vw] px-[1.41vw] text-white">
              <img
                src={zeroShadow}
                alt="zeroShadow"
                className="h-12 w-12 md:h-[2.14vw] md:w-[8.72vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-8 md:px-[112px] md:py-[40px]">
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
            <a href="" target="_blank" rel="" className="">
              <img
                src={isTwitterHovered ? blueTwitter : twitter}
                alt="Twitter"
                className="h-6 w-6 md:w-[1.51vw] md:h-[1.38vw]"
                onMouseEnter={() => setIsTwitterHovered(true)}
                onMouseLeave={() => setIsTwitterHovered(false)}
              />
            </a>
            <a href="" target="_blank" rel="" className="">
              <img
                src={isTelegramHovered ? blueTelegram : telegram}
                alt="Telegram"
                className="h-6 w-6 md:w-[1.65vw] md:h-[1.36vw]"
                onMouseEnter={() => setIsTelegramHovered(true)}
                onMouseLeave={() => setIsTelegramHovered(false)}
              />
            </a>
            <a href="" target="_blank" rel="" className="">
              <img
                src={isMediumHovered ? blueMedium : medium}
                alt="Medium"
                className="h-6 w-6 md:w-[2.09vw] md:h-[1.18vw]"
                onMouseEnter={() => setIsMediumHovered(true)}
                onMouseLeave={() => setIsMediumHovered(false)}
              />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-center md:w-[33%] space-y-4 md:space-y-0">
            <a
              href={alphafiLink}
              className="hover:text-[#73A6FC] text-sm md:text-[0.937vw] font-poppins font-bold"
            >
              ALPHA FI
            </a>
            <a
              href={documentationLink}
              target="_blank"
              className="hover:text-[#73A6FC] text-sm md:text-[0.937vw] font-poppins font-bold mt-2 md:mt-0 md:ml-[2.76vw]"
            >
              DOCS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
