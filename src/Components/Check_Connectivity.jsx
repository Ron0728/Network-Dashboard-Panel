import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Check_Connectivity = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedDevice2, setSelectedDevice2] = useState("");
  const [val, setVal] = useState();
  const [pingMessage, setPingMessage] = useState();
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [iP2, setIP2] = useState();

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

  const handlerDevice2Change = (event2) => {
    const selectedDevice2 = event2.target.value;
    setSelectedDevice2(selectedDevice2);
    const selectedDeviceIP2 = device.find(
      (device) => device.name === selectedDevice2
    ).ip;
    setIP2(selectedDeviceIP2);
    console.log(
      `Selected device: ${selectedDevice2}, Selected IP: ${selectedDeviceIP2}`
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

  const fetchPing = async () => {
    await fetch(
      `http://localhost:3000/dashboard/basicConnectivity?selectedDeviceIP1=${iP}&&selectedDeviceIP2=${iP2}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVal(data.percent);
        setPingMessage(data.success_rate);
        console.log("data Sent");
      });
  };

  const Send_IP_ToServer = () => {
    {
      (iP && iP2) == null ? (
        notifyD("Please Select the Devices")
      ) : iP == iP2 ? (
        notifyW(`Can't be Pinging to the same Router with the IP ${iP} `)
      ) : iP && iP2 ? (
        (fetchPing(), notifyG(`Ping is Done With ${iP} and ${iP2}`))
      ) : (
        <></>
      );
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
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">Check Connectivity:</div>
      <div className="flex w-full h-full justify-around">
        <div className="flex gap-3 items-center w-[50%]">
          <div>
            <div className="flex flex-col text-blue-700 font-bold">
              Choose First Device
              <span className=" text-gray-600 font-bol">
                One Sending ICMP Request
              </span>{" "}
            </div>
          </div>
          <div className="flex justify-around items-center h-[70%]  bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
            <div className="flex items-center justify-center">
              <select
                className="bg-transparent text-white outline-none "
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

        {/* selectedDeviceIP1 */}

        <div className="flex gap-3 items-center w-[50%]">
          <div>
            <div className="flex flex-col text-blue-700 font-bold">
              Choose Second Device
              <span className=" text-gray-600 font-bol">
                One Sending ICMP Request
              </span>{" "}
            </div>
          </div>
          <div className="flex justify-around items-center h-[70%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
            <div className="flex items-center justify-center">
              <select
                className="bg-transparent text-white outline-none "
                value={selectedDevice2}
                onChange={handlerDevice2Change}
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
        {/* selectedDeviceIP */}
        <div className=" flex justify-center items-center h-full w-[10%]">
          <button
            onClick={Send_IP_ToServer}
            className="ping flex items-center justify-center bg-green-600 w-full h-[70%] text-white font-bold rounded-full p-3 shadow-lg shadow-black "
          >
            Ping
          </button>
          <ToastContainer />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex font-bold gap-2 w-fit justify-center bg-gray-400 shadow-sm shadow-black rounded-md p-2">
          Ping :
          <div
            className={`${val == "(5/5)" ? "text-[rgb(0,150,0)]" : ""} ${
              val == "(4/5)" ? "text-green-700" : ""
            } ${val == "(3/5)" ? "text-yellow-400" : ""}
            ${val == "(2/5)" ? "text-orange-500" : ""}
            ${val == "(1/5)" ? "text-[rgb(255,0,0)]" : ""}`}
          >
            {pingMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check_Connectivity; //Done
