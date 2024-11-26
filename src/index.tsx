import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {
  SuiClientProvider,
  createNetworkConfig,
  WalletProvider,
} from "@mysten/dapp-kit";
import "@mysten/dapp-kit/dist/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getSuiNodeUrl } from 'stsui-sdk';
const queryClient = new QueryClient();
// const url = "https://fullnode.mainnet.sui.io:443";
const sui_node_url = getSuiNodeUrl()
const { networkConfig } = createNetworkConfig({
  testnet: { url: sui_node_url }
}); //"https://fullnode.mainnet.sui.io:443"

const container = document.getElementById("app");
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
if (container) {
  const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider
          //theme={[{ variables: lightTheme }]}
          autoConnect
        >
          <App />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
} else {
  console.error("No root element found!");
}