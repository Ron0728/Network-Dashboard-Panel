import React, { useState } from "react";
import Start_up_Configuration from "../Components/Start_up_Configuration";
import Access_Lists from "../Components/Access_Lists";
import Routes_Config from "../Components/Routes_Config";

const Report = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <Start_up_Configuration />
      <Access_Lists />
      <Routes_Config />
    </div>
  );
};

export default Report; //Done
