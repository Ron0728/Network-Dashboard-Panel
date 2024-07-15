import React, { useState } from "react";

const Report = () => {
  const [textReport, setTextReport] = useState();

  const handleText = (event) => {
    setTextReport(event.target.value);
  };

  const Discard = () => {
    setTextReport("");
  };

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div className="flex flex-col justify-center font-bold gap-3 bg-gray-300 rounded-full w-full h-[10%] p-5 shadow-lg shadow-black ">
        Report
      </div>
      <div className="flex flex-col gap-5 bg-gray-300 rounded-xl w-full h-[70%] p-5 shadow-lg shadow-black ">
        <textarea
          value={textReport}
          onChange={handleText}
          placeholder="Write your report here ..."
          className="h-full rounded-lg outline-none p-2"
        ></textarea>
        <div className="flex gap-5">
          <button className="bg-blue-600 w-[10%] p-2 rounded-2xl font-bold text-white  shadow-black shadow-md">
            Report
          </button>
          <button
            onClick={Discard}
            className="bg-blue-600 w-[10%] p-2 rounded-2xl font-bold text-white  shadow-black shadow-md"
          >
            Discard
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 bg-gray-300 rounded-xl w-full h-[20%] p-3 shadow-lg shadow-black ">
        Replay from backend
      </div>
    </div>
  );
};

export default Report;
