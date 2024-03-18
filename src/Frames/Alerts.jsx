import React from "react";
import DAlertMSG from "../Components/DAlertMSG";
import GAlertMSG from "../Components/GAlertMSG";
import WAlertMSG from "../Components/WAlertMSG";
import SAlertMSG from "../Components/SAlertMSG";

const Alerts = () => {
  return (
    <div className="flex gap-3 p-5 w-full bg-gray-400">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex items-center justify-center pt-5 text-2xl text-[rgb(255,0,0)] font-bold">
          Danger Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          <DAlertMSG />
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex items-center justify-center pt-5 text-2xl text-[rgb(92,206,92)] font-bold">
          Good Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          <GAlertMSG />

          <GAlertMSG />
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex drop-shadow-2xl shadow-black items-center justify-center pt-5 text-2xl text-yellow-500 font-bold">
          Warning Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          <WAlertMSG />
          <WAlertMSG />
          <WAlertMSG />
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex items-center justify-center pt-5 text-2xl text-gray-800 font-bold">
          Suggested Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          <SAlertMSG />
          <SAlertMSG />
          <SAlertMSG />
          <SAlertMSG />
        </div>
      </div>
    </div>
  );
};

export default Alerts;
