import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[15%] shadow-md shadow-black w-full backdrop-blur-[5px] p-10 justify-center">
      <div className="flex justify-between">
        <div className="font-bold flex justify-center p-5 animate-pulse text-warmGray-100 italic">
          DashBoard
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex shadow-black shadow-lg bg-white p-1 items-center justify-center rounded-3xl">
            <input
              placeholder="Search . . . "
              className=" rounded-2xl outline-none p-1 w-96 h-9"
            />
            <div>-O</div>
          </div>
        </div>
        <div className="flex gap-16 text-gray-600">
          <button
            className="topbuttons"
            //  className="border-2 border-transparent
            //  hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
            //  hover:text-warmGray-100 "
          >
            Home
          </button>
          <button
            className="topbuttons"
            onClick={() => navigate("/setting")}

            //  className="border-2 border-transparent
            //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
            //   hover:text-warmGray-100 "
            //  onClick={() => navigate("/setting")}
          >
            Settings
          </button>
          <button
            className="topbuttons"
            //  className="border-2 border-transparent
            //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
            //  hover:text-warmGray-100 "
            onClick={() => navigate("/help")}
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
