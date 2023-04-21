import React from "react";

function MintForm() {
  return (
    <form className="mx-auto max-w-lg px-8 py-8 bg-white bg-opacity-30 rounded-xl pb-12">
      <div className="flex flex-col items-center mb-2">
        <input
          className="bg-gray-500 text-white font-semibold px-4 py-2 border-none outline-none rounded-full"
          type="number"
          name="nfts"
          id="nfts"
        />
        <label htmlFor="nfts">No. of NFTs</label>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-br from-blue-800 to-blue-900 font-bold px-5 py-2 rounded-full">
          Mint
        </button>
      </div>
      <div className="text-center mt-6">
        <button className="bg-gradient-to-br from-primary to-green-600 font-bold px-5 py-2 rounded-full">
          Check balance
        </button>
        <p className="font-semibold text-2xl">{0}</p>
      </div>
    </form>
  );
}

export default MintForm;
