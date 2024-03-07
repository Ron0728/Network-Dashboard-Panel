import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSpeedometerSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BrainCircuit } from "lucide-react";
import BoardInfo from "./BoardInfo";
import "/src/Css/FetchButton.css";
const Board = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div>
        <div className="pl-10">
          <div className="font-bold w-fit text-white bg-blue-800 shadow-sm shadow-black p-2 rounded-full">
            Automatic configurations & management
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-700 to-blue-200 rounded-full gap-3 p-3 w-full shadow-lg shadow-black ">
          <div className="flex items-center justify-between text-white font-bold">
            <div className="flex items-center gap-1">
              <div className="text-2xl">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="text-xl">Source</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-2xl">
                <IoSpeedometerSharp />
              </div>
              <div className="text-xl">Fast</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-3xl">
                <BrainCircuit />
              </div>
              <div className="text-xl">AI</div>
            </div>

            <button className="fetchbutton flex bg-blue-700 shadow-black shadow-md hover:bg-green-500 items-center text-white font-bold rounded-full p-3">
              Fetch Data
            </button>
          </div>
        </div>
      </div>
      <div>
        <BoardInfo />
      </div>
    </div>
  );
};

export default Board;
