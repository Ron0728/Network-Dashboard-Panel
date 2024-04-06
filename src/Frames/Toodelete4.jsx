import React, { useState } from "react";
import MoreNetButtom from "../Components/MoreNetButton";
import { FaNetworkWired } from "react-icons/fa6";
const Toodelete4 = () => {
  const [more, setMore] = useState([{ Network: "", Subnets: "" }]);

  const handleClick = () => {
    setMore([...more, { Network: "", Subnets: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeValue = [...more];
    onChangeValue[i][name] = value;
    setMore(onChangeValue);
  };

  const handleDelete = (i) => {
    const deleteValue = [...more];
    deleteValue.splice(i, 1);
    setMore(deleteValue);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      {more.map((val, i) => (
        <div className="flex gap-20 ">
          <div className="flex justify-center">
            <div className="flex h-full gap-3  items-center">
              <div>
                <div className="text-blue-700 text-lg font-bold">
                  Insert network
                </div>
                <div className="text-gray-600 font-bold">
                  the appling network
                </div>
              </div>
              <input
                name="Network"
                placeholder="Networks..."
                value={val.Network}
                onChange={(e) => handleChange(e, i)}
                className="bg-gray-200 outline-none p-1 sm:h-[30%] md:h-[70%] shadow-black shadow-inner rounded-full"
              ></input>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex h-full gap-3  items-center">
              <div>
                <div className="text-blue-700 text-lg font-bold">
                  Insert subnet
                </div>
                <div className="text-gray-600 font-bold">network's mask</div>
              </div>
              <input
                name="Subnets"
                placeholder="Subnets..."
                value={val.Subnets}
                onChange={(e) => handleChange(e, i)}
                className="bg-gray-200 outline-none p-1 h-[70%] shadow-black shadow-inner rounded-full"
              ></input>
            </div>
          </div>
          <button
            className="bg-red-500 p-2 h-[10%] text-white rounded-xl shadow-black shadow-md"
            onClick={() => handleDelete(i)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <MoreNetButtom onClick={handleClick}>
          <FaNetworkWired className="translate-x-1.5  " size={20} />
        </MoreNetButtom>
      </div>
    </div>
  );
};

export default Toodelete4;
