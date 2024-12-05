import WETHIcon from "../assets/icons/weth.svg";
import WBTCIcon from "../assets/icons/wbtc.svg";
import USDTIcon from "../assets/icons/usdt_svg_icon.svg";
import USDCIcon from "../assets/icons/usdc.png";
import alphaIcon from "../assets/icons/alpha_logo.png";
import suiIcon from "../assets/icons/sui-logo1.svg";
import hasuiIcon from "../assets/icons/hasui.svg";
import usdyIcon from "../assets/icons/usdy.svg";
import vsuiIcon from "../assets/icons/vsui.png";
import naviIcon from "../assets/icons/navi_token.svg";
import cetusIcon from "../assets/icons/cetus_token.svg";
import scallopIcon from "../assets/icons/scallop_token.svg";
import buckIcon from "../assets/icons/buck.svg";
import afsuiIcon from "../assets/icons/afsui.png";
import wsolIcon from "../assets/icons/wsol.png";
import wusdcIcon from "../assets/icons/wusdc.svg";
import ethIcon from "../assets/icons/eth.png";
import deepIcon from "../assets/icons/deep.png";
import fudIcon from "../assets/icons/fud_icon.png";
import ausdIcon from "../assets/icons/ausd.png";

export const getTokenIcon = (tokenName: string) => {
  const token = tokenName.toLowerCase();

  if (token === "eth") {
    return ethIcon;
  }
  if (token === "weth") {
    return WETHIcon;
  }
  if (token === "btcb") {
    return WBTCIcon;
  }
  if (token === "btc") {
    return WBTCIcon;
  }
  if (token === "usdt") {
    return USDTIcon;
  }
  if (token === "usdc") {
    return USDCIcon;
  }
  if (token === "alpha") {
    return alphaIcon;
  }
  if (token === "sui") {
    return suiIcon;
  }
  if (token === "hasui") {
    return hasuiIcon;
  }
  if (token === "usdy") {
    return usdyIcon;
  }
  if (token === "wbtc") {
    return WBTCIcon;
  }
  if (token === "vsui") {
    return vsuiIcon;
  }
  if (token === "navx") {
    return naviIcon;
  }
  if (token === "cetus") {
    return cetusIcon;
  }
  if (token === "scallop" || token === "sca") {
    return scallopIcon;
  }
  if (token === "buck") {
    return buckIcon;
  }
  if (token === "afsui") {
    return afsuiIcon;
  }
  if (token === "wsol" || token === "sol") {
    return wsolIcon;
  }
  if (token === "wsol") {
    return wsolIcon;
  }
  if (token === "wusdc") {
    return wusdcIcon;
  }
  if (token === "deep") {
    return deepIcon;
  }
  if (token === "fud") {
    return fudIcon;
  }
  if (token === "ausd") {
    return ausdIcon;
  }
};
