"use client";

import { useModal } from "connectkit";

export default function Home() {
  const { setOpen } = useModal();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center gap-4">
      <h1 className="text-4xl font-bold">Mortar</h1>
      <p className="mb-4">
        A light weight blueprint for building decentralized apps
      </p>
      <button
        onClick={() => setOpen(true)}
        className="py-2 px-4 rounded-lg inline-flex outline bg-zinc-800 text-zinc-50 hover:bg-zinc-700 transition"
      >
        Connect wallet
      </button>
    </main>
  );
}
