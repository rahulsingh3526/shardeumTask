import React from "react";
import NftCard from "./NftCard";

function NftContainer() {
  return (
    <section className="mt-40 py-16 mx-auto max-w-7xl">
      <h1 className="text-center text-3xl font-semibold">What we have?</h1>
      <article className="bg-white bg-opacity-40  mt-16 rounded-lg px-16 py-12">
        <h2>Popular Arts </h2>
        <div className=" grid grid-cols-responsive gap-4">
          {/* <NftCard number={0} /> */}
          <NftCard number={1} />
          <NftCard number={2} />
          {/* <NftCard number={3} />
          <NftCard number={4} /> */}
        </div>
      </article>
    </section>
  );
}

export default NftContainer;
