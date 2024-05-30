import React, { useEffect, useState } from "react";
import "/src/Css/pingbutton.css";
import ExistingDevives from "./ExistingDevives";

const BoardInfo = ({
  Name,
  Description,
  Pid,
  Vid,
  Sn,
  Percentage,
  Active,
  Port1,
  Port2,
  Port3,
  State1,
  State2,
  State3,
  Active1,
  Active2,
  Active3,
  Memory,
  Type1,
  Type2,
  Type3,
}) => {
  const [pingMessage, setPingMessage] = useState();
  const [sORf, setSorF] = useState();
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedDevice2, setSelectedDevice2] = useState("");
  const [device, setDevice] = useState([]);
  const [val, setVal] = useState();
  const [iP, setIP] = useState();
  const [iP2, setIP2] = useState();

  const fetchPing = async () => {
    await fetch("http://localhost:3000/dashboard/basicConnectivity")
      .then((res) => res.json())
      .then((data) => {
        setVal(data.Message[0].value);
        setPingMessage(data.Message[0].success_rate);
        console.log("data Sent");
        Send_IP_ToServer();
      });
  };

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

  useEffect(() => {
    fetchDevices();
  }, []);

  const Send_IP_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/basicInfo?selectedDeviceIP=${iP}&&selectedDeviceIP2=${iP2}`
    );
    const data = await response.json();
    console.log("data sent");
  };

  return (
    <div className="flex flex-col  bg-transparent w-full h-full p-5 gap-3">
      <ExistingDevives />

      {/* Hardware Info Router */}
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold text-xl">Hardware Router indivation:</div>
        <div className="flex w-full p-3 items-center bg-gray-400 rounded-full shadow-md shadow-black">
          <div className="flex w-[10%] h-full">
            {" "}
            <img src={"/Router.png"} />
          </div>
          <div className="flex items-center w-full justify-around">
            <div className="flex flex-col items-center font-bold">
              <div className="flex items-center gap-1">
                <div>Activity: </div>
                <div
                  className={` ${
                    Active
                      ? " rounded-full p-2 shadow-black shadow-md animate-pulse bg-[rgb(0,255,0)]"
                      : " rounded-full p-2 shadow-black shadow-inner bg-[rgb(97,96,96)]"
                  }`}
                ></div>
              </div>
              <div className="flex gap-1">
                <div>Name:</div>
                <div className="text-blue-700">{Name}</div>
              </div>
            </div>
            <div className="flex flex-col items-center font-bold">
              <div className="flex gap-1">
                <div>Description: </div>
                <div className="text-blue-700">{Description}</div>
              </div>
              <div className="flex gap-1">
                <div>Version ID: </div>
                <div className="text-blue-700">{Vid}</div>
              </div>
            </div>

            <div className="flex flex-col items-center font-bold ">
              <div className="flex gap-1">
                <div>Product ID: </div>
                <div className="text-blue-700"> {Pid}</div>
              </div>
              <div className="flex gap-1">
                <div>Serial Num: </div>
                <div className="text-blue-700">{Sn}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold text-xl pl-5 flex ">Interfaces</div>
        <div className="flex w-full h-full gap-3 items-center">
          <div className="flex flex-col gap-3 w-[65%]">
            <div
              className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           Active1 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${State1 == "Administratively" ? "to-[rgb(154,29,180)]" : ""}`}
            >
              <div>
                {Type1} {Port1}
              </div>
              <div> {Active1 ? `${State1}` : " Down "} </div>
            </div>
            <div
              className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           Active2 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }  ${State2 == "Administratively" ? "to-[rgb(154,29,180)]" : ""}`}
            >
              <div>
                {" "}
                {Type2} {Port2}
              </div>
              <div> {Active2 ? `${State2}` : " Down "} </div>
            </div>
            <div
              className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           Active3 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${State3 == "Administratively" ? "to-[rgb(154,29,180)]" : ""} `}
            >
              <div>
                {" "}
                {Type3} {Port3}
              </div>
              <div> {Active3 ? `${State3}` : " Down "} </div>
            </div>
          </div>
          <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[40%]">
            <div className=" bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)]  p-2  rounded-full ">
              <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                {Percentage}
              </div>
            </div>
            <div className="flex flex-col items-center font-bold">
              <div>Memory R1 </div>
              <div className="text-blue-700 ">{Memory}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Check Connectivity */}
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
              onClick={fetchPing}
              className="ping flex items-center justify-center bg-green-600 w-full h-[80%] text-white font-bold rounded-full p-2  shadow-lg shadow-black "
            >
              Ping
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold gap-2 w-fit justify-center  bg-gray-400 shadow-sm shadow-black rounded-md p-2">
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
    </div>
  );
};

export default BoardInfo;
