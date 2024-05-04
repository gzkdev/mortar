import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
