import React from "react";
import { MdDelete } from "react-icons/md";

const DAlertMSG = ({ alertDangerMessages }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-red-500 to-gray-400 p-3 rounded-xl shadow-md shadow-black">
      <span className="font-bold">{alertDangerMessages}</span>
      <MdDelete size={20} className="cursor-pointer" />
    </div>
  );
};

export default DAlertMSG;
