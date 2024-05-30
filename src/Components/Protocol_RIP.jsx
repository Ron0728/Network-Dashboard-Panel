import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";
import WAlertMSG from "./WAlertMSG";
import DAlertMSG from "./DAlertMSG";
import GAlertMSG from "./GAlertMSG";
import SAlertMSG from "./SAlertMSG";
import axios from "axios";

const Protocol_RIP = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [subnetRIPData, setSubnetRIPData] = useState("");
  const [networkRIPData, setNetworkRIPData] = useState("");
  const [selectedVersionRip, setSelectedVersionRip] = useState("");
  const [isbuttonClicked, setIsButtonClicked] = useState(false);
  const [iP, setIP] = useState();
  const navigate = useNavigate();

  const [alertGoodMessages, setAlertGoodMessages] =
    useContext(AlertContextGood);
  const [alertWarningMessages, setAlertWarningMessages] =
    useContext(AlertContextWarrning);
  const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
    AlertContextSuggested
  );
  const [alertDangerMessages, setAlertDangerMessages] =
    useContext(AlertContextDanger);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchRIPdata = async () => {
    Send_data_ToServer();
    await fetch("http://localhost:3000/dashboard/protocols/rip")
      .then((res) => res.json())
      .then((data) => {
        {
          data.messageRipW ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG alertWarningMessages={data.messageRipW} />,
            ]),
            call_ALerts("Worning from Rip Protocol"))
          ) : (
            <></>
          );
        }
        {
          data.messageRipD ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG alertDangerMessages={data.messageRipD} />,
            ]),
            call_ALerts("Danger from Rip Protocol"))
          ) : (
            <></>
          );
        }
        {
          data.message ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG alertGoodMessages={data.message} />,
            ]),
            call_ALerts("RIP configured successfully"))
          ) : (
            <></>
          );
        }
        {
          data.messageRipS ? (
            (setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG alertSuggestedMessages={data.messageRipS} />,
            ]),
            call_ALerts("RIP Suggested message"))
          ) : (
            <></>
          );
        }

        // call_ALerts("done from rip");
      });
  };

  function call_ALerts(msg) {
    alert(msg);
  }

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

  const handleChange_for_RIP = (event1) => {
    setSubnetRIPData(event1.target.value);
  };

  const handleChange2_for_RIP = (event) => {
    setNetworkRIPData(event.target.value);
  };

  const handleVersionRipChange = (event) => {
    const selectedVersionRip = event.target.value;
    setSelectedVersionRip(selectedVersionRip);
    console.log("version : ", selectedVersionRip);
  };

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const Send_data_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/info/interfaces?RouterRIP=${selectedDevice}&&Version=${selectedVersionRip}&&NetworkRIP=${networkRIPData}&&SubnetRIP=${subnetRIPData}`
    );
    const data = await response.json();
    console.log("data sent");
  };

  const discard = () => {
    setNetworkRIPData("");
    setSubnetRIPData("");
  };

  return (
    <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
      <div className="font-bold text-2xl">RIP Configuration:</div>
      <div className="flex justify-between">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-7">
            <div>
              <div className="text-blue-700 w-full font-bold">
                Choose wanted device
              </div>
              <div className="flex justify-center font-bold text-gray-600">
                to apply RIP to it
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
                  value={selectedDevice}
                  onChange={handlerDeviceChange}
                >
                  <option className="text-black">Choose</option>
                  {device.map((D) => (
                    <option className="text-black " key={D.id} value={D.name}>
                      {D.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <div className="flex justify-center text-gray-600 font-bold">
                insert network
              </div>
              <div className="text-gray-600 font-bold">Applying Network</div>
            </div>
            <input
              value={networkRIPData}
              onChange={handleChange2_for_RIP}
              className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
        <div className="  flex flex-col gap-5 ">
          <div className="flex items-center -translate-y-1.5 h-full gap-7">
            <div className="text-blue-700 font-bold">Choose RIP version</div>
            <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent text-white p-2  outline-none "
                  value={selectedVersionRip}
                  onChange={handleVersionRipChange}
                >
                  <option className="text-black">Choose</option>
                  <option className="text-black" value="1">
                    1
                  </option>
                  <option className="text-black" value="2">
                    2
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 -translate-y-2 items-center">
            <div className="text-gray-600 font-bold">Insert subnet</div>
            <input
              value={subnetRIPData}
              onChange={handleChange_for_RIP}
              className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <button
            onClick={fetchRIPdata}
            className={`px-4 py-2 rounded-lg ${
              isbuttonClicked
                ? "apply shadow-in shadow-black bg-black text-white p-3 w-[20%] rounded-full"
                : "apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
            } text-white`}
          >
            Apply
          </button>
          <button
            onClick={discard}
            className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Disable
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/setting/rip");
            }}
            className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            RIP info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protocol_RIP;
