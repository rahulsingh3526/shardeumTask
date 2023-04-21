import React from "react";
import Image from "next/image";

import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["600", "800"],
});

function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-12 mx-auto max-w-7xl">
        <div className=" order-1">
          <h1 className={`${kanit.className} text-6xl mb-2 leading-none`}>
            Mint the <span className=" font-extrabold">NFT</span> you desire
          </h1>
          <p className=" text-lg">
            Find unique digital asset with our NFT minting page. Mint popular
            and amazing artworks on multiple chains to own-one-of-a-kind digital
            collectibles.
          </p>
          <div className="flex mt-8 space-x-10">
            {/* <button className="bg-[#7ec53a] py-3 px-6 font-semibold rounded-full">
              Explore
            </button> */}
            <button className="border-2 rounded-full px-4 py-2">
              Get an NFT
            </button>
          </div>
        </div>
        <div className=" justify-self-center mt-12 md:mt-0 md:justify-self-end order-2">
          <Image
            className="rounded-lg"
            src="/hero.jpg"
            alt="nft-illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
