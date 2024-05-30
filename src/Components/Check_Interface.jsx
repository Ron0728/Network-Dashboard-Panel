import React, { useEffect, useState } from "react";
import InterfacesLoop from "../Components/InterfacesLoop";

const Check_Interface = () => {
  const [selectedDevice_Interface, setSelectedDevice_Interface] = useState("");
  const [device, setDevice] = useState([]);
  const [iP_Interface, setIP_Interface] = useState();

  const handlerDevice_Interface = (event4) => {
    const selectedDevice_Interface = event4.target.value;
    setSelectedDevice_Interface(selectedDevice_Interface);
    const selectedDeviceIP_Interface = device.find(
      (device) => device.name === selectedDevice_Interface
    ).ip;
    setIP_Interface(selectedDeviceIP_Interface);
    console.log(
      `Selected device : ${selectedDevice_Interface} with the ip of : ${selectedDeviceIP_Interface} from Interface`
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

  const Send_IP_ToCheckInterface_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/basicInfo?selectedDeviceIP_check=${iP_Interface}`
    );
    const data = await response.json();
    console.log("data sent");
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
            <div className="flex justify-around items-center h-[70%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent text-white outline-none "
                  value={selectedDevice_Interface}
                  onChange={handlerDevice_Interface}
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
          <div className="flex items-center justify-end w-full ">
            <button
              onClick={Send_IP_ToCheckInterface_ToServer}
              className="startchecking flex bg-blue-950 p-5 h-[70%] items-center justify-center text-white font-bold rounded-full shadow-lg shadow-black"
            >
              Start checking
            </button>
          </div>
        </div>
        <div>
          <InterfacesLoop />
        </div>
      </div>
    </div>
  );
};

export default Check_Interface;
