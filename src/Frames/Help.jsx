import React from "react";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-screen bg-[url('5.jpg')] bg-cover backdrop-blur-xl h-screen justify-center items-center ">
      <div className="flex flex-col border-2 shadow-black shadow-xl justify-between backdrop-blur-xl p-64 rounded-3xl ">
        <div>
          <div className=" bg-slate-300">
            <button onClick={() => navigate("/main/board")}>Back</button>
          </div>
        </div>
        <div>
          <span>help</span>
        </div>
      </div>
    </div>
  );
};

export default Help;
