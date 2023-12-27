import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Web3Provider from "@/provider/wagmi-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 React Boilerplate",
  description:
    "Boilerplate for a web3 app generated with NextJs and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
