import React from "react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex-col bg-blue-950 bg-cover w-full h-full  ">
        <div className="h-[10%]">
          <TopBar />
        </div>
        <div className="flex w-full h-[90%]">
          <SideBar />
          {/* <div className="bg-black w-0.5 mt-5 mb-5 rounded-e"></div> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
