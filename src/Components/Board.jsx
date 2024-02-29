import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-scroll bg-gray-400 w-full h-full p-5 gap-3">
      <div>
        <div className="pl-10">
          <div className="font-bold w-fit text-white bg-blue-800 shadow-sm shadow-black p-2 rounded-full">
            Automatic configurations & management
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-700 to-blue-200 rounded-full gap-3 p-3 w-full shadow-lg shadow-black ">
          <div className="flex items-center justify-between text-white font-bold">
            <div className="flex gap-3">
              <div>Source</div>
              <div>o</div>
            </div>
            <div className="flex gap-3">
              <div>Fast</div>
              <div>o</div>
            </div>
            <div className="flex gap-3">
              <div>AI</div>
              <div>o</div>
            </div>

            <button
              className="flex bg-blue-700 shadow-black shadow-md hover:bg-green-500 hover:animate-bounce text-white font-bold rounded-full p-3"
              onClick={() => navigate("fetchdata")}
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Board;
