import React from "react";
import Manual_OSPF from "./Manual_OSPF";

const Protocol_OSPF = () => {
  return (
    <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">OSPF Configuration:</div>
      <Manual_OSPF />
    </div>
  );
};

export default Protocol_OSPF;
