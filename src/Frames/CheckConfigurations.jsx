import React from "react";

const CheckConfigurations = () => {
  return (
    <div className="flex flex-col bg-transparent  w-full h-full p-5 justify-center items-center">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-10 p-5 w-full h-fitt shadow-lg shadow-black">
        <div className="flex justify-between items-center">
          <h1 className="font-bold ">Check Configurations</h1>
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
        <div className="flex flex-col h-full w-full gap-10">
          <div className="flex items-center justify-between p-3 h-[80%] bg-opacity-30  shadow-black shadow-md rounded-full bg-gradient-to-r from-[rgb(4,163,123)] to to-[rgb(197,222,221)]">
            <div className="text-gray-700">
              Checking Router 1 Configs 'Searching'
            </div>
            <div className="font-semibold">
              <input type="checkbox" /> Active
            </div>
          </div>
          <div className="flex items-center justify-between p-3 h-[70%]  shadow-black shadow-md font-bold rounded-full bg-gradient-to-r from-[rgb(255,0,0)] to to-[rgb(255,94,0)]">
            error1
          </div>
          <div className="flex items-center justify-between p-3 h-[70%]  shadow-black shadow-md font-bold rounded-full bg-gradient-to-r from-[rgb(101,101,101)] to to-[rgb(0,0,0)]">
            error2
          </div>
          <div className="flex items-center justify-between p-3 h-[70%]  shadow-black shadow-md font-bold rounded-full bg-gradient-to-r from-[rgb(255,0,0)] to to-[rgb(255,94,0)]">
            error3
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckConfigurations;
