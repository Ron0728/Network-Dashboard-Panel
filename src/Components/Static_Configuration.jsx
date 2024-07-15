import React from "react";

const Static_Configuration = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center  justify-between p-1 font-bold gap-5">
        <div className="flex pt-1 items-center gap-2">
          <p className="flex items-center gap-1">
            R1 <p className="text-sm text-gray-500">(192.168.192.131)</p>
          </p>
          <input type="checkbox" />
        </div>
        <div className="flex pt-1 items-center gap-2">
          <p className="flex items-center gap-1">
            R2 <p className="text-sm text-gray-500">(192.168.1.2)</p>
          </p>
          <input type="checkbox" />
        </div>
        <div className="flex pt-1 items-center gap-2">
          <p className="flex items-center gap-1">
            R3 <p className="text-sm text-gray-500">(192.168.2.3)</p>
          </p>
          <input type="checkbox" />
        </div>
      </div>
      <div className="">
        <button className="apply  shadow-md shadow-black bg-black text-white p-3 w-[15%] rounded-full">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Static_Configuration;
