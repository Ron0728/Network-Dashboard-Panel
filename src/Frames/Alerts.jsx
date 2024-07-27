import React, { useContext } from "react";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";

const Alerts = () => {
  const [alertGoodMessages, setAlertGoodMessages] =
    useContext(AlertContextGood);
  const [alertWarningMessages, setAlertWarningMessages] =
    useContext(AlertContextWarrning);
  const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
    AlertContextSuggested
  );
  const [alertDangerMessages, setAlertDangerMessages] =
    useContext(AlertContextDanger);

  return (
    <div className="flex gap-3 p-5 w-full bg-gray-400">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 underline flex-col items-center justify-center pt-5 text-2xl text-[rgb(255,0,0)] font-bold">
          Danger Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertDangerMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col underline items-center justify-center pt-5 text-2xl text-[rgb(92,206,92)] font-bold">
          Good Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertGoodMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col underline items-center justify-center pt-5 text-2xl text-yellow-500 font-bold">
          Warning Messages
        </span>
        <div className="flex flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertWarningMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 w-full shadow-inner shadow-black ">
        <span className="flex gap-3 flex-col underline items-center justify-center pt-5 text-2xl text-gray-800 font-bold">
          Suggested Messages
        </span>
        <div className="flex  flex-col gap-3 overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl p-5 ">
          {alertSuggestedMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts; //Done
