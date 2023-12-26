"use client";
import { ReactNode } from "react";

import {
  WagmiConfig,
  createConfig,
  configureChains,
  sepolia,
  mainnet,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

export default function Web3Provider({ children }: { children: ReactNode }) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [sepolia, mainnet],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
      publicProvider(),
    ]
  );

  const config = createConfig({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: process.env.NEXT_PUBLIC_APP_NAME || "Web3 React Starter Kit",
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  });

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
