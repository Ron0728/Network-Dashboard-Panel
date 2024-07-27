import React from "react";
import Manual_EGRIP from "./Manual_EGRIP";

const Protocol_EGRIP = () => {
  return (
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">EGRIP Configuration:</div>
      <Manual_EGRIP />
    </div>
  );
};

export default Protocol_EGRIP;
