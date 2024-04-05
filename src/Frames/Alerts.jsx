import React, { useContext } from "react";
import {
  AlertContext,
  AlertContextDHCP,
  AlertContextOSPF,
  AlertContextEGRIP,
} from "../alertsContext";

const Alerts = () => {
  const [alertRip, setAlertRip] = useContext(AlertContext);
  const [alertEgrip, setAlertEgrip] = useContext(AlertContextEGRIP);
  const [alertOspf, setAlertOspf] = useContext(AlertContextOSPF);
  const [alertDhcp, setAlertDhcp] = useContext(AlertContextDHCP);

  return (
    <div className="flex gap-3 p-5 w-full bg-gray-400">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col items-center justify-center pt-5 text-2xl text-[rgb(255,0,0)] font-bold">
          Danger Messages
          <div className="w-[75%] border-transparent border-b-2 border-[rgb(255,0,0)]"></div>
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertDhcp.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col items-center justify-center pt-5 text-2xl text-[rgb(92,206,92)] font-bold">
          Good Messages
          <div className="w-[75%] border-transparent border-b-2 border-[rgb(92,206,92)] "></div>
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertRip.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col items-center justify-center pt-5 text-2xl text-yellow-500 font-bold">
          Warning Messages
          <div className="w-[75%] border-transparent border-b-2 border-yellow-500 "></div>
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertEgrip.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col items-center justify-center pt-5 text-2xl text-gray-800 font-bold">
          Suggested Messages
          <div className="w-[75%] border-transparent border-b-2 border-gray-800 "></div>
        </span>
        <div className="flex  flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertOspf.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
