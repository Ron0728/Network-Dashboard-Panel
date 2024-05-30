import React, { useState, useEffect, useContext } from "react";
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

  const [alertGoodMessages, setAlertGoodMessages] =
    useContext(AlertContextGood);
  const [alertWarningMessages, setAlertWarningMessages] =
    useContext(AlertContextWarrning);
  const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
    AlertContextSuggested
  );
  const [alertDangerMessages, setAlertDangerMessages] =
    useContext(AlertContextDanger);

  const fetchDHCP_TroubleShooting_data = async () => {
    Send_data_ToServer();
    await fetch("http://localhost:3000/dashboard/troubleshooting/dhcp")
      .then((res) => res.json())
      .then((data) => {
        {
          data.W_messageDhcpTroubleShooting ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG
                alertWarningMessages={data.W_messageDhcpTroubleShooting}
              />,
            ]),
            call_ALerts("Warning DHCP from TroubleShooting"))
          ) : (
            <></>
          );
        }
        {
          data.D_messageDhcpTroubleShooting ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG
                alertDangerMessages={data.D_messageDhcpTroubleShooting}
              />,
            ]),
            call_ALerts("Danger DHCP from TroubleShooting"))
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
            call_ALerts("DHCP configured successfully from TroubleShooting"))
          ) : (
            <></>
          );
        }
        {
          data.S_messageDhcpTroubleShooting ? (
            (setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG
                alertSuggestedMessages={data.S_messageDhcpTroubleShooting}
              />,
            ]),
            call_ALerts("DHCP suggested message from TroubleShooting"))
          ) : (
            <></>
          );
        }
        // call_ALerts("done from dhcp");
      });
  };

  function call_ALerts(msg) {
    alert(msg);
  }

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
    const selected_Router = event.target.value;
    setSelectedRouter(selected_Router);
    fetchInterfaces(selected_Router);
    console.log("the selected Router : -->", selected_Router);
  };

  const Send_data_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/info/interfaces?Router=${selectedRouter}&&Interface=${selectedInterfaces}&&network=${networkData}&&subnet=${subnetData}`
    );
    const data = await response.json();
    console.log("data sent");
    call_ALerts(
      `The Router ${selectedRouter} with the Interface ${selectedInterfaces}`
    );
  };

  const handleChange_for_Network = (event) => {
    setNetworkData(event.target.value);
  };
  const handleChange_for_Subnet = (event) => {
    setSubnetData(event.target.value);
  };

  return (
    // DHCP Configuration
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg  shadow-black ">
      <div className="font-bold text-xl">DHCP Configuration:</div>
      <div className="flex  ">
        <div className="flex w-[50%] flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-7">
              <div>
                <div className="text-blue-700 font-bold text-lg">
                  Choose a device
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
                  Insert network
                </div>
                <div className="flex text-gray-600 font-bold text-sm ">
                  the appling network
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
                All || Specific interface
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
                network's mask
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
            onClick={fetchDHCP_TroubleShooting_data}
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
              navigate("/setting/dhcp");
            }}
            className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
          >
            DHCP info
          </button>
        </div>
      </div>
    </div>
  );
};

export default DHCP_Configuration;
