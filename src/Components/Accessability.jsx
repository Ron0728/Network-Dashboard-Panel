import React, { useEffect, useState } from "react";
import MoreNetworks from "./MoreNetworks";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accessability = () => {
  const [selectedDevice_Config, setSelectedDevice_Config] = useState("");
  const [device, setDevice] = useState([]);
  const [iP_Confing, setIP_Config] = useState();

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const handlerDeviceChange_Config = (event) => {
    const selectedDevice_Config = event.target.value;
    setSelectedDevice_Config(selectedDevice_Config);
    const selectedDevice_ConfigIP = device.find(
      (device) => device.name === selectedDevice_Config
    ).ip;
    setIP_Config(selectedDevice_ConfigIP);
    console.log(
      `Selected device: ${selectedDevice_Config}, Selected IP: ${selectedDevice_ConfigIP}`
    );
  };

  const Send_data_ToServer = async () => {
    const response = await fetch(
      ` http://localhost:3000/dashboard/security/access?Device=${selectedDevice_Config}&&ACL_IP=${iP_Confing}`
    );
    const data = await response.json();
    console.log("data sent");
    console.log("data ", data.message);
    notifyI(data.message);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const notifyI = (msg) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 3000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    <ToastContainer />;
  };

  return (
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-2 p-5 w-full h-fit shadow-lg shadow-black ">
      <div className="font-bold text-xl ">Accessability</div>

      <div className="flex  items-center justify-between h-full w-full ">
        <div className="flex w-full items-center gap-5">
          <div>
            <div className="text-blue-700 text-lg font-bold">
              Choose the device{" "}
              <span className="text-gray-600 text-sm font-bold">
                to edit accessabilty
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[15%] shadow-lg text-white shadow-black rounded-full ">
            <div className="flex items-center justify-center">
              <select
                className="bg-transparent outline-none "
                value={selectedDevice_Config}
                onChange={handlerDeviceChange_Config}
              >
                <option>Choose</option>
                {device.map((D) => (
                  <option className="text-black " key={D.id} value={D.name}>
                    {D.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={Send_data_ToServer}
            className="applyACL bg-blue-900 text-white p-2  w-[15%] rounded-full shadow-black shadow-md"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
        <div className="font-bold bg-gradient-to-r from-[rgb(0,255,0)] to-gray-500 shadow-md shadow-black p-2 rounded-full">
          Permition list
        </div>
        <MoreNetworks />
      </div>
      <div className="flex flex-col  bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
        <div className="font-bold shadow-md shadow-black bg-gradient-to-r from-[rgb(255,0,0)] to-gray-500 p-2 rounded-full">
          Prevention list
        </div>
        <MoreNetworks />
      </div>
    </div>
  );
};

export default Accessability;
