import React from "react";
import { useNavigate } from "react-router-dom";

const SettingBox = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center w-1/2 h-1/4 
     rounded-3xl hover:text-white cursor-pointer
     backdrop-blur-[20px] shadow-white shadow-sm text-warmGray-100 italic"
      onClick={() => navigate("settinginfo")}
    >
      icon
    </div>
  );
};

export default SettingBox;
