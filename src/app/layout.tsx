import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "@/providers/web3-provider";

export const metadata: Metadata = {
  title: "Mortar",
  description: "A light weight blueprint for building decentralized apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3Provider>
        <body>{children}</body>
      </Web3Provider>
    </html>
  );
}
