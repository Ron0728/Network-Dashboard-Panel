import React from "react";
import { MdDelete } from "react-icons/md";

const GAlertMSG = ({ alertGoodMessages }) => {
  // const handleDelete = (index) => {
  //   const deleteValue = [...alertGoodMessages];
  //   deleteValue.splice(index, 1);
  //   alertGoodMessages(deleteValue);
  // };
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-gray-400 p-3 rounded-xl shadow-md shadow-black">
      <span className="font-bold">{alertGoodMessages}</span>
      {/* <button>
        <MdDelete size={20} className="cursor-pointer" />
      </button> */}
    </div>
  );
};

export default GAlertMSG;
