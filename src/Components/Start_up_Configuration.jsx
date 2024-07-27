import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Start_up_Configuration = () => {
  const [startupConfig, setStartupConfig] = useState();
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();

  const fetchData = async () => {
    await fetch(
      `http://localhost:3000/dashboard/reporting/startup?selectedDeviceIP=${iP}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStartupConfig(data.StartupConfig);
        console("---> ", data.StartupConfig);
      });
  };

  const fetchData2 = async () => {
    await fetch("http://localhost:3000/dashboard/reporting/save")
      .then((res) => res.json())
      .then((data) => {
        console("---> ", data.message);
        notifyG(data.message);
      });
  };

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

  return (
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl p-5 w-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">Start up Configuration </div>
      <div className="flex gap-20 items-center ">
        <div className="flex w-full gap-5 items-center">
          <div className="font-bold text-blue-700">Choose Device</div>
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
        <button
          className="bg-blue-700 text-white hover:bg-green-600 w-[15%] p-2 rounded-full shadow-black shadow-lg items-center justify-center"
          onClick={fetchData}
        >
          Start
        </button>
      </div>
      <textarea
        placeholder="Choose a Device to Report ..."
        className="flex outline-none h-fit p-3 shadow-inner rounded-lg shadow-black"
        value={startupConfig}
      />
      <div className="flex justify-center">
        <button
          className="bg-blue-700 text-white p-2 rounded-full w-[10%] shadow-black shadow-lg items-center justify-center"
          onClick={fetchData2}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Start_up_Configuration;
