import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Web3 starter kit Hey</h1>
      <Profile />
    </main>
  );
}
