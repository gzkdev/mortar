"use client";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import ClientComponent from "../ClientComponent";

export default function Profile() {
  const { address, connector, isConnected } = useAccount();

  //   const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <ClientComponent>
        {/* {ensAvatar && <img src={ensAvatar!} alt="ENS Avatar" />} */}
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button
          onClick={() => disconnect()}
          className="py-3 px-6 my-6 bg-slate-800 rounded-2xl flex-grow disabled:opacity-50"
        >
          Disconnect
        </button>
      </ClientComponent>
    );
  }

  return (
    <ClientComponent>
      <div className="text-white">Profile</div>
      <div className="flex flex-col gap-2 w-[320px] text-center">
        {connectors.map((connector) => (
          <button
            disabled={isLoading && connector.id == pendingConnector?.id}
            key={connector.id}
            onClick={() => connect({ connector })}
            className="py-3 bg-slate-800 rounded-2xl flex-grow disabled:opacity-50"
          >
            {connector.name}
            {/* {` ${connector.ready}`} */}
            {/* {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"} */}
          </button>
        ))}

        {error && <div className="text-red-500 text-sm">{error.message}</div>}
      </div>
    </ClientComponent>
  );
}
