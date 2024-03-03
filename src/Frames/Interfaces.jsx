import React from "react";

const Interfaces = () => {
  return (
    <div className="flex flex-col bg-transparent p-5 w-full h-full justify-center items-center">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-10 p-5 w-full h-fitt shadow-lg shadow-black">
        <div className="flex justify-between items-center">
          <h1 className="font-bold ">Interfaces of Router 1</h1>
          <div className="flex w-[75%] gap-5 justify-end">
            <button className="bg-gray-900 hover:bg-orange-700 w-[20%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              R1
            </button>
            <button className="bg-gray-900 hover:bg-orange-700 w-[20%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              R2
            </button>
            <button className="bg-gray-900 hover:bg-orange-700 w-[20%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              R3
            </button>
            <button className="bg-gray-900 hover:bg-orange-700 w-[20%]  text-white  shadow-lg shadow-black p-2 rounded-3xl">
              R4
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center w-full gap-5">
          <div className="flex items-center shadow-black shadow-md  gap-3 p-3 h-[80%] bg-opacity-30 rounded-full bg-gradient-to-r from-[rgb(4,163,123)] to to-[rgb(197,222,221)]">
            <div className="text-gray-700">Router 1</div>
            <div className="font-semibold">
              <input type="checkbox" /> Active
            </div>
          </div>
          <div className="flex items-center shadow-black shadow-md p-3 h-[70%] w-[50%] font-bold rounded-full bg-gradient-to-r from-[rgb(255,0,0)] to to-[rgb(255,94,0)]">
            error1
          </div>

          <div className="flex items-center shadow-black shadow-md  p-3 h-[70%] w-[50%] font-bold rounded-full bg-gradient-to-r from-[rgb(101,101,101)] to to-[rgb(0,0,0)]">
            error2
          </div>
          <div className="flex items-center shadow-black shadow-md  p-3 h-[70%] w-[50%] font-bold rounded-full bg-gradient-to-r from-[rgb(255,0,0)] to to-[rgb(255,94,0)]">
            error3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
