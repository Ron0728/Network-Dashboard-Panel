import React from "react";

const TempAndVoltage = ({ T, V }) => {
  return (
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fit shadow-lg shadow-black ">
      <div className="font-bold text-xl">Temperature & Voltage</div>

      <div className=" flex  w-full gap-5 justify-around ">
        <div className=" flex flex-col  w-[50%]">
          <div className="font-bold">Temperature</div>
          <div>
            <textarea
              className="w-full shadow-inner shadow-black rounded-md p-2 outline-none"
              value={T}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-end   w-[50%]">
          <div className="font-bold">Voltage</div>
          <div>
            <textarea
              className="w-full shadow-inner shadow-black rounded-md p-2 outline-none"
              value={V}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempAndVoltage;  //Done
