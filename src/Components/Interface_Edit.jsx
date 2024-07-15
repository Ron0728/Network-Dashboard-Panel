import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interface_Edit = ({ DV, IP }) => {
  const [hostname, setHostname] = useState();
  const [ip, setIP] = useState();

  const handleChangeName = (event1) => {
    setHostname(event1.target.value);
    console.log(hostname);
  };

  const handleChangeIP = (event) => {
    setIP(event.target.value);
    console.log(ip);
  };

  const Send_data_ToServer2 = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/troubleshooting/interfaces?EditedName=${hostname}&&EditedIP=${ip}`
    );
    const data = await response.json();
    console.log("K : ", data);
    setSW_IN(data);
    console.log("The HostName Updated with : ", hostname);
    console.log("The IP Updated with : ", ip);
  };

  const Send_data_ToServer = async () => {
    {
      hostname && ip
        ? (Send_data_ToServer2(), notifyG("Done"))
        : notifyW("Please Enter The IP and HostName");
    }
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

  return (
    <div className="flex font-bold gap-10">
      <div className="flex items-center gap-3">
        <p>Hostname : </p>
        <input
          value={hostname}
          onChange={handleChangeName}
          className="shadow-inner rounded-lg outline-none shadow-black p-1 flex items-center justify-center"
          type="text "
          placeholder={`${DV}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <p>IP : </p>
        <input
          value={ip}
          onChange={handleChangeIP}
          className="shadow-inner rounded-lg outline-none shadow-black p-1 flex items-center justify-center"
          type="text "
          placeholder={`${IP}`}
        />
      </div>
      <button
        onClick={Send_data_ToServer}
        className="p-2 flex items-center justify-center bg-blue-700 text-white rounded-lg shadow-black shadow-lg"
      >
        Edit
      </button>
      <ToastContainer />
    </div>
  );
};

export default Interface_Edit;
