// import React, { useState } from "react";
// import stSuiLogo from "../assets/icons/stSuiLogo.svg";
// import twitter from "../assets/icons/twitter.svg";
// import telegram from "../assets/icons/telegram.svg";
// import medium from "../assets/icons/medium.svg";
// import blueTwitter from "../assets/icons/blueTwitter.svg";
// import blueTelegram from "../assets/icons/blueTelegram.svg";
// import blueMedium from "../assets/icons/blueMedium.svg";
// import movebit from "../assets/icons/movebit.png";
// import zeroShadow from "../assets/icons/zeroShadow.png";
// import safeLock from "../assets/icons/safe_lock.svg";
// import { alphafiLink, documentationLink, mediumLink, movebitLink, telegramLink, twitterLink, zeroshadowLink } from "../service/global-constant";
//
// const Footer = () => {
//   const [isTwitterHovered, setIsTwitterHovered] = useState(false);
//   const [isTelegramHovered, setIsTelegramHovered] = useState(false);
//   const [isMediumHovered, setIsMediumHovered] = useState(false);
//
//   return (
//     <footer className="flex flex-col">
//
//       <div className="bg-white py-[20vw] md:px-[112px] md:py-[40px]">
//         <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
//           <div className="flex flex-col justify-center items-center md:items-start md:w-[33%]">
//             <div className="flex items-center">
//               <img
//                 src={stSuiLogo}
//                 alt="Logo"
//                 className="h-[16.94vw] w-[16.94vw] md:h-[4.16vw] md:w-[4.16vw] rounded-full"
//               />
//               <span className="font-poppins font-medium text-[7.44vw] md:text-[1.77vw] ml-[4vw] md:ml-[1.04vw]">
//                 stSUI
//               </span>
//             </div>
//             <p className="hidden md:block text-[#555555] font-inter font-normal mt-2 text-sm md:text-[0.93vw] text-center md:text-left">
//               Copyright © 2024 Staked SUI. All rights reserved.
//             </p>
//           </div>
//
//           <div className="hidden md:block md:flex justify-center items-center space-x-4 md:space-x-10 md:w-[33%]">
//             <a href={twitterLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isTwitterHovered ? blueTwitter : twitter}
//                 alt="Twitter"
//                 className="h-6 w-6 md:w-[1.51vw] md:h-[1.38vw]"
//                 onMouseEnter={() => setIsTwitterHovered(true)}
//                 onMouseLeave={() => setIsTwitterHovered(false)}
//               />
//             </a>
//             <a href={telegramLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isTelegramHovered ? blueTelegram : telegram}
//                 alt="Telegram"
//                 className="h-6 w-6 md:w-[1.65vw] md:h-[1.36vw]"
//                 onMouseEnter={() => setIsTelegramHovered(true)}
//                 onMouseLeave={() => setIsTelegramHovered(false)}
//               />
//             </a>
//             <a href={mediumLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isMediumHovered ? blueMedium : medium}
//                 alt="Medium"
//                 className="h-6 w-6 md:w-[2.09vw] md:h-[1.18vw]"
//                 onMouseEnter={() => setIsMediumHovered(true)}
//                 onMouseLeave={() => setIsMediumHovered(false)}
//               />
//             </a>
//           </div>
//
//           <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-center md:w-[33%] space-y-4 pt-[6.5vw] md:pt-0 md:space-y-0">
//             <a
//               href={alphafiLink}
//               className="hover:text-[#73A6FC] text-[4.18vw] md:text-[0.937vw] font-poppins font-bold"
//             >
//               ALPHA FI
//             </a>
//             <a
//               href={documentationLink}
//               className="hover:text-[#73A6FC] text-[4.18vw] md:text-[0.937vw] font-poppins font-bold mt-2 md:mt-0 md:ml-[2.76vw]"
//             >
//               DOCS
//             </a>
//           </div>
//
//           <div className="block md:hidden flex justify-center items-center space-x-10 pt-[20vw]">
//             <a href={twitterLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isTwitterHovered ? blueTwitter : twitter}
//                 alt="Twitter"
//                 className="h-6 w-6 md:w-[1.51vw] md:h-[1.38vw]"
//                 onMouseEnter={() => setIsTwitterHovered(true)}
//                 onMouseLeave={() => setIsTwitterHovered(false)}
//               />
//             </a>
//             <a href={telegramLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isTelegramHovered ? blueTelegram : telegram}
//                 alt="Telegram"
//                 className="h-6 w-6 md:w-[1.65vw] md:h-[1.36vw]"
//                 onMouseEnter={() => setIsTelegramHovered(true)}
//                 onMouseLeave={() => setIsTelegramHovered(false)}
//               />
//             </a>
//             <a href={mediumLink} target="_blank" rel="noreferrer" className="">
//               <img
//                 src={isMediumHovered ? blueMedium : medium}
//                 alt="Medium"
//                 className="h-6 w-6 md:w-[2.09vw] md:h-[1.18vw]"
//                 onMouseEnter={() => setIsMediumHovered(true)}
//                 onMouseLeave={() => setIsMediumHovered(false)}
//               />
//             </a>
//           </div>
//           <p className="block md:hidden mx-auto text-[#555555] font-inter font-normal pt-[5vw] text-[3.72vw] text-center w-[55%]">
//             Copyright © 2024 Staked SUI. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;
