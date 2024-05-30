import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-400 bg-cover">
      <div className="flex flex-col h-[10%] shadow-md bg-[rgb(6,28,69)] shadow-black w-full backdrop-blur-[5px] justify-center">
        <div className="flex justify-between p-5">
          <div className="font-bold text-xl flex justify-center  p-5 animate-pulse text-warmGray-100 ">
            DashBoard
          </div>

          <div className="flex gap-16 p-2 text-gray-600">
            <button
              className="topbuttons p-2 text-lg"
              onClick={() => navigate("/main/board")}
              //  className="border-2 border-transparent
              //  hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              //  hover:text-warmGray-100 "
            >
              <div className="flex gap-1 items-center justify-center">
                <MdHome />
                Home
              </div>
            </button>
            <button
              className="topbuttons p-2 text-lg"
              onClick={() => navigate("/setting")}

              //  className="border-2 border-transparent
              //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              //   hover:text-warmGray-100 "
              //  onClick={() => navigate("/setting")}
            >
              <div className="flex gap-1 items-center justify-center">
                <FaInfoCircle />
                Informations
              </div>
            </button>
            <button
              className="topbuttons p-2 text-lg"
              //  className="border-2 border-transparent
              //   hover:border-white hover:border-2 hover:border-r-transparent hover:border-l-transparent
              //  hover:text-warmGray-100 "
              onClick={() => navigate("/help")}
            >
              <div className="flex gap-1 items-center justify-center">
                <IoMdHelpCircle />
                Help
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[90%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
