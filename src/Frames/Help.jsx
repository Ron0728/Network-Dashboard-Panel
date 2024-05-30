import React from "react";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen bg-[url('5.jpg')] bg-cover backdrop-blur-xl h-screen justify-center items-center ">
      <div className="flip-card-inner flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-[50%] h-[70%] shadow-lg shadow-black">
        <div className="flex items-center border-b-2 border-gray-600 p-2 justify-between">
          <div className="font-bold animate-pulse">HELP</div>
          <div>
            <button
              className="bg-blue-700 text-white p-2 shadow-black shadow-md rounded-xl"
              onClick={() => navigate("/main/board")}
            >
              {" "}
              Back
            </button>
          </div>
        </div>
        <div className="overflow-y-scroll p-2 h-full">
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
          <p> TEXT</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
