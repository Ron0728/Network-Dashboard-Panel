import React from "react";
import Linechart from "../Charts/Linechart";

const Protocols = () => {
  return (
    <div className="flex h-full w-full bg-gray-400 ">
      <div className="flex flex-col gap-24 m-5 justify-center items-center">
        <h1 className="font-bold ">
          The Network You Are Managing is working with NAME Protocol.
        </h1>
        <span className="">
          You Can View The Effects of This Protocol on the Network with the
          Diagram:
        </span>
        <div>
          <div className="font-bold ">Try Another Protocol:</div>
          <input className=" bg-gray-300 shadow-inner shadow-black text-white rounded-2xl outline-none  p-2" />
          <button className=" bg-blue-700 text-white p-5 rounded-2xl shadow-black shadow-md font-bold ml-4">
            Try
          </button>
        </div>
      </div>
      <div className="bg-[rgb(255,249,249)] w-1/2 border-4 border-black m-5">
        <Linechart />
      </div>
    </div>
  );
};

export default Protocols;
