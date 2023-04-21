import React, { useState } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";

import { Sedgwick_Ave } from "next/font/google";

const sedwickAve = Sedgwick_Ave({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-sedwick",
});

function Navbar() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <header className="flex justify-between py-12 mx-auto max-w-7xl">
      <h1 className={`${sedwickAve.variable} font-sans text-primary text-5xl `}>
        nfTs
      </h1>
      <div className="dropdown">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Change network
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {chains.map((x, index) => (
              <li key={index}>
                <button
                  disabled={!switchNetwork || x.id === chain?.id}
                  key={x.id}
                  onClick={() => switchNetwork?.(x.id)}
                >
                  {x.name}
                  {isLoading && pendingChainId === x.id && " (switching)"}
                </button>
              </li>
            ))}
          </ul>
          {chain && <div>Connected to {chain.name}</div>}
        </div>

        <div>{error && error.message}</div>
      </div>
    </header>
  );
}

export default Navbar;
