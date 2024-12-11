import React, { useState, useEffect, Fragment } from "react";
import { useCurrentAccount, ConnectModal } from "@mysten/dapp-kit";

const AlphaConnectWallet = () => {
  const currentAccount = useCurrentAccount();
  const [open, setOpen] = useState(false);
  const [shortAddress, setShortAddress] = useState("connect wallet");

  useEffect(() => {
    if (currentAccount && currentAccount.address) {
      const mini_address = getAddress(currentAccount);
      setShortAddress(mini_address);
    }
  }, [currentAccount]);

  const getAddress = (addressObj: any) => {
    const address = addressObj.address;
    const add1 = address.substring(0, 4);
    const add2 = address.substring(address.length - 4);
    const finalAdd = `${add1}....${add2}`;
    return finalAdd;
  };

  return (
    <Fragment>
      {
        <div>
          {currentAccount && currentAccount.address ? (
            <button>{shortAddress}</button>
          ) : (
            <ConnectModal
              trigger={<button>Connect Wallet</button>}
              open={open}
              onOpenChange={(isOpen) => setOpen(isOpen)}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default AlphaConnectWallet;
