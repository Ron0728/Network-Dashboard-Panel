import React, { useEffect, useState } from "react";
import MoreNetworks from "./MoreNetworks";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accessability2 = () => {
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [selectedRouter, setSelectedRouter] = useState("");
  const [selectedInterfaces, setSelectedInterfaces] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const [namedACL, setNamedACL] = useState();

  const handleNamedACL = (event1) => {
    setNamedACL(event1.target.value);
  };

  const handleRouterChange = (event) => {
    const selectedDevice = event.target.value;
    setSelectedRouter(selectedDevice);
    fetchInterfaces(selectedDevice);
    const selectedDeviceIP = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP);
    console.log(`Selected device: ${selectedDevice}, Selected IP: ${iP}`);
  };

  const handleInterfaceChange = (event) => {
    const selected_Interfaces = event.target.value;
    setSelectedInterfaces(selected_Interfaces);
    console.log("the selected Interface : -->", selected_Interfaces);
  };

  const fetchInterfaces = async (Router) => {
    try {
      const response = await fetch(
        `http://localhost:3000/info/interfaces?Router=${Router}`
      );
      const data = await response.json();
      setInterfaces(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching interfaces:", error);
    }
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

  const Send_data_ToServer = async () => {
    const response = await fetch(
      ` http://localhost:3000/dashboard/security/access?Device=${selectedDevice_Config}&&ACL_IP=${iP_Confing}`
    );
    const data = await response.json();
    console.log("data sent");
    console.log("data ", data.message);
    notifyI(data.message);
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
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-2 p-5 w-full h-fit shadow-lg shadow-black ">
      <div className="font-bold text-xl ">Extended ACL</div>

      <div className="flex  items-center justify-between h-full w-full ">
        <div className="flex w-full items-center justify-between gap-5">
          <div className="flex w-full items-center gap-3">
            <div>
              <div className="text-blue-700 text-md font-bold">
                Choose the device{" "}
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[30%] shadow-lg text-white shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
                  value={selectedRouter}
                  onChange={handleRouterChange}
                >
                  <option>Choose</option>
                  {device.map((R) => (
                    <option className="text-black" key={R.id} value={R.name}>
                      {R.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-3">
            <div>
              <div className="text-blue-700 text-md font-bold">
                Choose the Interface{" "}
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[40%] shadow-lg text-white shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
                  value={selectedInterfaces}
                  onChange={handleInterfaceChange}
                >
                  {interfaces.map((I) => (
                    <option className="text-black" key={I.id} value={I.name}>
                      {I.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <input
              value={namedACL}
              onChange={handleNamedACL}
              className="flex p-1 rounded-full shadow-black shadow-inner outline-none"
              placeholder="Named ACL"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
        <div className="font-bold bg-gradient-to-r from-[rgb(0,255,0)] to-gray-500 shadow-md shadow-black p-2 rounded-full">
          Permition list
        </div>
        <div className="flex flex-col justify-center  items-center gap-3">
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
                  placeholder="Networks..."
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
                  placeholder="Subnets..."
                  className="bg-gray-200 outline-none p-1 h-[70%] shadow-black shadow-inner rounded-full"
                ></input>
              </div>
            </div>
            <button className="flex items-center bg-[rgb(0,0,255)] p-3 h-[80%] text-white rounded-xl shadow-black shadow-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
        <div className="font-bold shadow-md shadow-black bg-gradient-to-r from-[rgb(255,0,0)] to-gray-500 p-2 rounded-full">
          Prevention list
        </div>
        <div className="flex flex-col justify-center  items-center gap-3">
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
                  placeholder="Networks..."
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
                  placeholder="Subnets..."
                  className="bg-gray-200 outline-none p-1 h-[70%] shadow-black shadow-inner rounded-full"
                ></input>
              </div>
            </div>
            <button className="flex items-center bg-[rgb(0,0,255)] p-3 h-[80%] text-white rounded-xl shadow-black shadow-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessability2;
