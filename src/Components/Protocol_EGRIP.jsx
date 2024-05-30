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
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Protocol_EGRIP = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [subnetEGRIPData, setSubnetEGRIPData] = useState("");
  const [networkEGRIPData, setNetworkEGRIPData] = useState("");
  const [asNumber, setAsNumber] = useState([]);
  const [selectedAsNUmber, setSelectedAsNUmber] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/data55555", {
        subnetEGRIPData: subnetEGRIPData,
        networkEGRIPData: networkEGRIPData,
      });
      console.log(response.data);
      call_ALerts(`update with ${subnetDHCPData} subnet`);
    } catch (error) {
      console.error(error);
    }
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

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const handleChange_for_EGRIP = (event1) => {
    setSubnetEGRIPData(event1.target.value);
  };

  const handleChange2_for_EGRIP = (event) => {
    setNetworkEGRIPData(event.target.value);
  };

  const handleAsNumberChange = (event) => {
    const selectedAsNumber = event.target.value;
    setSelectedAsNUmber(selectedAsNumber);
  };

  const fetchEGRIPdata = async () => {
    await fetch("http://localhost:3000/dashboard/protocols/eigrp")
      .then((res) => res.json())
      .then((data) => {
        {
          data.messageEgripW ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG alertWarningMessages={data.messageEgripW} />,
            ]),
            call_ALerts("Warning from EGRIP"))
          ) : (
            <></>
          );
        }
        {
          data.messageEgripD ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG alertDangerMessages={data.messageEgripD} />,
            ]),
            call_ALerts("Danger from EGRIP"))
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
            call_ALerts("EGRIP configured successfully"))
          ) : (
            <></>
          );
        }
        {
          data.messageEgripS ? (
            (setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG alertSuggestedMessages={data.messageEgripS} />,
            ]),
            call_ALerts("Egrip Suggested message"))
          ) : (
            <></>
          );
        }
        // call_ALerts("done from egrip");
      });
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  function call_ALerts(msg) {
    alert(msg);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black "
    >
      <div className="font-bold text-2xl">EGRIP Configuration:</div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-7">
            <div>
              <div className="text-blue-700 w-full font-bold">
                Choose wanted device
              </div>
              <div className="flex justify-center font-bold text-gray-600">
                to apply EGRIP to it
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent outline-none "
                  value={selectedDevice}
                  onChange={handlerDeviceChange}
                >
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
              value={networkEGRIPData}
              onChange={handleChange2_for_EGRIP}
              className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
        <div className="  flex flex-col gap-5 ">
          <div className="flex items-center -translate-y-1.5 h-full gap-7">
            <div>
              <div className="text-blue-700 font-bold">Choose AS Number</div>
              <div className="text-gray-700 font-bold">
                (Optinal) default 10
              </div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent text-white p-2  outline-none "
                  value={selectedAsNUmber}
                  onChange={handleAsNumberChange}
                >
                  <option className="text-black" value="">
                    10
                  </option>
                  {asNumber.map((As) => (
                    <option className="text-black" key={As.id} value={As.id}>
                      {As.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 -translate-y-2 items-center">
            <div className="text-gray-600 font-bold">Insert subnet</div>
            <input
              value={subnetEGRIPData}
              onChange={handleChange_for_EGRIP}
              className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <button
            type="submit"
            onClick={fetchEGRIPdata}
            className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
          >
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Disable
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/setting/egrip");
            }}
            className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            EGRIP info
          </button>
        </div>
      </div>
    </form>
  );
};

export default Protocol_EGRIP;
