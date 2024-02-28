import React from "react";
import { useNavigate } from "react-router-dom";
import { Settings_Boxes } from "/src/Components/SettingBoxesNavigation.jsx";
const SettingBoxes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  h-full w-full justify-center items-center">
      <div className="h-[80%] flex  gap-5 justify-center">
        {Settings_Boxes.map((items) => (
          <div
            className="flex h-[25%] w-[25%] justify-center bg-transparent font-bold backdrop-blur-lg shadow-md shadow-black border-2 border-gray-500 rounded-xl hover:text-white p-3 cursor-pointer"
            onClick={() => navigate(items.Path)}
            key={items.key}
          >
            <button onClick={() => navigate(items.Path)}>{items.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingBoxes;
