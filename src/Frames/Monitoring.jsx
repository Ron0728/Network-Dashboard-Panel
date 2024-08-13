import React from "react";
import Running_Configurations from "../Components/Running_Configurations";
import Routes_Monitoring from "../Components/Routes_Monitoring";
import Logging from "../Components/Logging";
import Interface_Info_Monitoring from "../Components/Interface_Info_Monitoring";

const Monitoring = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <Running_Configurations />
      <Routes_Monitoring />
      <Logging />
      <Interface_Info_Monitoring />
    </div>
  );
};

export default Monitoring; //Done
