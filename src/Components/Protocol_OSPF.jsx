import React, { useContext, useEffect, useState } from "react";
import SAlertMSG from "./SAlertMSG";
import GAlertMSG from "./GAlertMSG";
import DAlertMSG from "./DAlertMSG";
import WAlertMSG from "./WAlertMSG";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Protocol_OSPF = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [subnetOSPFData, setSubnetOSPFData] = useState("");
  const [networkOSPFData, setNetworkOSPFData] = useState("");
  const [selectedInterfaceOspfs, setSelectedInterfaceOspfs] = useState("");
  const [interfacesOspf, setInterfacesOspf] = useState([]);
  const [areaNumberData, setAreaNumberData] = useState("");
  const [alertGoodMessages, setAlertGoodMessages] =
    useContext(AlertContextGood);
  const [alertWarningMessages, setAlertWarningMessages] =
    useContext(AlertContextWarrning);
  const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
    AlertContextSuggested
  );
  const [alertDangerMessages, setAlertDangerMessages] =
    useContext(AlertContextDanger);

  const navigate = useNavigate();

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const fetchInterfaces = async (Router) => {
    try {
      const response = await fetch(
        `http://localhost:3000/info/interfaces?Router=${Router}`
      );
      const data = await response.json();
      setInterfacesOspf(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching interfaces:", error);
    }
  };

  const handlerDeviceChange = (event) => {
    const selectedDevice = event.target.value;
    setSelectedDevice(selectedDevice);
    fetchInterfaces(selectedDevice);
    const selectedDeviceIP = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP);
    console.log(
      `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP}`
    );
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleChange_for_OSPF = (event1) => {
    setSubnetOSPFData(event1.target.value);
  };

  const handleChange2_for_OSPF = (event) => {
    setNetworkOSPFData(event.target.value);
  };

  const handleInterfaceOspfChange = (event) => {
    const selectedInterfaceOspfs = event.target.value;
    setSelectedInterfaceOspfs(selectedInterfaceOspfs);
    console.log("OSPF Interface --> : ", selectedInterfaceOspfs);
  };

  const handleChange_for_AreaNumber = (event2) => {
    setAreaNumberData(event2.target.value);
  };

  const fetchOSPFdata = async () => {
    Send_data_ToServer();
    await fetch("http://localhost:3000/dashboard/protocols/ospf")
      .then((res) => res.json())
      .then((data) => {
        {
          data.messageOspfW ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG alertWarningMessages={data.messageOspfW} />,
            ]),
            call_ALerts("Warning from OSPF"))
          ) : (
            <></>
          );
        }
        {
          data.messageOspfD ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG alertDangerMessages={data.messageOspfD} />,
            ]),
            call_ALerts("Danger from OSPF"))
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
            call_ALerts("OSPF configured successfully"))
          ) : (
            <></>
          );
        }
        {
          data.messageOspfS ? (
            (setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG alertSuggestedMessages={data.messageOspfS} />,
            ]),
            call_ALerts("OSPF Suggested message"))
          ) : (
            <></>
          );
        }
        // call_ALerts("done from ospf");
      });
  };

  function call_ALerts(msg) {
    alert(msg);
  }

  const Send_data_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/info/interfaces?RouterOSPF=${selectedDevice}&&InterfaceOSPF=${selectedInterfaceOspfs}&&NetworkOSPF=${networkOSPFData}&&SubnetOSPF=${subnetOSPFData}&&AreaNumber=${areaNumberData}`
    );
    const data = await response.json();
    console.log("data sent");
  };

  const discard = () => {
    setAreaNumberData("");
    setNetworkOSPFData("");
    setSubnetOSPFData("");
  };

  return (
    <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">OSPF Configuration:</div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-7">
            <div>
              <div className="text-blue-700 w-full font-bold">
                Choose wanted device
              </div>
              <div className="flex justify-center font-bold text-gray-600">
                to apply OSPF to it
              </div>
            </div>
            <div className="flex justify-around items-center p-4  bg-blue-900 w-[40%] h-[60%] shadow-lg text-white shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
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
          <div className="flex gap-3 items-center">
            <div>
              <div className="flex justify-center text-gray-600 font-bold">
                insert network
              </div>
              <div className="text-gray-600 font-bold">Applying Network</div>
            </div>
            <input
              value={networkOSPFData}
              onChange={handleChange2_for_OSPF}
              className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
        <div className="flex w-[30%]  flex-col gap-5">
          <div className="flex items-center w-full h-full gap-7">
            <div className="text-blue-700 font-bold">Choose interfaces</div>

            <div className="flex justify-around items-center  bg-blue-900 w-[50%] h-[50%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent text-white p-2  outline-none "
                  value={selectedInterfaceOspfs}
                  onChange={handleInterfaceOspfChange}
                >
                  {interfacesOspf.map((inter) => (
                    <option
                      className="text-black"
                      key={inter.id}
                      value={inter.name}
                    >
                      {inter.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-gray-600 font-bold">Insert subnet</div>
            <input
              value={subnetOSPFData}
              onChange={handleChange_for_OSPF}
              className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-5">
        <div className="text-blue-700 font-bold">Insert Area Number</div>
        <input
          value={areaNumberData}
          onChange={handleChange_for_AreaNumber}
          className=" bg-gray-400 p-1 outline-none w-[30%] shadow-black shadow-inner rounded-full"
        ></input>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <button
            onClick={fetchOSPFdata}
            className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
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
              navigate("/setting/ospf");
            }}
            className="dhcp trasla bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            OSPF info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protocol_OSPF;
