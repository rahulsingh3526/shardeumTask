import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";
import NftContainer from "@/components/NftContainer";
import MintForm from "@/components/MintForm";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useNetwork,
  useSwitchNetwork,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import { contractData } from "../contracts/data";
import { useState } from "react";
import NFTBalance from "../components/NFTBalanceMultiCall";
import ReactConfetti from "react-confetti";
import { useEffect } from "react";
import NFTBalanceMultiCall from "../components/NFTBalanceMultiCall";
import { IpfsImage } from "react-ipfs-image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [task, setTask] = useState("");
  const [mintSuccess, setMintSuccess] = useState(false);
  const [currentContractData, setCurrentContractData] = useState(
    contractData[0]
  );

  const { address } = useAccount();

  const { chain } = useNetwork();
  const {
    chains,
    error,
    isLoading: isLoading1,
    pendingChainId,
    switchNetwork,
  } = useSwitchNetwork();

  // const currentContractData = contractData.find(
  //   (data) => data.chainId === chain?.id
  // );
  // console.log(currentContractData);

  useEffect(() => {
    const newContractData = contractData.find((c) => c.chainId === chain?.id);
    setCurrentContractData(newContractData);
  }, [chain]);

  const { config } = usePrepareContractWrite({
    address: `0x${currentContractData.address}`,
    abi: currentContractData.abi,
    functionName: "mint",
    args: [task, { value: "10000000000000000" }],
  });
  const { isLoading, isSuccess, writeAsync } = useContractWrite(config);

  const { data } = useContractRead({
    address: `0x${currentContractData.address}`,
    abi: currentContractData.abi,
    functionName: "mint",
    watch: true,
  });

  const { data: tokenIdData } = useContractRead({
    address: `0x${currentContractData.address}`,
    abi: currentContractData.abi,
    functionName: "walletOfOwner",
    args: [address],
    watch: true,
  });

  async function handleChange() {
    setMintSuccess(false);
    try {
      await writeAsync?.();
      setMintSuccess(true);
    } catch (error) {
      console.error(error);
    }

    setTask("");
  }

  console.log(data);
  return (
    <>
      <main
        className={`${inter.className} bg-main-gradient min-h-screen text-lg px-12`}
      >
        <ConnectButton />
        <Navbar />
        <Hero />
        {/* <MintForm /> */}

        <div className=" flex flex-col items-center justify-around bg-p-light w-full px-40">
          <p className="font-bold text-p-extra m-5">nft quantity to mint</p>
          {mintSuccess && <ReactConfetti />}

          <input
            type="number"
            className=" border border-p-extra rounded w-full py-2 px-3 mb-3 text-blue-700 m-5"
            placeholder="nft quantity"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <div className=" m-5">
            <button
              className="btn btn-outline btn-success"
              disabled={!writeAsync}
              onClick={handleChange}
            >
              Mint
            </button>
            {isLoading1 && <div>Check Wallet</div>}
            {isSuccess && <div>Mint complete</div>}
          </div>

          <p>My current nft tokens balances</p>
          <div className="flex flex-row gap-4">
            {tokenIdData?.map((x, index) => (
              <p
                key={index}
                className=" bg-blue-300 py-3 px-3 rounded-lg text-center"
              >
                {" "}
                {x.toNumber()}
              </p>
            ))}
          </div>
        </div>

        <p>My current balances using multicall</p>
        <NFTBalanceMultiCall data={currentContractData} />

        <NftContainer />
      </main>
    </>
  );
}
