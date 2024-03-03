import React from "react";
import DropDown from "../Components/DropDown";
import { Outlet } from "react-router-dom";

const TrubleShooting = () => {
  return (
    <div className="flex flex-col bg-gray-400 p-5 w-full h-full ">
      <div className=" flex items-center gap-5 h-[10%] w-full">
        <h1 className="text-white font-bold ">Trublrshooting</h1>
        <DropDown />
      </div>
      <div className=" w-full h-fitt bg-gray-400 overflow-y-scroll ">
        <Outlet />
      </div>
    </div>
  );
};
export default TrubleShooting;
