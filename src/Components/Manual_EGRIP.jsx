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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Manual_EGRIP = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [device, setDevice] = useState([]);
  const [iP, setIP] = useState();
  const [subnetEGRIPData, setSubnetEGRIPData] = useState("");
  const [networkEGRIPData, setNetworkEGRIPData] = useState("");
  const [selectedAsNUmber, setSelectedAsNUmber] = useState(10);
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
    console.log("AS Number : ", selectedAsNumber);
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const Send_data_ToServer2 = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/protocols/EGRIP?selectedDeviceIP=${iP}&&ASNumber=${selectedAsNUmber}&&selectedNetworks=${networkEGRIPData}`
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
      selectedDevice && selectedAsNUmber && networkEGRIPData && subnetEGRIPData
        ? (Send_data_ToServer2(), notifyG("Done"))
        : notifyD("Please Choose and Enter all Information");
    }
    {
      selectedDevice && selectedAsNUmber ? (
        notifyI(
          `The Router ${selectedDevice} with AS Number of ${selectedAsNUmber} has been Selected`
        )
      ) : (
        <></>
      );
    }
    {
      networkEGRIPData && subnetEGRIPData ? (
        notifyI(
          `The Network ${networkEGRIPData} with Subnet of ${subnetEGRIPData} has been Selected`
        )
      ) : (
        <></>
      );
    }
  };

  const Send_data_ToDisable2 = async () => {
    await fetch(
      `http://localhost:3000/dashboard/protocols/eigrpdis?selectedDeviceIP=${iP}&&ASNumber=${selectedAsNUmber}`
    )
      .then((res) => res.json())
      .then((data) => {
        {
          data.messageW ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG alertWarningMessages={data.messageW} />,
            ]),
            notifyW(data.messageW))
          ) : (
            <></>
          );
        }
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
        {
          data.messageEgripS ? (
            setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG alertSuggestedMessages={data.messageEgripS} />,
            ])
          ) : (
            <></>
          );
        }
        // call_ALerts("done from egrip");
      });
  };

  const Send_data_ToDisable = async () => {
    {
      selectedDevice && selectedAsNUmber && networkEGRIPData && subnetEGRIPData
        ? (Send_data_ToDisable2(), notifyG("Disable Done"))
        : notifyD("Please Choose and Enter all Information");
    }
    {
      selectedDevice && selectedAsNUmber ? (
        notifyI(
          `The Router ${selectedDevice} with AS Number of ${selectedAsNUmber} has been Selected`
        )
      ) : (
        <></>
      );
    }
    {
      networkEGRIPData && subnetEGRIPData ? (
        notifyI(
          `The Network ${networkEGRIPData} with Subnet of ${subnetEGRIPData} has been Selected`
        )
      ) : (
        <></>
      );
    }
  };

  const discard = () => {
    setNetworkEGRIPData("");
    setSubnetEGRIPData("");
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
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-7">
            <div>
              <div className="text-blue-700 w-full font-bold">
                Choose Wanted Device
              </div>
              <div className="flex justify-center font-bold text-sm  text-gray-600">
                (to Apply EGRIP to it)
              </div>
            </div>
            <div className="flex justify-around items-center p-2 bg-blue-900 w-[30%] shadow-lg text-white shadow-black rounded-full ">
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
                Insert Network
              </div>
              <div className="text-gray-600 text-sm  font-bold">
                (Applying Network)
              </div>
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
                (Optinal) Default 10
              </div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  className="bg-transparent text-white p-2  outline-none "
                  value={selectedAsNUmber}
                  onChange={handleAsNumberChange}
                >
                  <option className="text-black" value="10">
                    10
                  </option>
                  <option className="text-black" value="1">
                    1
                  </option>
                  <option className="text-black" value="2">
                    2
                  </option>
                  <option className="text-black" value="3">
                    3
                  </option>
                  <option className="text-black" value="4">
                    4
                  </option>
                  <option className="text-black" value="5">
                    5
                  </option>
                  <option className="text-black" value="6">
                    6
                  </option>
                  <option className="text-black" value="7">
                    7
                  </option>
                  <option className="text-black" value="8">
                    8
                  </option>
                  <option className="text-black" value="9">
                    9
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 -translate-y-2 items-center">
            <div className="text-gray-600 font-bold">Insert Subnet</div>
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
          <button
            onClick={Send_data_ToDisable}
            className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
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
            EGRIP Info
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Manual_EGRIP;
