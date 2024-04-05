import React, { useContext, useEffect, useState } from "react";
import Toodelete2 from "./Toodelete2";
import TooDelete3 from "./TooDelete3";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../alertsContext";

const Toodelete = () => {
  const navigate = useNavigate();
  const [IP, setIP] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alerts, setAlerts] = useContext(AlertContext);

  const BringData = async () => {
    await fetch("http://localhost:3000/data1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIP(data.ip);
        setUsername(data.username);
        setPassword(data.password);
      });

    await fetch("http://localhost:3000/data2")
      .then((res) => res.json())
      .then((data1) => {
        setAlerts(data1.message);
      });
  };

  return (
    <div className="flex bg-gray-300 h-screen flex-col justify-center items-center  gap-5">
      <button
        onClick={BringData}
        className="bg-blue-600 w-40  text-white p-5 rounded-xl shadow-black shadow-sm"
      >
        Click
      </button>
      <Toodelete2 IPx={IP} usernamex={username} passwordx={password} />
      <div>
        <TooDelete3 msgx={message} />
      </div>
      <button
        onClick={() => navigate("/4")}
        className="bg-red-600 w-40  text-white p-5 rounded-xl shadow-black shadow-sm"
      >
        Click 4
      </button>
    </div>
  );
};

export default Toodelete;
