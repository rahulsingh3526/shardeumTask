import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IpfsImage } from "react-ipfs-image";

function NftCard({ number }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImageHash = async (i) => {
      const tokenURI = `ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq`;
      const gatewayUrl = tokenURI?.replace(
        "ipfs://",
        "https://gateway.pinata.cloud/ipfs"
      );

      const json = await fetch(gatewayUrl + "/" + `${i}`).then((res) =>
        res.json()
      );
      console.log(json);
      const imageurl = json.image?.replace("ipfs://", "");
      setImage(imageurl);
    };
    getImageHash(number);
  }, []);
  console.log(image);
  return (
    <div className="bg-[#764ba2] bg-opacity-40 py-6 px-4 rounded-lg">
      <div className=" relative">
        <IpfsImage
          hash={image}
          gatewayUrl="https://gateway.pinata.cloud/ipfs"
          alt="my image"
          className="mt-2 rounded w-[50px] h-[50px]"
        />
      </div>
      <div className="flex justify-between mt-8 mb-4">
        <div>
          <p className="font-semibold text-base">Logo</p>
          <p className="text-sm">Shardeum</p>
        </div>
        <div>
          <p className="text-sm">Ends in</p>
          <p className="font-semibold">22h 20m</p>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">1.225 ETH</h3>
        {/* <button className="bg-[#7fa53a] px-5 py-1 font-bold rounded-full active:translate-y-0 hover:-translate-y-1 transition-transform">
          Mint
        </button> */}
      </div>

      <div></div>
    </div>
  );
}

export default NftCard;
