import React from "react";
import classNames from "classnames";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "/src/Css/SideBar.css";
import "/src/Css/LogOutButton.css";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[15%] text-lg  bg-gradient-to-r from-[rgb(6,28,69)] to-gray-400 border-r-2 border-gray-700  pt-5 justify-between ">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col ">
          {DASHBOARS_SIDEBAR_LNKS.map((items) => (
            <SidebarLink key={items.key} items={items}>
              {items.label}
            </SidebarLink>
          ))}
        </div>
        <div className=" border-b-2 border-gray-700 "></div>
      </div>
      <div className="flex flex-col  bg-gradient-to-r from-[rgb(255,0,0)] to-gray-400   gap-3">
        {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
          <button2
            className="flex cursor-pointer font-bold items-center gap-2"
            key={items.key}
            items={items}
            onClick={() => navigate(items.Path)}
          >
            {items.icon}
            {items.label}
          </button2>
        ))}
      </div>
    </div>
  );
}
const LinkClasses = "flex items-center gap-5 p-2 text-gray-700";

function SidebarLink({ items }) {
  const { pathname } = useLocation();
  return (
    <button className="a">
      <Link
        to={items.Path}
        className={classNames(
          pathname === items.Path
            ? "flex shadow-inner shadow-blueGray-600  bg-gradient-to-r from-blue-700 to-gray-400 font-bold w-full text-white"
            : "text-black font-bold",
          LinkClasses
        )}
      >
        <div className="flex items-center gap-2">
          <span>{items.icon}</span>
          {items.label}
        </div>
      </Link>
    </button>
  );
}
