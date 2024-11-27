import React from "react";
interface CommonButtonProps {
    text: string;
    isWalletConnected: boolean;
    disabled: boolean;
    callFunction?: any;
    isLoading?: boolean;
}
declare const CommonButton: React.FC<CommonButtonProps>;
export default CommonButton;
