"use client";

import { useModal } from "connectkit";

export default function Home() {
  const { setOpen } = useModal();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center space-y-10 text-xl">
      <h1 className="text-6xl font-semibold">Mortar</h1>
      <p>A light weight blueprint for building decentralized apps</p>
      <button
        onClick={() => setOpen(true)}
        className="py-4 px-6 rounded-full inline-flex outline bg-zinc-800 text-zinc-50 hover:bg-zinc-700 transition"
      >
        Connect wallet
      </button>
    </main>
  );
}
