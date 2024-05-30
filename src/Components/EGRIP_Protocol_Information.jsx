import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const EGRIP_Protocol_Information = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold w-full animate-pulse text-2xl text-shadow-lg ">
            Protocol EGRIP Information
          </div>
          <div className="flex items-center w-full justify-end gap-3 ">
            <button
              onClick={() => navigate("/main/protocols")}
              className="bg-blue-300 rounded-xl gap-1 shadow-black shadow-md font-bold  p-2 items-center flex "
            >
              <AiOutlineFileProtect size={20} /> <p>To Protocols</p>
            </button>
            <button
              onClick={() => navigate("/main/board")}
              className="bg-white rounded-xl shadow-black shadow-md font-bold  p-2 items-center flex"
            >
              Home
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-3 text-lg"> text</div>
      </div>
    </div>
  );
};
export default EGRIP_Protocol_Information;
