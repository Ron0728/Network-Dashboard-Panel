import React from "react";
// import "C:/Users/hasn/Desktop/Network-DashBoard-main/src/Css/ON-OFFButton.css";
import Radarchart from "../Charts/Radarchart";
const Security = () => {
  return (
    <div className="flex w-full h-full bg-gray-400 p-5 gap-5 font-bold justify-around">
      <div className="flex flex-col w-full gap-5 ">
        <div className="flex gap-5 h-1/2">
          <div className="flex flex-col justify-around items-center bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
            <div>firewall</div>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col justify-around items-center bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
            <div>VPN</div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex gap-5 h-1/2">
          <div className="flex flex-col justify-around items-center bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
            <div>System</div>
            <div>status</div>
          </div>
          <div className="flex flex-col justify-around items-center bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
            <div>Storage</div>
            <div>Status : Good</div>
            <div>Used : 458.67 GB / 1 TB</div>
            <div className="bg-slate-400 w-full flex h-5">
              <div className="w-[45%] bg-red-700"></div>
              <div className="w-[5%] bg-yellow-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full rounded-3xl shadow-black shadow-inner">
        <Radarchart />
      </div>
    </div>
  );
};

export default Security;
