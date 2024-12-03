// import { SuiTokensArray } from "./suiTokensList"
// import { getAllBalances, getLatestTokenPricePairs } from "stsui-sdk";
// import { BigNumber } from "bignumber.js";
//
// const price_token_arr: any = [
//   "SUI/USD",
//   "WUSDC/USD",
//   "USDT/USD",
//   "NAVX/USD",
//   "VSUI/USD",
//   "AFSUI/USD",
//   "HASUI/USD",
//   "CETUS/USD",
//   "TURBOS/USD",
//   "SCA/USD",
//   "WETH/USD",
//   "APT/USD",
//   "WSOL/USD",
//   "SLP/USD",
//   "WBTC/USD",
//   "CELO/USD",
//   "ALPHA/USD",
//   "BUCK/USD",
//   "USDC/USD",
//   "DEEP/USD",
//   "ETH/USD",
//   "AUSD/USD",
//   "FUD/USD",
//   "USDY/USD",
// ];
//
// export const fetchUserBalanceArray = async (userAddress: any) => {
//   const revisedTokenArray: any = [];
//   let tokenBalanceArr: any = [];
//   try {
//     if (userAddress) {
//       tokenBalanceArr = await getAllBalances(userAddress);
//     }
//
//     const token_price_arr = await getLatestTokenPricePairs(
//       price_token_arr,
//       false
//     );
//
//     SuiTokensArray.map((token: any) => {
//       if (userAddress) {
//         const token_obj_with_balance = tokenBalanceArr.find(
//           (token_obj: any) =>
//             token_obj.tokenName.toLowerCase() === token.symbol.toLowerCase()
//         );
//         if (token_obj_with_balance !== undefined) {
//           token.balance = parseFloat(
//             new BigNumber(token_obj_with_balance.balance)
//               .dividedBy(10 ** token.decimals)
//               .toString()
//           );
//           token.balanceWithPrecision = token_obj_with_balance.balance;
//         } else {
//           token.balance = 0;
//           token.balanceWithPrecision = 0;
//         }
//         token.price = token_price_arr[token.symbol.toUpperCase() + "/USD"]
//           ? token_price_arr[token.symbol.toUpperCase() + "/USD"]
//           : 0;
//         token.usdValue =
//           token.price && token.balance ? token.balance * token.price : 0;
//           revisedTokenArray[token.symbol.toLowerCase()] = token;
//       } else {
//         token.balance = 0;
//         token.balanceWithPrecision = 0;
//         token.price = token_price_arr[token.symbol.toUpperCase() + "/USD"]
//           ? token_price_arr[token.symbol.toUpperCase() + "/USD"]
//           : 0;
//         token.usdValue =
//           token.price && token.balance ? token.balance * token.price : 0;
//           revisedTokenArray[token.symbol.toLowerCase()] = token;
//       }
//     });
//     return revisedTokenArray;
//   } catch (error) {
//     console.log("err in fetchUserBalanceArray", error);
//     return SuiTokensArray;
//   }
// };
//
//
