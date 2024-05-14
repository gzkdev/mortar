"use client";

import { useModal } from "connectkit";

export default function Home() {
  const { setOpen } = useModal();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center gap-4">
      <h1 className="text-4xl font-bold">Mortar</h1>
      <p className="mb-8">
        A light weight blueprint for building decentralized apps
      </p>
      <div className="flex items-center gap-4 flex-wrap text-center">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 rounded-full bg-zinc-200 text-zinc-600 hover:bg-zinc-200/50 transition flex-grow"
        >
          View on Github
        </a>
        <button
          onClick={() => setOpen(true)}
          className="py-2 px-4 rounded-full bg-zinc-800 text-zinc-50 hover:bg-zinc-700 transition flex-grow"
        >
          Connect wallet
        </button>
      </div>
    </main>
  );
}
