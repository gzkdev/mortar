"use client";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

export function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <>
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button
          onClick={() => disconnect()}
          className="py-3 px-6 my-6 bg-slate-800 rounded-2xl flex-grow disabled:opacity-50"
        >
          Disconnect
        </button>
      </>
    );
  }

  return (
    <>
      <div className="text-white">Profile</div>
      <div className="flex flex-col gap-2 w-[320px] text-center">
        {connectors.map((connector) => (
          <button
            disabled={isLoading && connector.id == pendingConnector?.id}
            key={connector.id}
            onClick={() => connect({ connector })}
            className="py-3 border rounded-2xl flex-grow disabled:opacity-50"
          >
            {connector.name}
          </button>
        ))}

        {error && <div className="text-red-500 text-sm">{error.message}</div>}
      </div>
    </>
  );
}
