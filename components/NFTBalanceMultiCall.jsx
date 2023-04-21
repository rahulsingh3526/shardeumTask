import { BigNumber } from "ethers";
import { useContractInfiniteReads, paginatedIndexesConfig } from "wagmi";
import NftCard from "./NftCard";

export default function NFTBalanceMultiCall(props) {
  const ContractConfig = {
    address: `0x${props.data.address}`,
    abi: props.data.abi,
  };
  const { data, fetchNextPage } = useContractInfiniteReads({
    cacheKey: "mlootAttributes",
    ...paginatedIndexesConfig(
      (index) => {
        return [
          {
            ...ContractConfig,
            functionName: "tokenURI",
            args: [BigNumber.from(index)],
          },
        ];
      },
      { start: 0, perPage: 5, direction: "increment" }
    ),
  });
  console.log(data);
  return (
    <div className="flex flex-col gap-4">
      {data?.pages[0].map((x, index) => (
        <>
          <p
            key={index}
            className=" bg-blue-300 py-3 px-3 rounded-lg text-center"
          >
            {" "}
            {x}
          </p>
        </>
      ))}
    </div>
  );
}
