import React, { useRef } from "react";
import NotiMSG from "./NotiMSG";
import { X } from "lucide-react";

const Notification = ({ onclose }) => {
  return (
    <div className="h-full w-full ">
      <div className="flex fixed flex-col  w-[25%] bg-gray-100  shadow-2xl rounded-se-2xl shadow-black -translate-x-96 -translate-y-5 ">
        <div
          className="flex justify-between p-1 bg-white border-2 border-b-transparent rounded-es-2xl  items-center
       w-full text-black "
        >
          <div className="font-bold">Add an New Device</div>
          <div onClick={onclose} className="hover:text-red-600">
            <X />
          </div>
        </div>
        <div className="h-full">
          <div className="flex h-56 flex-col p-3 gap-2 border-2 border-t-transparent rounded-ee-2xl rounded-es-2xl bg-gray-500 shadow-2xl shadow-black overflow-y-scroll scrollbar scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
            <div className="flex  bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[20%] shadow-lg shadow-black ">
              Type <select>s</select>
            </div>
            <div className="flex  bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[20%] shadow-lg shadow-black ">
              Username : <input />
            </div>
            <div className="flex  bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[20%] shadow-lg shadow-black ">
              Password : <input />
            </div>
            <div className="flex  bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[20%] shadow-lg shadow-black ">
              IP : <input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
