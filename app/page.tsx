import { ClientBoundary } from "@/components/client-boundary";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <ClientBoundary>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold">Web3 starter kit Hey</h1>
        <Profile />
      </main>
    </ClientBoundary>
  );
}
