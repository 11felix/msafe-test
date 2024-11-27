import React from "react";
interface InputContainerProps {
    title: string;
    balance: number;
    tokenName: string;
    tokenIcon: string;
    isMaxBtn: boolean;
    setInputVal?: any;
    setInputValForDisplay?: any;
    inputVal?: string;
    inputValForDisplay?: string;
    userTokenBalancesArray?: any;
    stSuiExchangeRateValue?: string;
}
declare const InputContainer: React.FC<InputContainerProps>;
export default InputContainer;
