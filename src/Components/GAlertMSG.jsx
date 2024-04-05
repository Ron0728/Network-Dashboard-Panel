import React from "react";
import { MdDelete } from "react-icons/md";

const GAlertMSG = ({ alertRip }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-gray-400 p-3 rounded-xl shadow-md shadow-black">
      <span className="font-bold">{alertRip}</span>
      <MdDelete size={20} className="cursor-pointer" />
    </div>
  );
};

export default GAlertMSG;
