import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Security_Audit = () => {
  const [selectedDevice_Config, setSelectedDevice_Config] = useState("");
  const [device, setDevice] = useState([]);
  const [iP_Confing, setIP_Config] = useState();

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

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const Send_IP_Config_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/security/configaudit?iP_Confing=${iP_Confing}`
    );
    const data = await response.json();
    notifyI(data.device_ip);
  };

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
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
      <div className="font-bold text-xl">Security Audit</div>
      <div className="flex h-full justify-between">
        <div className="flex items-center gap-3  w-[30%] ">
          <div className="md:flex-col">
            <div className="text-blue-700 font-bold">Choose the device</div>
          </div>
          <div className="flex justify-around items-center bg-blue-900 w-[40%] h-[80%] shadow-lg text-white shadow-black rounded-full ">
            <form className="flex items-center justify-center">
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
            </form>
          </div>
        </div>
        <button
          onClick={Send_IP_Config_ToServer}
          className="startchecking bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md"
        >
          Start
        </button>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="font-bold text-blue-600">
          Securtity level according to CISCO & Al-Baath standards:
        </div>
      </div>
    </div>
  );
};

export default Security_Audit;
