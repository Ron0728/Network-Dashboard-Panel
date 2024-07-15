import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protocol_EGRIP = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
      <div className="flex w-full justify-between">
        <div className="font-bold text-xl">EGRIP Configuration:</div>
        <div className="flex gap-10">
          <button
            className="flex p-2 w-f justify-center shadow-black shadow-md bg-slate-500 font-bold rounded-full "
            onClick={() => navigate("E-manual")}
          >
            Manual
          </button>
          <button
            className="flex p-2 w-f justify-center shadow-black shadow-md bg-slate-500 font-bold rounded-full "
            onClick={() => navigate("E-static")}
          >
            Static
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Protocol_EGRIP;
