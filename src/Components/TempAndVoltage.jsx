import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TempAndVoltage = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [temp, setTemp] = useState();
  const [volt, setVolt] = useState();

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

  const fetchData = async () => {
    {
      iP == null
        ? notifyD("Please Select a Device")
        : await fetch(
            `http://localhost:3000/dashboard/hardware/tempvolt?selectedDeviceIP=${iP}`
          )
            .then((res) => res.json())
            .then((data) => {
              setTemp(data.TempReadings);
              setVolt(data.VoltReadings);
            }, []);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const notifyD = (msg) => {
    toast.error(msg, {
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
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">Temperature & Voltage</div>
      <div className="flex flex-col gap-3">
        <div className="flex  justify-center items-center gap-5 ">
          <div className="flex w-full items-center">
            <div className="font-bold text-blue-700 w-[15%]">
              Choose a Device
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900  shadow-lg text-white shadow-black rounded-full ">
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
            onClick={fetchData}
            className="bg-green-800  text-white hover:bg-[rgb(0,255,0)] w-[15%] p-2 rounded-full shadow-black shadow-lg items-center justify-center"
          >
            Start
          </button>
        </div>
        <div className=" flex w-full gap-5 justify-around ">
          <div className=" flex flex-col w-[50%]">
            <div className="font-bold">Temperature</div>
            <div>
              <textarea
                className="w-full shadow-inner shadow-black rounded-md p-2 outline-none"
                value={temp}
              />
            </div>
          </div>
          <div className=" flex flex-col justify-end w-[50%]">
            <div className="font-bold">Voltage</div>
            <div>
              <textarea
                className="w-full shadow-inner shadow-black rounded-md p-2 outline-none"
                value={volt}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TempAndVoltage; //Done
