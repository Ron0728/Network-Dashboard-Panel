import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-[url('2.jpg')] bg-cover">
      <div className="flex flex-col h-[15%] shadow-md shadow-black w-full backdrop-blur-[5px] p-10 justify-center">
        <div className="flex justify-between">
          <div className="font-bold flex justify-center p-5 animate-pulse text-warmGray-100 italic">
            DashBoard
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex p-1 shadow-black shadow-lg justify-center items-center bg-white rounded-3xl">
              <input
                placeholder="Search . . ."
                className=" rounded-2xl outline-none p-1 w-96 h-9"
              />
              <div>-O</div>
            </div>
          </div>
          <div className="flex gap-16 text-gray-600">
            <button
              className="topbuttons"
              //    className="border-2 border-transparent
              //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              //   hover:text-warmGray-100 "
              onClick={() => navigate("/main")}
            >
              Home
            </button>
            <button
              className="topbuttons"
              //    className="border-2 border-transparent
              //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              //   hover:text-warmGray-100 "
              onClick={() => navigate("/setting")}
            >
              Settings
            </button>
            <button
              className="topbuttons"
              //  className="border-2 border-transparent
              // hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              // hover:text-warmGray-100 "
              onClick={() => navigate("/help")}
            >
              Help
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-transparent flex-col justify-center h-[85%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
