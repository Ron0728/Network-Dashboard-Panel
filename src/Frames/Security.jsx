import React, { useEffect, useState } from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/startcheckingbutton.css";
import { FaNetworkWired } from "react-icons/fa6";
import MoreNetButtom from "../Components/MoreNetButton";
import LevelPieChart from "../Charts/LevelPieChart";
import MoreNetworks from "../Components/MoreNetworks";
import ExistingDevives from "../Components/ExistingDevives";

const Security = () => {
  const [selectedDevice_Config, setSelectedDevice_Config] = useState("");
  const [device, setDevice] = useState([]);
  const [configaudit, setConfigaudit] = useState([]);
  const [iP, setIP] = useState();
  const [iP_Confing, setIP_Config] = useState();
  const [diff_Percentage, setDiff_Percentage] = useState();

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const fetchDevices_configaudit = async () => {
    await fetch("http://localhost:3000/dashboard/security/configaudit")
      .then((res) => res.json())
      .then((data) => {
        setConfigaudit(data);
        setDiff_Percentage(data.diff_percentage);
        setDiff_Percentage(data.device_ip);
        console.log(data);
        console.log(data.diff_percentage);
        console.log(data.device_ip);
      }, []);
  };

  const handlerDeviceChange_Config = (event) => {
    const selectedDevice_Config = event.target.value;
    setSelectedDevice_Config(selectedDevice_Config);
    const selectedDevice_ConfigIP = device.find(
      (device) => device.name === selectedDevice_Config
    ).ip;
    setIP_Config(selectedDevice_ConfigIP);
    console.log(
      `Selected device: ${selectedDevice_Config}, Selected IP: ${selectedDevice_ConfigIP}`
    );
  };

  const Send_IP_Config_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/basicInfo?iP_Confing=${iP_Confing}`
    );
    const data = await response.json();

    console.log("data sent");
  };

  useEffect(() => {
    fetchDevices();
    fetchDevices_configaudit();
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-3 bg-gray-400 p-5 overflow-y-scroll">
      <div className="bg-gradient-to-r text-gray-800 from-blue-700 to-white p-5 rounded-full font-bold shadow-md shadow-black">
        Text
      </div>

      <ExistingDevives />

      {/* Accessability */}
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fit shadow-lg shadow-black ">
        <div className="font-bold text-xl ">Accessability</div>

        <div className="flex gap-3 items-center h-full  w-full sm:w-1/2">
          <div>
            <div className="text-blue-700 text-lg font-bold">
              Choose the device{" "}
              <span className="text-gray-600 text-sm font-bold">
                to edit accessabilty
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[20%] shadow-lg text-white shadow-black rounded-full ">
            <form className="flex items-center justify-center">
              <select
                className="bg-transparent outline-none "
                value={selectedDevice_Config}
                onChange={handlerDeviceChange_Config}
              >
                <option>Choose</option>
                {device.map((D) => (
                  <option className="text-black " key={D.id} value={D.name}>
                    {D.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>

        <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold bg-gradient-to-r from-[rgb(0,255,0)] to-gray-500 shadow-md shadow-black p-2 rounded-full">
            Permition list
          </div>
          <MoreNetworks />
        </div>
        <div className="flex flex-col  bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold shadow-md shadow-black bg-gradient-to-r from-[rgb(255,0,0)] to-gray-500 p-2 rounded-full">
            Prevention list
          </div>
          <MoreNetworks />
        </div>

        <div className=" flex gap-5">
          <button className="apply bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Apply
          </button>
          <button className="discard bg-warmGray-600 text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Discard
          </button>
        </div>
      </div>

      {/* Security Audit */}
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
        <div className="font-bold text-xl">Security Audit</div>
        <div className="flex h-full justify-between">
          <div className="flex items-center gap-3  w-[30%] ">
            <div className="md:flex-col">
              <div className="text-blue-700 font-bold">Choose the device</div>
            </div>
            <div className="flex justify-around items-center bg-blue-900 w-[40%] h-[80%] shadow-lg text-white shadow-black rounded-full ">
              <form className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
                  value={selectedDevice_Config}
                  onChange={handlerDeviceChange_Config}
                >
                  <option>Choose</option>
                  {device.map((D) => (
                    <option className="text-black " key={D.id} value={D.name}>
                      {D.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
          <button
            onClick={Send_IP_Config_ToServer}
            className="startchecking bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md"
          >
            Start
          </button>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="font-bold text-blue-600">
            Securtity level according to CISCO & Al-Baath standards:
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="flex gap-5  ">
        <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
          <div className=" w-full  ">
            <LevelPieChart />
            <div className=" font-bold flex justify-center">CISCO</div>
          </div>
          <div className="flex font-bold flex-col gap-3 items-center justify-center w-full">
            <button className="bg-gray-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Check
            </button>
            <button className="bg-green-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Start
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
          <div className="w-full ">
            <LevelPieChart PERCENT={diff_Percentage} />
            <div className=" font-bold flex justify-center items-center">
              AL-Baath
            </div>
          </div>
          <div className="flex font-bold flex-col gap-3 items-center justify-center w-full">
            <button className="bg-gray-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Check
            </button>
            <button className="bg-green-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
