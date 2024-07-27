import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manual_IP_Interface = () => {
  const [manual_ip, setManual_ip] = useState();
  const [enterdIP, setEnterdIP] = useState("");
  const [enterdSubnet, setEnterdSubnet] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [selectedRouter, setSelectedRouter] = useState("");
  const [selectedInterfaces, setSelectedInterfaces] = useState("");
  const [interfaces, setInterfaces] = useState([]);

  const handleRouterChange = (event) => {
    const selectedDevice = event.target.value;
    setSelectedRouter(selectedDevice);
    fetchInterfaces(selectedDevice);
    const selectedDeviceIP = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP);
    console.log(
      `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP}`
    );
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

  const handelIP = (event2) => {
    setEnterdIP(event2.target.value);
  };

  const handleSub = (event3) => {
    setEnterdSubnet(event3.target.value);
  };

  const fetchData = async () => {
    {
      (iP && selectedInterfaces) == null
        ? notifyD("Please Select a Device and Interface")
        : await fetch(
            `http://localhost:3000/dashboard/troubleshooting/manualip?selectedDeviceIP=${iP}&&selectedDeviceInt=${selectedInterfaces}&&EnteredIP=${enterdIP}&&EnteredSub=${enterdSubnet}`
          )
            .then((res) => res.json())
            .then((data) => {
              setManual_ip(data.message);
              notifyG(manual_ip);
              console.log(enterdIP);
              console.log(enterdSubnet);
              setEnterdIP("");
              setEnterdSubnet("");
            });
    }
  };

  const notifyG = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const notifyD = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 1000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-5 p-5 w-full h-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">Manual IP Interface</div>
      <div className="flex gap-28">
        <div className="flex gap-8 w-[30%] items-center">
          <div className="font-bold text-blue-700">Choose a Device</div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
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

        <div className="flex gap-8 w-[50%] items-center">
          <div className="font-bold text-blue-700">Choose a Interface</div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[30%] shadow-lg text-white shadow-black rounded-full ">
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
      <div className="flex w-full h-full items-center gap-5">
        <div className="flex items-center gap-3 w-[70%] ">
          <div className="w-[20%] font-bold ">Enter IP :</div>
          <div className="w-[80%]">
            <input
              value={enterdIP}
              onChange={handelIP}
              className=" outline-none shadow-black shadow-inner p-2 w-full rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-[70%] ">
          <div className="w-[30%] font-bold ">Enter Subnet :</div>
          <div className="w-[70%]">
            <input
              value={enterdSubnet}
              onChange={handleSub}
              className=" outline-none shadow-black shadow-inner p-2 w-full rounded-full"
            />
          </div>
        </div>
        <div className="flex w-[30%] justify-end">
          <button
            onClick={fetchData}
            className="bg-blue-700 hover:bg-green-600 text-white w-[40%] p-2 items-center justify-center rounded-full shadow-black shadow-md"
          >
            Apply
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Manual_IP_Interface;
