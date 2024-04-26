import React from "react";
import { useNavigate } from "react-router-dom";

const TrubleShooting = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between bg-green-500 p-2 items-center gap-3">
          <div>Protocol {name} Information</div>
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
        <div className="bg-red-400 p-2">text</div>
      </div>
    </div>
  );
};
export default TrubleShooting;
{
  /* <div className="flex gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div>Protocol {name} Information</div>
        <div className="flex gap-3 h-[7%]">
          <button
            onClick={() => navigate("/setting")}
            className="bg-white rounded-xl shadow-black shadow-md font-bold w-[80%]  p-1 "
          >
            Back
          </button>
          <button
            onClick={() => navigate("/main/board")}
            className="bg-white rounded-xl shadow-black shadow-md font-bold w-[90%] p-1 "
          >
            Home
          </button>
        </div>
      </div> */
}
