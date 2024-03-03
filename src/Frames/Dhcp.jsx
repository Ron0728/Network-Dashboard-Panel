import React from "react";

const Dhcp = () => {
  return (
    <div className="flex flex-col bg-gray-400 w-full h-full gap-3 p-5">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[45%] shadow-lg shadow-black">
        <h1 className="font-bold ">Please choose device :</h1>
        <div className="flex h-full gap-3 p-3">
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[45%] shadow-lg shadow-black">
        <h1 className="font-bold ">Please choose an Interface:</h1>
        <div className="flex h-full gap-3 p-3">
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[45%] shadow-lg shadow-black">
        <h1 className="font-bold ">Please choose a desired Network:</h1>
        <div className="flex h-full gap-3 p-3">
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
          <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
            PC1
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-6 ">
        <button className="bg-green-600 hover:bg-green-950 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
          Apply DHCP
        </button>
        <button className="bg-orange-700 hover:bg-red-700 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
          Discard Configs
        </button>
      </div>
    </div>
  );
};

export default Dhcp;
