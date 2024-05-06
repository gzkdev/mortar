"use client";

import { mainnet } from "wagmi/chains";
import {
  WagmiProvider,
  createConfig,
  createStorage,
  cookieStorage,
} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    appName: "Mortar",
    appDescription: "A light weight blueprint for building decentralized apps",
    appUrl: "https://mortar-dusky.vercel.app/", // Add the url of your app
    appIcon: "https://family.co/logo.png", // Add the url of your icon
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
