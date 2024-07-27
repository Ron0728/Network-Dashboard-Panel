import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HostnameChange = () => {
  const [hostnameMSG, setHostnameMSG] = useState();
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [hostN, setHostN] = useState();

  const handlerDeviceChange = (event) => {
    const selectedDevice = event.target.value;
    setSelectedDevice(selectedDevice);
    const selectedDeviceIP = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP);
    console.log(
      `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP}`
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

  const handleHostName = (event1) => {
    setHostN(event1.target.value);
  };

  const fetchData = async () => {
    {
      iP == null
        ? notifyD("Please Select a Device")
        : await fetch(
            `http://localhost:3000/dashboard/troubleshooting/hostname?selectedDeviceIP=${iP}&&selectedHostname=${hostN}`
          )
            .then((res) => res.json())
            .then((data) => {
              setHostnameMSG(data.message);
              setHostN("");
              notifyG(hostnameMSG);
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
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-5 p-5  w-full h-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">Change HostName</div>
      <div className="flex gap-8 items-center">
        <div className="font-bold text-blue-700">Choose a Device</div>
        <div className="flex justify-around items-center p-2 bg-blue-900 w-[15%] shadow-lg text-white shadow-black rounded-full ">
          <div className="flex items-center justify-center">
            <select
              className="bg-transparent outline-none "
              value={selectedDevice}
              onChange={handlerDeviceChange}
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
      <div className="flex w-full h-full items-center gap-5">
        <div className="flex items-center gap-3 w-[70%] ">
          <div className="w-[20%] font-bold ">Enter a Hostname :</div>
          <div className="w-[80%]">
            <input
              value={hostN}
              onChange={handleHostName}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default HostnameChange;
