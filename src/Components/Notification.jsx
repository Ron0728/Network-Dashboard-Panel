import React, { useRef } from "react";
import NotiMSG from "./NotiMSG";
import { X } from "lucide-react";

const Notification = ({ onclose }) => {
  //   const CloseNoti = (e) => {
  //     if (NotiRef.current === e.target) {
  //       onclose();
  //     }
  //   };

  return (
    <div className="h-full w-full ">
      <div className="flex fixed flex-col h-full w-[55%] bg-gray-100  shadow-2xl rounded-se-2xl shadow-black -translate-x-5 translate-y-3  ">
        <div
          className="flex justify-between p-1 bg-white border-2 border-b-transparent rounded-se-2xl  border-gray-500 items-center
       w-full text-black "
        >
          Notification
          <div onClick={onclose} className="hover:text-red-600">
            <X />
          </div>
        </div>
        <div className="h-full">
          <div className="flex h-56 flex-col p-3 gap-2 border-2 border-t-transparent rounded-ee-2xl rounded-es-2xl bg-gray-500 shadow-2xl shadow-black overflow-y-scroll scrollbar scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
            <NotiMSG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
{
  /* <button onClick={onclose}>X</button>
        <div className="p-5">MSG</div> */
}
