import React, { useEffect, useState } from "react";
import HardwareLoop from "./HardwareLoop";
import "/src/Css/FetchButton.css";
import "/src/Css/BringHardWares.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TempAndVoltage2 from "../Components/TempAndVoltage2";

const FlipCard = () => {
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
  const [percentages, setPercentages] = useState();
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [temp, setTemp] = useState();
  const [volt, setVolt] = useState();

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
    {
      iP == null
        ? notifyD("Please Select a Device")
        : (await fetch(
            `http://localhost:3000/dashboard/basicInfo?selectedDeviceIP=${iP}`
          )
            .then((res) => res.json())
            .then((data) => {
              setName(data.resultHardware.Hardware.map((item) => item.name));
              setIDs(data.resultHardware.Hardware.map((item) => item.r));
              setDescription(
                data.resultHardware.Hardware.map((item) => item.descr)
              );
              setPID(data.resultHardware.Hardware.map((item) => item.pid));
              setSN(data.resultHardware.Hardware.map((item) => item.sn));
              setVID(data.resultHardware.Hardware.map((item) => item.vid));
              setActives(
                data.resultInterfaces.Interfaces.map((item) => item.active)
              );
              setInterface1Active(data.resultInterfaces.Interfaces[0].active);
              setInterface2Active(data.resultInterfaces.Interfaces[1].active);
              setInterface3Active(data.resultInterfaces.Interfaces[2].active);
              setInterface1Port(data.resultInterfaces.Interfaces[0].port);
              setInterface2Port(data.resultInterfaces.Interfaces[1].port);
              setInterface3Port(data.resultInterfaces.Interfaces[2].port);
              setInterface1state(data.resultInterfaces.Interfaces[0].state);
              setInterface2state(data.resultInterfaces.Interfaces[1].state);
              setInterface3state(data.resultInterfaces.Interfaces[2].state);
              setInterface1type(data.resultInterfaces.Interfaces[0].type);
              setInterface2type(data.resultInterfaces.Interfaces[1].type);
              setInterface3type(data.resultInterfaces.Interfaces[2].type);
              setPercentages(data.resultMemory.Memory.percentage);
            }, []),
          fetchDataTempAndVolt());
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

  const fetchDataTempAndVolt = async () => {
    await fetch(
      `http://localhost:3000/dashboard/hardware/tempvolt?selectedDeviceIP=${iP}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.TempReadings);
        setVolt(data.VoltReadings);
      }, []);
  };

  return (
    <div className="flex flex-col p-5 h-full gap-3 w-full overflow-y-scroll bg-gray-400">
      <div className=" flex flex-col p-20 bg-[url('../public/Ad_Hardware.png')] bg-no-repeat w-full rounded-full gap-3 shadow-lg shadow-black"></div>

      <div>
        {/* Hardware Info Router */}
        <div className=" flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black">
          <div className=" flex flex-col gap-3">
            <div className="font-bold text-xl">Hardware Info Router :</div>
            <div className="flex  justify-around p-3 items-center w-full h-full">
              <div className="flex gap-3 h-full items-center w-full">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose wanted device
                  </div>
                  <div className="text-gray-600 font-bold">
                    it will return all related info:
                  </div>
                </div>
                <div className="flex justify-around h-[80%] items-center bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
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
              <div className=" flex w-full justify-end gap-5">
                <button
                  onClick={Send_IP_ToServer}
                  className="fetchbutton items-center flex justify-center bg-blue-900 text-white p-3 w-[30%] rounded-full shadow-black shadow-md"
                >
                  Start
                </button>

                <ToastContainer />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TempAndVoltage2 T={temp} V={volt} />
    </div>
  );
};

export default FlipCard; //Done
