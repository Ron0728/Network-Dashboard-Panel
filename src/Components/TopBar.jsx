import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdHome } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import Notification from "./Notification";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);

const TopBar = () => {
  const [ShowNoti, setShowNoti] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full shadow-md bg-[rgb(6,28,69)] shadow-black w-full backdrop-blur-[5px] justify-center">
      <div className="flex h-full justify-between">
        <div className="font-bold items-center h-full text-xl gap-7 flex justify-center p-5 text-warmGray-100 ">
          <div className="animate-pulse">DashBoard</div>
          {/* <button onClick={() => setShowNoti(true)} className="pt-2">
            <lord-icon
              src="https://cdn.lordicon.com/lznlxwtc.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
          </button> */}
          <div>
            {ShowNoti && <Notification onclose={() => setShowNoti(false)} />}
          </div>
        </div>
        <div className="flex gap-16 p-2 text-gray-600">
          <button className="topbuttons p-2 text-lg">
            <div className="flex gap-1 items-center justify-center">
              <MdHome />
              Home
            </div>
          </button>
          <button
            className="topbuttons p-2 text-lg"
            onClick={() => navigate("/setting")}
          >
            <div className="flex gap-1 items-center justify-center">
              <FaInfoCircle />
              Informations
            </div>
          </button>
          <button
            className="topbuttons p-2 text-lg"
            onClick={() => navigate("/help")}
          >
            <div className="flex gap-1 items-center justify-center">
              <IoMdHelpCircle />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
