import React, { useEffect, useState } from "react";
import InterfacesLoop from "./InterfacesLoop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Check_Protocol_Interfaces = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [sw_in, setSW_IN] = useState();

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
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
    notifyI(
      `The IP ${selectedDeviceIP} has been Selected to see its Interfaces`
    );
  };

  const Send_data_ToServer = async () => {
    try {
      {
        iP == null
          ? notifyD("Please Select a Device")
          : await fetch(
              `http://localhost:3000/dashboard/troubleshooting/interfacesloop?selectedDeviceIP=${iP}`
            )
              .then((res) => res.json())
              .then((data) => {
                setSW_IN(data);
                notifyG("Done");
              });
      }
    } catch {
      notifyW("Something Went Wrong");
    }
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

  const notifyW = (msg) => {
    toast.warn(msg, {
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
    <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">Check Interfaces:</div>
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-5">
          <div className="flex items-center w-full h-full gap-3 ">
            <div className="flex w-full items-center">
              <div className="text-blue-700 text-lg font-bold">
                Choose wanted device{" "}
                <span className="text-sm  text-gray-600">
                  all interfaces status & option
                </span>
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
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
          <div className="flex justify-end w-full h-full">
            <button
              onClick={Send_data_ToServer}
              className="startchecking -translate-x-3 flex justify-center  bg-blue-900 p-3  text-white rounded-full shadow-lg shadow-black"
            >
              Start Checking
            </button>
          </div>
        </div>
        <div>
          <InterfacesLoop SW_INTERFACE={sw_in} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Check_Protocol_Interfaces;
