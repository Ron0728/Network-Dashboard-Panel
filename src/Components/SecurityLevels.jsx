import React from "react";

const SecurityLevels = () => {
  return (
    <div className=" flex-col gap-6 bg-red-800 w-[30%]">
      <div className="flex ">O</div>
      <div>CISCO Standard</div>
      <div
        className="flex justify-center text-white rounded-full shadow-black shadow-md
       bg-blue-950 w-[70%] p-2 "
      >
        save
      </div>
      <div
        className="flex justify-center text-white rounded-full shadow-black shadow-md
       bg-[rgb(0,255,0)] w-[70%] p-2 "
      >
        apply
      </div>
    </div>
  );
};

export default SecurityLevels;
