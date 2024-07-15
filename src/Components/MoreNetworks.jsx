import React, { useEffect, useState } from "react";
import MoreNetButtom from "../Components/MoreNetButton";
import { FaNetworkWired } from "react-icons/fa6";
import { data } from "autoprefixer";
const MoreNetworks = () => {
  const [more, setMore] = useState([{ Network: "", Subnets: "" }]);

  const handleClick = () => {
    setMore([...more, { Network: "", Subnets: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeValue = [...more];
    onChangeValue[i][name] = value;
    setMore(onChangeValue);
    console.log(`---> ${name}: ${value}`);
    console.log(more);
  };

  const handleDelete = (i) => {
    const deleteValue = [...more];
    deleteValue.splice(i, 0);
    setMore(deleteValue);
    console.log("D", more);
  };

  // const Send_data_ToServer = async () => {
  //   const response = await fetch(
  //     ` http://localhost:3000/dashboard/security/access?More=${more}`
  //   );
  //   const data = await response.json();
  //   console.log("data sent");
  //   console.log("data to send : ", more);

  //   // {
  //   //   selectedDevice && selectedVersionRip ? (
  //   //     notifyI(
  //   //       `The Router ${selectedDevice} with the Version ${selectedVersionRip} has been Selected`
  //   //     )
  //   //   ) : (
  //   //     <></>
  //   //   );
  //   // }
  // };

  return (
    <div>
      <div className="flex flex-col justify-center  items-center gap-3">
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
              className="flex items-center bg-[rgb(255,0,0)] p-3 h-[80%] text-white rounded-xl shadow-black shadow-md"
              onClick={() => handleDelete(i)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <MoreNetButtom onClick={handleClick}>
          <FaNetworkWired className="translate-x-1.5  " size={20} />
        </MoreNetButtom>
      </div>
    </div>
  );
};

export default MoreNetworks;
