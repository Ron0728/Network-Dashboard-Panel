import React from "react";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen bg-[url(2.jpg)]  bg-cover backdrop-blur-xl h-screen justify-center items-center ">
      <div className="flip-card-inner flex flex-col  rounded-2xl  bg-blue-900 gap-3 p-5 w-[50%] h-[70%] shadow-lg shadow-black">
        <div className="flex items-center border-b-2 border-gray-600 p-2 justify-end">
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
        <div className="p-2 font-bold gap-20 flex flex-col h-full">
          <div>
            <p className="text-gray-400">
              {" "}
              Big Thanks to everyone who believed and put their trust in us{" "}
            </p>
            <p className="text-gray-400">
              This Graduation Project was Made by :
            </p>
          </div>{" "}
          <div className="flex animate-pulse text-xl flex-col font-bold gap-5">
            <div className="flex gap-5 justify-between">
              <div>Eng. Rani Alsaegh</div>
              <div>Eng. Sandra Sleman</div>
              <div>Eng. Haidar Ghanem</div>
            </div>
            <div className=" flex items-center justify-center gap-10">
              <div>Eng. Yazan Abdallah</div>
              <div>Eng. Hassan Abdallah</div>
            </div>
          </div>
          <div className="flex justify-center">
            2024 IT Graduates - Al-Baath University - Faculty of Informatics
            Engineering
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
