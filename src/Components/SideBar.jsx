import React from "react";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import "/src/Css/LogOutButton.css";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gray-500 h-full justify-between w-[15%] border-r-2 border-gray-700">
      <div className="h-[80%] flex flex-col p-2">
        {DASHBOARS_SIDEBAR_LNKS.map((items) => (
          <div
            // className="a"
            className="flex text-gray-900 font-semibold border-2 border-transparent
            hover:border-2 hover:border-r-transparent hover:border-l-transparent
            hover:text-white p-3  cursor-pointer gap-2"
            onClick={() => navigate(items.Path)}
            key={items.key}
          >
            <div>{items.icon}o</div>
            <button onClick={() => navigate(items.Path)}>{items.label}</button>
          </div>
        ))}
        <div className=" border-b-2 border-gray-700 "></div>
      </div>
      <div>
        {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
          <div
            className="flex  text-gray-900  font-bold border-2 border-transparent cursor-pointer"
            key={items.key}
            onClick={() => navigate(items.Path)}
          >
            <button
              className="flex gap-2 p-5 font-bold"
              onClick={() => navigate(items.Path)}
            >
              <div>{items.icon}o</div>
              {items.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
