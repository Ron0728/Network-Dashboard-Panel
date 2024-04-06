import React from "react";
import { MdDelete } from "react-icons/md";

const SAlertMSG = ({ alertSuggestedMessages }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-400 p-3 rounded-xl shadow-md shadow-black">
      <span className=" font-bold">{alertSuggestedMessages}</span>
      <MdDelete size={20} className="cursor-pointer" />
    </div>
  );
};

export default SAlertMSG;
