import React from "react";

const Details = () => {
  return (
    <div className="flex w-full h-full bg-gray-400 ">
      <div className="flex w-1/2">
        <div className="flex flex-col gap-3 p-3 w-1/2 h-full">
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md  "
          >
            HostName :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            IP Adsress :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            MAC Address :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            Status :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            Interface :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
        </div>
        <div className="flex flex-col gap-3 p-3 w-1/2 h-full">
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            HostName :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            IP Adsress :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            MAC Address :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            Status :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            Interface :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
          <span
            className="flex items-center bg-slate-300 shadow-md shadow-[rgb(0,0,255)] w-full p-2 h-1/6 
        rounded-md "
          >
            :
          </span>
        </div>
      </div>

      <div className=" w-1/2 h-full p-5 ">
        <div className="flex gap-3 m-2 font-bold justify-center items-center">
          Number of Connected Devices :
          <div className="bg-white p-2"> 4 /16</div>
        </div>
        <div className=" bg-slate-300 w-full h-5/6 border-2 border-black"></div>
        <span className="flex justify-center font-bold">
          Chart of Something{" "}
        </span>
      </div>
    </div>
  );
};

export default Details;
