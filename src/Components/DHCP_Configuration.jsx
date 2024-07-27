import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";
import { useNavigate } from "react-router-dom";
import WAlertMSG from "./WAlertMSG";
import DAlertMSG from "./DAlertMSG";
import GAlertMSG from "./GAlertMSG";
import SAlertMSG from "./SAlertMSG";

const DHCP_Configuration = () => {
  const navigate = useNavigate();
  const [router, setRouter] = useState([]);
  const [interfaces, setInterfaces] = useState([]);
  const [selectedRouter, setSelectedRouter] = useState("");
  const [selectedInterfaces, setSelectedInterfaces] = useState("");
  const [networkData, setNetworkData] = useState("");
  const [subnetData, setSubnetData] = useState("");
  const [iP, setIP] = useState();

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
    fetchRouter();
  }, []);

  const fetchRouter = async () => {
    try {
      const response = await fetch("http://localhost:3000/info/routers");
      const data = await response.json();
      setRouter(data);
    } catch (error) {
      console.error("Error fetching router:", error);
    }
  };

  const fetchInterfaces = async (Router) => {
    try {
      const response = await fetch(
        `http://localhost:3000/info/interfaces?Router=${Router}`
      );
      const data = await response.json();
      setInterfaces(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching interfaces:", error);
    }
  };

  const handleInterfaceChange = (event) => {
    const selected_Interfaces = event.target.value;
    setSelectedInterfaces(selected_Interfaces);
    console.log("the selected Interface : -->", selected_Interfaces);
  };

  const handleRouterChange = (event) => {
    const selectedDevice = event.target.value;
    setSelectedRouter(selectedDevice);
    fetchInterfaces(selectedDevice);
    const selectedDeviceIP = device.find(
      (device) => device.name === selectedDevice
    ).ip;
    setIP(selectedDeviceIP);
    console.log(
      `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP}`
    );
  };

  const Send_data_ToServer2 = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/protocols/dhcp?selectedDeviceIP=${iP}&&selectedDeviceInterface=${selectedInterfaces}&&selectedNetworks=${networkData}`
    )
      .then((res) => res.json())
      .then((data) => {
        {
          data.error ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG alertDangerMessages={data.error} />,
            ]),
            notifyD(data.error))
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
            notifyG(data.message))
          ) : (
            <></>
          );
        }
      });
  };

  const Send_data_ToServer = async () => {
    {
      selectedRouter && selectedInterfaces && networkData && subnetData
        ? (Send_data_ToServer2(), notifyG("Done"))
        : notifyD("Please Choose and Enter all Information");
    }
    {
      selectedRouter && selectedInterfaces ? (
        notifyI(
          `The Router ${selectedRouter} with the Interface ${selectedInterfaces} has been Selected`
        )
      ) : (
        <></>
      );
    }
    {
      networkData && subnetData ? (
        notifyI(
          `The Network ${networkData} with the Subnet of ${subnetData} has been Selected`
        )
      ) : (
        <></>
      );
    }
  };

  const handleChange_for_Network = (event) => {
    setNetworkData(event.target.value);
  };

  const handleChange_for_Subnet = (event) => {
    setSubnetData(event.target.value);
  };

  const discard = () => {
    setNetworkData("");
    setSubnetData("");
  };

  const notifyG = (msg) => {
    toast.success(msg, {
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

  const notifyW = (msg) => {
    toast.warn(msg, {
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

  const notifyI = (msg) => {
    toast.info(msg, {
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

  return (
    // DHCP Configuration
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg  shadow-black ">
      <div className="flex items-center justify-between gap-5">
        <div className="font-bold items-center text-xl">
          DHCP Configuration:
        </div>
      </div>
      <div className="flex  ">
        <div className="flex w-[50%] flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-7">
              <div>
                <div className="text-blue-700 font-bold text-lg">
                  Choose a Device
                </div>
                <div className="flex text-gray-600 font-bold text-sm "></div>
              </div>
              <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
                <select
                  className="bg-transparent outline-none "
                  value={selectedRouter}
                  onChange={handleRouterChange}
                >
                  <option>Choose</option>
                  {router.map((R) => (
                    <option className="text-black" key={R.id} value={R.name}>
                      {R.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <div className="text-blue-700 font-bold text-lg">
                  Insert Network
                </div>
                <div className="flex text-gray-600 font-bold text-sm ">
                  (The Appling Network)
                </div>
              </div>
              <input
                value={networkData}
                onChange={handleChange_for_Network}
                className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex w-[50%]   flex-col gap-5">
          <div className="flex justify-end items-center gap-7">
            <div>
              <div className="text-blue-700 font-bold text-lg">
                Choose Interface
              </div>
              <div className="flex text-gray-600 font-bold text-sm ">
                (All || Specific Interface)
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[30%] shadow-lg text-white shadow-black rounded-full ">
              <select
                className="bg-transparent outline-none "
                value={selectedInterfaces}
                onChange={handleInterfaceChange}
              >
                {interfaces.map((I) => (
                  <option className="text-black" key={I.id} value={I.name}>
                    {I.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-3 justify-end items-center">
            <div>
              <div className="text-blue-700 font-bold text-lg">
                Insert Subnet
              </div>
              <div className="flex text-gray-600 font-bold text-sm ">
                (Network's Mask)
              </div>
            </div>
            <input
              value={subnetData}
              onChange={handleChange_for_Subnet}
              className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <button
            onClick={Send_data_ToServer}
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
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/setting/dhcp");
            }}
            className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            DHCP Info
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DHCP_Configuration;
