import React from "react";
import classNames from "classnames";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import "/src/Css/LogOutButton.css";

const extra = "text-red-500";
const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col bg-gradient-to-r from-[rgb(6,28,69)] to-gray-400 h-full justify-between w-[15%] border-r-2 border-gray-700">
      <div className="h-[80%] flex flex-col p-2">
        {DASHBOARS_SIDEBAR_LNKS.map((items) => (
          <div
            // className="a"
            // className="flex text-white font-semibold border-2 border-transparent
            // hover:border-2 hover:border-r-transparent hover:border-l-transparent
            // hover:text-white p-3 items-center cursor-pointer gap-2"
            className={classNames(
              pathname === items.Path ? "text-white" : "text-blue-500",
              extra
            )}
            onClick={() => navigate(items.Path)}
            key={items.key}
          >
            <div>{items.icon}</div>
            <button onClick={() => navigate(items.Path)}>{items.label}</button>
          </div>
        ))}
        <div className=" border-b-2 border-gray-700 "></div>
      </div>
      <div className="flex items-end w-full h-full">
        {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
          <div
            className="flex  hover:bg-red-700 h-[20%] w-full  text-gray-900  font-bold border-2 border-transparent cursor-pointer"
            key={items.key}
            onClick={() => navigate(items.Path)}
          >
            <button
              className="flex w-full justify-start items-center hover:text-white hover:bg-red-700 gap-2 p-5 font-bold"
              onClick={() => navigate(items.Path)}
            >
              <div>{items.icon}</div>
              {items.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
