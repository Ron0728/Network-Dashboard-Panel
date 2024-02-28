import React from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex-col w-screen bg-blue-950 bg-cover h-screen  ">
      <TopBar />
      <div className="flex w-full h-[85%]">
        <SideBar />
        {/* <div className="bg-black w-0.5 mt-5 mb-5 rounded-e"></div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
