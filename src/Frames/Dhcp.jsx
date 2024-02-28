import React from "react";

const Dhcp = () => {
  return (
    <div className="flex flex-col w-full h-full p-5">
      <h1 className="flex animate-bounce justify-center font-bold text-white">
        DHCP
      </h1>
      <div className="flex w-full h-full flex-col gap-5 ">
        <div className="flex flex-col place-content-center bg-white bg-opacity-30 h-[35%] p-3 rounded-xl border-2 border-gray-600 shadow-black shadow-md">
          <h1 className="font-bold ">Please choose device :</h1>
          <div className="flex gap-3 p-3">
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              PC1
            </button>
          </div>
        </div>
        <div className="flex flex-col place-content-center bg-white h-[35%]  bg-opacity-30  p-3 rounded-xl border-2 border-gray-600 shadow-black shadow-md">
          <h1 className="font-bold ">Please choose an Interface:</h1>
          <div className="flex gap-3 p-3">
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              f0/0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              f1/0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              f1/0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              e0/0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              e1/0
            </button>
          </div>
        </div>
        <div className="flex flex-col place-content-center bg-white h-[35%]  bg-opacity-30  p-3 rounded-xl border-2 border-gray-600 shadow-black shadow-md">
          <h1 className="font-bold ">Please choose a desired Network:</h1>
          <div className="flex  gap-3 p-3">
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              192.168.192.10
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              255.255.255.0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              255.255.255.0
            </button>
            <button className="bg-gray-900 hover:bg-cyan-600 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
              255.255.255.0
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <button className="bg-green-600 hover:bg-green-950 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
            Apply DHCP
          </button>
          <button className="bg-orange-700 hover:bg-red-700 w-[10%] text-white  shadow-lg shadow-black p-2 rounded-3xl">
            Discard Configs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dhcp;
