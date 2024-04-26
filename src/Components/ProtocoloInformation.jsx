import React from "react";
import { useNavigate } from "react-router-dom";

const ProtocoloInformation = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold text-xl">Protocol {name} Information</div>
          <div className="flex items-center gap-3 ">
            <button
              onClick={() => navigate("/setting")}
              className="bg-white rounded-xl shadow-black shadow-md font-bold w-[90%]  p-2 items-center flex "
            >
              Back
            </button>
            <button
              onClick={() => navigate("/main/board")}
              className="bg-white rounded-xl shadow-black shadow-md font-bold w-[90%] p-2 items-center flex"
            >
              Home
            </button>
          </div>
        </div>
        <div className="p-2">text</div>
      </div>
    </div>
  );
};
export default ProtocoloInformation;
