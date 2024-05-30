import React, { useEffect, useState } from "react";
import HardwareLoop from "./HardwareLoop";
import "/src/Css/FetchButton.css";
import "/src/Css/BringHardWares.css";

const FlipCard = () => {
  const [data5, setData5] = useState([]);
  const [name1, setName] = useState([]);
  const [ids, setIDs] = useState([]);
  const [description, setDescription] = useState([]);
  const [pid, setPID] = useState([]);
  const [sn, setSN] = useState([]);
  const [vid, setVID] = useState([]);
  const [actives, setActives] = useState(false);
  const [interface1Port, setInterface1Port] = useState();
  const [interface2Port, setInterface2Port] = useState();
  const [interface3Port, setInterface3Port] = useState();
  const [interface1Active, setInterface1Active] = useState(false);
  const [interface2Active, setInterface2Active] = useState(false);
  const [interface3Active, setInterface3Active] = useState(false);
  const [interface1state, setInterface1state] = useState();
  const [interface2state, setInterface2state] = useState();
  const [interface3state, setInterface3state] = useState();
  const [interface1type, setInterface1type] = useState();
  const [interface2type, setInterface2type] = useState();
  const [interface3type, setInterface3type] = useState();
  const [memory, setMemory] = useState();
  const [percentages, setPercentages] = useState();
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();

  const fetchData = async () => {
    await fetch("http://localhost:3000/dashboard/basicInfo")
      .then((res) => res.json())
      .then((data) => {
        setData5(data.Hardware);
        setName(data.Hardware.map((item) => item.name));
        setIDs(data.Hardware.map((item) => item.r));
        setDescription(data.Hardware.map((item) => item.descr));
        setPID(data.Hardware.map((item) => item.pid));
        setSN(data.Hardware.map((item) => item.sn));
        setVID(data.Hardware.map((item) => item.vid));
        setActives(true);
        setInterface1Active(data.Interfaces[0].active);
        setInterface2Active(data.Interfaces[1].active);
        setInterface3Active(data.Interfaces[2].active);
        setInterface1Port(data.Interfaces[0].port);
        setInterface2Port(data.Interfaces[1].port);
        setInterface3Port(data.Interfaces[2].port);
        setInterface1state(data.Interfaces[0].state);
        setInterface2state(data.Interfaces[1].state);
        setInterface3state(data.Interfaces[2].state);
        setInterface1type(data.Interfaces[0].type);
        setInterface2type(data.Interfaces[1].type);
        setInterface3type(data.Interfaces[2].type);
        setPercentages(data.Percentage.percentage);
        setMemory(data.Memory.memory_usage);
      }, []);
  };

  // ----------------------------------------------------------
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
    const selectedDeviceIP_Hardware = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP_Hardware);
    console.log(
      `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP_Hardware}`
    );
  };

  const Send_IP_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/basicInfo?selectedDeviceIP_Hardware=${iP}`
    );
    const data = await response.json();

    console.log("data sent");
  };
  // -------------------------------------------------------------------------------

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="p-5 w-full overflow-y-scroll bg-gray-400">
      <div>
        {/* Hardware Info Router */}
        <div className=" flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black">
          <div className=" flex flex-col gap-3">
            <div className="font-bold text-xl">Hardware Info Router :</div>
            <div className="flex  justify-around p-3  w-full h-full">
              <div className="flex gap-3 h-[50%] w-full">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose wanted device
                  </div>
                  <div className="text-gray-600 font-bold">
                    it will return all related info:
                  </div>
                </div>
                <div className="flex justify-around items-center bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
                  <form className="flex items-center justify-center">
                    <select
                      className="bg-transparent outline-none "
                      value={selectedDevice}
                      onChange={handlerDeviceChange}
                    >
                      <option>Choose</option>
                      {device.map((D) => (
                        <option
                          className="text-black "
                          key={D.id}
                          value={D.name}
                        >
                          {D.name}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
              <div className=" flex w-full h-[50%]  justify-end gap-5">
                <button
                  onClick={Send_IP_ToServer}
                  className="fetchbutton items-center flex justify-center bg-blue-900 text-white p-3 w-[30%] rounded-full shadow-black shadow-md"
                >
                  Start
                </button>
                <button
                  onClick={fetchData}
                  className="BringHardWares bg-black text-white p-3 w-[35%] rounded-full shadow-black shadow-md"
                >
                  Bring Hardwares
                </button>
              </div>
            </div>

            <div className="flex flex-col  gap-3">
              {ids.map((ids) => (
                <HardwareLoop
                  NA={name1}
                  DS={description}
                  PID={pid}
                  SN={sn}
                  VID={vid}
                  I={ids}
                  ACT={actives}
                />
              ))}
            </div>

            <div className="font-bold text-xl pl-5 flex ">Interfaces</div>
            <div className="flex w-full h-full gap-3 items-center">
              <div className="flex flex-col gap-3 w-[65%]">
                <div
                  className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           interface1Active ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${
                    interface1state == "Administratively"
                      ? "to-[rgb(154,29,180)]"
                      : ""
                  }`}
                >
                  <div>
                    {interface1type} {interface1Port}
                  </div>
                  <div>
                    {interface1Active ? `${interface1state}` : " Down "}
                  </div>
                </div>
                <div
                  className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           interface2Active ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${
                    interface2state == "Administratively"
                      ? "to-[rgb(154,29,180)]"
                      : ""
                  }  `}
                >
                  <div>
                    {interface2type} {interface2Port}
                  </div>
                  <div>
                    {interface2Active ? `${interface2state}` : " Down "}
                  </div>
                </div>
                <div
                  className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           interface3Active ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${
                    interface3state == "Administratively"
                      ? "to-[rgb(154,29,180)]"
                      : ""
                  }`}
                >
                  <div>
                    {interface3type} {interface3Port}
                  </div>
                  <div>
                    {interface3Active ? `${interface3state}` : " Down "}
                  </div>
                </div>
              </div>
              <div className=" flex w-[35%] bg-gray-400 shadow-black  shadow-md justify-around items-center rounded-full h-[40%]">
                <div className=" bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)]  p-2  rounded-full ">
                  <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                    {percentages}
                  </div>
                </div>
                <div className="flex flex-col items-center font-bold">
                  <div>Memory R1 </div>
                  <div className="text-blue-700 ">{memory}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
