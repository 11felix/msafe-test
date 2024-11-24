import React, { useEffect, useRef, useState } from "react";
import stSuiLogo from "../assets/icons/stSuiLogo.svg";
import walletIcon from "../assets/icons/walletIcon.svg";
import whiteWallet from "../assets/icons/whiteWallet.svg";
import CrossIcon from "../assets/icons/black_cross_icon.svg";
import MenuIcon from "../assets/icons/menuIcon.svg";
import twitter from "../assets/icons/twitter.svg";
import telegram from "../assets/icons/telegram.svg";
import medium from "../assets/icons/medium.svg";
import copy_icon from "../assets/icons/copy.svg";
import suiscan_icon from "../assets/icons/suiscan.svg";
import white_up_arrow from "../assets/icons/white_up_arrow.svg";
import black_down_arrow from "../assets/icons/black_down_arrow.svg";
import {
  useCurrentAccount,
  ConnectModal,
  useDisconnectWallet,
  // useAccounts, 
  // useSwitchAccount
} from "@mysten/dapp-kit";
const windowWidth: any = window.innerWidth;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentAccount = useCurrentAccount();
  // const { mutate: switchAccount } = useSwitchAccount();
	// const accounts = useAccounts();
  const [openWalletOptions, setOpenWalletOptions] = useState(false);
  const [showDisconnectPopup, setShowDisconnectPopup] = useState(false);
  const { mutate: disconnect } = useDisconnectWallet();
  const [shortAddress, setShortAddress] = useState("connect wallet");
  const walletPopUpRef = useRef<HTMLDivElement>(null);
  const walletPopUpRefMob = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    if (currentAccount && currentAccount.address) {
      const mini_address = getAddress(currentAccount);
      setShortAddress(mini_address);
    }
  }, [currentAccount]);

  // const handleOutsideClick = (event: any) => {
  //   if (
  //     walletPopUpRef.current &&
  //     walletPopUpRef.current.contains(event.target)
  //   ) {
  //     console.log("in IF")
  //   } else {
  //     console.log("in ELSE")
  //     setShowDisconnectPopup(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [walletPopUpRef]);

  // const handleOutsideClickMob = (event: any) => {
  //   if (
  //     walletPopUpRefMob.current &&
  //     walletPopUpRefMob.current.contains(event.target)
  //   ) {
  //   } else {
  //     setShowDisconnectPopup(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClickMob);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClickMob);
  //   };
  // }, [walletPopUpRefMob]);

  const getAddress = (addressObj: any) => {
    const address = addressObj.address;
    const add1 = address.substring(0, 4);
    const add2 = address.substring(address.length - 4);
    const finalAdd = `${add1}....${add2}`;
    return finalAdd;
  };

  const callDisconnect = () => {
    disconnect();
    setShowDisconnectPopup(false);
    setOpenWalletOptions(false);
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
        {currentAccount && currentAccount.address ?
          <button
            onClick={() => setShowDisconnectPopup(!showDisconnectPopup)}
            className="flex items-center border-[0.104vw] border-[#000000] bg-[#E9EFF4] h-[2.5vw] px-[1.204vw] rounded-[0.62vw] hover:bg-black hover:text-white text-[1.04vw] font-poppins font-medium group"
          >
            <img
              src={walletIcon}
              alt="Wallet Icon"
              className="h-[0.917vw] w-[1.12vw] mr-2 text-black group-hover:invert"
            />
            {shortAddress}
            <img
              src={showDisconnectPopup ? black_down_arrow : white_up_arrow}
              alt="Wallet Icon"
              className={`h-[0.2364vw] w-[0.46875vw] ml-[1.14vw] text-black group-hover:invert ${showDisconnectPopup ? "rotate-180" : ""}`}
            />
          </button>
          :
          <ConnectModal
              trigger={
                <button
                  className="flex items-center border-[0.104vw] border-[#000000] bg-[#E9EFF4] h-[2.5vw] px-[1.204vw] rounded-[0.62vw] hover:bg-black hover:text-white text-[1.04vw] font-poppins font-medium group"
                >
                  <img
                    src={walletIcon}
                    alt="Wallet Icon"
                    className="h-[0.917vw] w-[1.12vw] mr-2 text-black group-hover:invert"
                  />
                  Connect Wallet
                </button>
              }
              open={openWalletOptions}
              onOpenChange={(isOpen) => setOpenWalletOptions(isOpen)}
            />
        }
        {
          showDisconnectPopup && 
          <div className="flex flex-col right-[5.8vw] top-[6vw] absolute bg-[#FFFFFF] shadow-[0 0.052vw 0.416vw #2D9EFF1A] w-fit h-fit p-[1.24vw] rounded-[0.729vw]" ref={walletPopUpRef}>
            <p className="font-intermedium text-[#829CB2] text-[0.8854vw]">Connected</p>
            <div className="flex flex-row items-center mt-[0.52vw]">
              <p className="font-poppinsmedium text-[#000000] text-[1.04vw]">{shortAddress}</p>
              <img src={suiscan_icon} className="h-[0.944vw] w-[0.944vw] ml-[4.375vw] cursor-pointer" onClick={() => currentAccount && currentAccount.address &&
                      window.open(
                        "https://suivision.xyz/account/" +
                        currentAccount.address,
                        "_blank",
                      )} />
              <img src={copy_icon} className="h-[0.944vw] w-[0.944vw] ml-[0.708vw] cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(
                        currentAccount ? currentAccount.address : "",
                      );
                    }} />
            </div>
            <div className="flex justify-center text-[0.78125vw] rounded-[0.416vw] font-poppinssemibold px-[3.802vw] py-[0.416vw] border-[2px] border-[#000000] mt-[1.406vw] cursor-pointer" onClick={callDisconnect}>
              DISCONNECT
            </div>
          </div>
        }
      </div>

      <div className="flex md:hidden">
      {currentAccount && currentAccount.address ?
        <button
          className="flex items-center bg-black px-[3.02vw] py-[1.62vw] mr-[3.02vw] rounded-[2.32vw] text-white text-[3.02vw] font-poppins font-medium"
          onClick={() => setShowDisconnectPopup(!showDisconnectPopup)}
        >
          {shortAddress}
        </button>
        :
        <ConnectModal
            trigger={
            <button
              className="flex items-center bg-black px-[3.02vw] py-[1.62vw] mr-[3.02vw] rounded-[2.32vw] text-white text-[3.02vw] font-poppins font-medium"
            >
              Connect Wallet
            </button>
            }
            open={openWalletOptions}
            onOpenChange={(isOpen) => setOpenWalletOptions(isOpen)}
          />
        }
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
        {
          showDisconnectPopup && windowWidth < 800 && 
          <div className="flex flex-col right-[4vw] top-[14vw] absolute bg-[#FFFFFF] shadow-[0 0.052vw 0.416vw #2D9EFF1A] w-fit h-fit p-[4.5vw] rounded-[3.5vw] z-10" ref={walletPopUpRefMob}>
            <p className="font-intermedium text-[#829CB2] text-[3.5vw]">Connected</p>
            <div className="flex flex-row items-center mt-[1.52vw]">
              <p className="font-poppinsmedium text-[#000000] text-[4.25vw]">{shortAddress}</p>
              <img src={suiscan_icon} className="h-[4.5vw] w-[4.5vw] ml-[4.375vw] cursor-pointer" onClick={() => currentAccount && currentAccount.address &&
                      window.open(
                        "https://suivision.xyz/account/" +
                        currentAccount.address,
                        "_blank",
                      )} />
              <img src={copy_icon} className="h-[4.5vw] w-[4.5vw] ml-[2.4vw] cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(
                        currentAccount ? currentAccount.address : "",
                      );
                    }} />
            </div>
            <div className="flex justify-center text-[3.5vw] rounded-[1.6vw] font-poppinssemibold px-[3.802vw] py-[0.416vw] border-[2px] border-[#000000] mt-[1.406vw] cursor-pointer" onClick={callDisconnect}>
              DISCONNECT
            </div>
          </div>
        }
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-black focus:outline-none"
          >
            <img
              src={CrossIcon}
              alt="Wallet Icon"
              className="h-[4.917vw] w-[5.12vw] mr-2 mt-2 text-black group-hover:invert"
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
          {currentAccount && currentAccount.address ?
          <button
            onClick={() => setShowDisconnectPopup(!showDisconnectPopup)}
            className="flex items-center bg-black px-[4.18vw] py-[2.32vw] rounded-[12px] text-[4.65vw] font-poppins font-medium text-white mt-[65vw]"
          >
            <img
              src={whiteWallet}
              alt="Wallet Icon"
              className="h-[4vw] w-[4.89vw] mr-[2.63vw] text-white"
            />
           {shortAddress}
          </button>
          :
          <ConnectModal
            trigger={
              <button
                onClick={() => {
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
            }
              open={openWalletOptions}
              onOpenChange={(isOpen) => setOpenWalletOptions(isOpen)}
            />
          }
          {
          showDisconnectPopup && windowWidth < 800 && 
          <div className="flex flex-col right-[3vw] top-[14vw] absolute bg-[#FFFFFF] shadow-[0 0.052vw 0.416vw #2D9EFF1A] w-fit h-fit p-[4.5vw] rounded-[1.2vw] z-10" ref={walletPopUpRefMob}>
            <p className="font-intermedium text-[#829CB2] text-[3.5vw]">Connected</p>
            <div className="flex flex-row items-center mt-[1.52vw]">
              <p className="font-poppinsmedium text-[#000000] text-[4.25vw]">{shortAddress}</p>
              <img src={suiscan_icon} className="h-[4.5vw] w-[4.5vw] ml-[4.375vw] cursor-pointer" onClick={() => currentAccount && currentAccount.address &&
                      window.open(
                        "https://suivision.xyz/account/" +
                        currentAccount.address,
                        "_blank",
                      )} />
              <img src={copy_icon} className="h-[4.5vw] w-[4.5vw] ml-[1.4vw] cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(
                        currentAccount ? currentAccount.address : "",
                      );
                    }} />
            </div>
            <div className="flex justify-center text-[2.5vw] rounded-[1.6vw] font-poppinssemibold px-[3.802vw] py-[0.416vw] border-[2px] border-[#000000] mt-[1.406vw] cursor-pointer" onClick={callDisconnect}>
              DISCONNECT
            </div>
          </div>
        }
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
