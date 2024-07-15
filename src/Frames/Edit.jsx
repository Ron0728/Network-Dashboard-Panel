import React, { useEffect, useState } from "react";
import ExistingDevives from "../Components/ExistingDevives";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const [device, setDevice] = useState([]);
  const [hostname, setHostname] = useState();
  const [ip, setIP] = useState();
  const [routerInterface, setRouterInterface] = useState();
  const [dns, setDNS] = useState();
  const [port, setPort] = useState();
  const [subnet, setSubnet] = useState();

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

  const handleChangeHostName = (event) => {
    setHostname(event.target.value);
    console.log(hostname);
  };

  const handleChangeIP = (event1) => {
    setIP(event1.target.value);
    console.log(ip);
  };

  const handleChangeRouterInterface = (event2) => {
    setRouterInterface(event2.target.value);
    console.log(routerInterface);
  };

  const handleChangeDNS = (event3) => {
    setDNS(event3.target.value);
    console.log(dns);
  };

  const handleChangePort = (event4) => {
    setPort(event4.target.value);
    console.log(port);
  };

  const handleChangeSubnet = (event5) => {
    setSubnet(event5.target.value);
    console.log(subnet);
  };

  const notifyG = (msg) => {
    toast.success(msg, {
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

  const notifyI = (msg) => {
    toast.info(msg, {
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

  const notifyW = (msg) => {
    toast.console.warn(msg, {
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

  const Send_data_ToServer2 = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/troubleshooting/interfaces?EditedName=${hostname}&&EditedIP=${ip}&&EditedSubnet=${subnet}&&EditedDNS=${dns}&&EditedPort=${port}&&EditedRI=${routerInterface}` //updata the API
    );
    const data = await response.json();
  };

  const Send_data_ToServer3 = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/troubleshooting/interfaces?EditetedInfo=${{
        hostname,
      }}` //updata the API
    );
    const data = await response.json();
  };

  const Edit_All = async () => {
    {
      hostname || ip || subnet || routerInterface || dns || port
        ? (Send_data_ToServer2(), notifyI("Updated"))
        : notifyW("Please Enter Something to Update");
    }
  };

  const Edit = async () => {
    {
      hostname || ip || subnet || routerInterface || dns || port
        ? (Send_data_ToServer3(), notifyI("Updated"))
        : notifyW("Please Enter Something to Update");
    }
  };

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <ExistingDevives />

      {/* <div className="flex flex-col gap-7 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="flex gap-20 items-center">
          <div className="font-bold text-xl">
            <p>Please choose a device that you want to edit</p>
          </div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[10%] shadow-lg text-white shadow-black rounded-full ">
            <div className="flex items-center justify-center">
              <select className="bg-transparent  outline-none ">
                <option className="text-black">Choose</option>
                {device.map((D) => (
                  <option
                    className="text-bl text-black "
                    key={D.id}
                    value={D.name}
                  >
                    {D.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full justify-between">
          <div className="flex flex-col h-full items-center gap-6 w-[30%]  ">
            <p className="flex flex-col font-bold  ">Host-Name : </p>
            <p className="font-bold">IP Address : </p>
            <p className="font-bold">Subnet Mask : </p>
            <p className="font-bold">Router Interface : </p>
            <p className="font-bold">DNS (Domain Name Server): </p>
            <p className="font-bold">Port: </p>
          </div>

          <div className="flex flex-col items-center gap-5 w-[40%] ">
            <input
              value={hostname}
              onChange={handleChangeHostName}
              className="flex p-1  h-[10%] rounded-lg outline-none shadow-inner shadow-black"
            />
            <input
              value={ip}
              onChange={handleChangeIP}
              className="flex p-1 rounded-lg h-[10%] outline-none shadow-inner shadow-black"
            />
            <input
              value={subnet}
              onChange={handleChangeSubnet}
              className="flex p-1 rounded-lg h-[10%] outline-none shadow-inner shadow-black"
            />
            <input
              value={routerInterface}
              onChange={handleChangeRouterInterface}
              className="flex p-1 rounded-lg h-[10%] outline-none shadow-inner shadow-black"
            />
            <input
              value={dns}
              onChange={handleChangeDNS}
              className="flex p-1 rounded-lg h-[10%] outline-none shadow-inner shadow-black"
            />
            <input
              value={port}
              onChange={handleChangePort}
              className="flex p-1 rounded-lg h-[10%] outline-none shadow-inner shadow-black"
            />
          </div>

          <div className="flex flex-col items-center gap-6 w-[30%] ">
            <button
              onClick={Edit}
              className=" text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={Edit}
              className="text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={Edit}
              className="text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={Edit}
              className="text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={Edit}
              className="text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
            <button
              onClick={Edit}
              className="text-white w-[20%] justify-center bg-blue-600 p-1 flex items-center rounded-lg shadow-black shadow-md"
            >
              <MdEdit />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={Edit_All}
            className="text-white w-[15%] justify-center bg-blue-700 p-1 flex items-center rounded-lg shadow-black shadow-md"
          >
            Edit All
          </button>
          <ToastContainer />
        </div>
      </div> */}
    </div>
  );
};

export default Edit;
