import React, { useContext, useState, useEffect, version } from "react";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";
import GAlertMSG from "../Components/GAlertMSG";
import DAlertMSG from "../Components/DAlertMSG";
import WAlertMSG from "../Components/WAlertMSG";
import SAlertMSG from "../Components/SAlertMSG";
import InterfacesLoop from "../Components/InterfacesLoop";

const Protocols = () => {
  const [routerDhcp, setRouterDhcp] = useState([]);
  const [routerRip, setRouterRip] = useState([]);
  const [routerEgrip, setRouterEgrip] = useState([]);
  const [routerOspf, setRouterOspf] = useState([]);

  const [versionRip, setVersionRip] = useState([]);
  const [interfaces, setInterfaces] = useState([]);
  const [interfacesOspf, setInterfacesOspf] = useState([]);
  const [asNumber, setAsNumber] = useState([]);

  const [selectedRouterDhcp, setSelectedRouterDhcp] = useState("");
  const [selectedRouterRip, setSelectedRouterRip] = useState("");
  const [selectedRouterEgrip, setSelectedRouterEgrip] = useState("");
  const [selectedRouterOspf, setSelectedRouterOspf] = useState("");

  const [selectedInterfaces, setSelectedInterfaces] = useState("");
  const [selectedVersionRip, setSelectedVersionRip] = useState("");
  const [selectedAsNUmber, setSelectedAsNUmber] = useState("");
  const [selectedInterfaceOspfs, setSelectedInterfaceOspfs] = useState("");

  const [isbuttonClicked, setIsButtonClicked] = useState(false);
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
    fetchRouterDhcp();
    fetchRouterRip();
    fetchRouterEgrip();
    fetchRouterOspf();
  }, []);

  const fetchRouterDhcp = async () => {
    try {
      const response = await fetch("http://localhost:3000/data7RouterDhcp");
      const data = await response.json();
      setRouterDhcp(data);
    } catch (error) {
      console.error("Error fetching router Dhcp:", error);
    }
  };

  const fetchRouterOspf = async () => {
    try {
      const response = await fetch("http://localhost:3000/data7RouterOspf");
      const data = await response.json();
      setRouterOspf(data);
    } catch (error) {
      console.error("Error fetching router Ospf:", error);
    }
  };

  const fetchRouterRip = async () => {
    try {
      const response = await fetch("http://localhost:3000/data7RouterRip");
      const data = await response.json();
      setRouterRip(data);
    } catch (error) {
      console.error("Error fetching router Rip:", error);
    }
  };

  const fetchRouterEgrip = async () => {
    try {
      const response = await fetch("http://localhost:3000/data7RouterEgrip");
      const data = await response.json();
      setRouterEgrip(data);
    } catch (error) {
      console.error("Error fetching router Egrip:", error);
    }
  };

  // ------------------
  const fetchInterfaces = async (RouterDhcp) => {
    try {
      const response = await fetch(
        `http://localhost:3000/data7Interface?RouterDhcp=${RouterDhcp}`
      );
      const data = await response.json();
      setInterfaces(data);
    } catch (error) {
      console.error("Error fetching interfaces:", error);
    }
  };

  const fetchInterfacesOspf = async (RouterOspf) => {
    try {
      const response = await fetch(
        `http://localhost:3000/data7InterfaceOspf?RouterOspf=${RouterOspf}`
      );
      const data = await response.json();
      setInterfacesOspf(data);
    } catch (error) {
      console.error("Error fetching interfaces Ospf:", error);
    }
  };

  const fetchVersionRip = async (RouterRip) => {
    try {
      const response = await fetch(
        `http://localhost:3000/data7Version?RouterRip=${RouterRip}`
      );
      const data = await response.json();
      setVersionRip(data);
    } catch (error) {
      console.error("Error fetching version:", error);
    }
  };

  const fetchAsNumber = async (RouterEgrip) => {
    try {
      const response = await fetch(
        `http://localhost:3000/data7AsNumber?RouterEgrip=${RouterEgrip}`
      );
      const data = await response.json();
      setAsNumber(data);
    } catch (error) {
      console.error("Error fetching AS Number:", error);
    }
  };
  // ---------------------

  const handleRouterDhcpChange = (event) => {
    const selectedRouterDhcp = event.target.value;
    setSelectedRouterDhcp(selectedRouterDhcp);
    fetchInterfaces(selectedRouterDhcp);
  };

  const handleRouterOspfChange = (event) => {
    const selectedRouterOspf = event.target.value;
    setSelectedRouterOspf(selectedRouterOspf);
    fetchInterfacesOspf(selectedRouterOspf);
  };

  const handleRouterRipChange = (event) => {
    const selectedRouterRip = event.target.value;
    setSelectedRouterRip(selectedRouterRip);
    fetchVersionRip(selectedRouterRip);
  };

  const handleRouterEgripChange = (event) => {
    const selectedRouterEgrip = event.target.value;
    setSelectedRouterEgrip(selectedRouterEgrip);
    fetchAsNumber(selectedRouterEgrip);
  };

  // --------------------

  const handleInterfaceChange = (event) => {
    const selectedInterfaces = event.target.value;
    setSelectedInterfaces(selectedInterfaces);
  };

  const handleInterfaceOspfChange = (event) => {
    const selectedInterfaceOspfs = event.target.value;
    setSelectedInterfaceOspfs(selectedInterfaceOspfs);
  };

  const handleVersionRipChange = (event) => {
    const selectedVersionRip = event.target.value;
    setSelectedVersionRip(selectedVersionRip);
  };

  const handleAsNumberChange = (event) => {
    const selectedAsNumber = event.target.value;
    setSelectedAsNUmber(selectedAsNumber);
  };
  // ---------------------

  const twofunc = () => {
    fetchRIPdata();
    handleClick();
  };

  function call_ALerts(msg) {
    alert(msg);
  }

  const handleClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 100);
  };

  //   RIP
  const fetchRIPdata = async () => {
    await fetch("http://localhost:3000/data2")
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
          data.messageRipG ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG alertGoodMessages={data.messageRipG} />,
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

  //   DHCP
  const fetchDHCPdata = async () => {
    await fetch("http://localhost:3000/data2")
      .then((res) => res.json())
      .then((data) => {
        {
          data.messageDhcpW ? (
            (setAlertWarningMessages([
              ...alertWarningMessages,
              <WAlertMSG alertWarningMessages={data.messageDhcpW} />,
            ]),
            call_ALerts("Warning from DHCP"))
          ) : (
            <></>
          );
        }
        {
          data.messageDhcpD ? (
            (setAlertDangerMessages([
              ...alertDangerMessages,
              <DAlertMSG alertDangerMessages={data.messageDhcpD} />,
            ]),
            call_ALerts("Danger from DHCP"))
          ) : (
            <></>
          );
        }
        {
          data.messageDhcpG ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG alertGoodMessages={data.messageDhcpG} />,
            ]),
            call_ALerts("DHCP configured successfully"))
          ) : (
            <></>
          );
        }
        {
          data.messageDhcpS ? (
            (setAlertSuggestedMessages([
              ...alertSuggestedMessages,
              <SAlertMSG alertSuggestedMessages={data.messageDhcpS} />,
            ]),
            call_ALerts("DHCP suggested message"))
          ) : (
            <></>
          );
        }
        // call_ALerts("done from dhcp");
      });
  };

  //     EGRIP
  const fetchEGRIPdata = async () => {
    await fetch("http://localhost:3000/data2")
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
          data.messageEgripG ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG alertGoodMessages={data.messageEgripG} />,
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

  //   OSPF
  const fetchOSPFdata = async () => {
    await fetch("http://localhost:3000/data2")
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
          data.messageOspfG ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG alertGoodMessages={data.messageOspfG} />,
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

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      {/* Existing Devives */}
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full  shadow-lg shadow-black ">
        <div className="font-bold text-2xl">
          Existing Devives on GNS3 port 3080
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%]  p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div>
              <img className="" src={"/Switch.png"} />
            </div>
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/Switch.png"} />
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check Interfaces: */}
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Interfaces:</div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-5">
            <div className="flex items-center w-full h-full gap-3 ">
              <div className="flex w-full items-center">
                <div className="text-blue-700 text-lg font-bold">
                  Choose wanted device{" "}
                  <span className="text-sm  text-gray-600">
                    all interfaces status & option
                  </span>
                </div>
              </div>
              <div className="flex justify-around items-center h-[70%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
                {/* select missing */}
              </div>
            </div>
            <div className="flex justify-end w-full h-full">
              <button className="startchecking -translate-x-3 flex justify-center  bg-blue-950 p-3  text-white font-bold rounded-full shadow-lg shadow-black">
                Start Checking
              </button>
            </div>
          </div>
          <div>
            <InterfacesLoop />
          </div>
        </div>
      </div>

      {/* DHCP  Configuration*/}
      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">DHCP Configuration:</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply DHCP to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
                <div className="flex w-[80%] justify-center">
                  <select
                    className="bg-transparent text-white w-[60%] outline-none "
                    value={selectedRouterDhcp}
                    onChange={handleRouterDhcpChange}
                  >
                    <option className="text-black" value=""></option>
                    {routerDhcp.map((R) => (
                      <option className="text-black" key={R.id} value={R.id}>
                        {R.name}
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
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center h-full gap-7">
              <div className="text-blue-700 text-xl w-[40%] flex justify-end font-bold">
                Choose
              </div>

              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div className="flex items-center justify-center">
                  <select
                    className="bg-transparent text-white p-2  outline-none "
                    value={selectedInterfaces}
                    onChange={handleInterfaceChange}
                  >
                    <option className="text-black" value="">
                      {" "}
                      Interfaces
                    </option>
                    {interfaces.map((inter) => (
                      <option
                        className="text-black"
                        key={inter.id}
                        value={inter.id}
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
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <button
              onClick={fetchDHCPdata}
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
            <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
              DHCP info
            </button>
          </div>
        </div>
      </div>

      {/* RIP Configuration */}
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
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
                <div className="flex w-[80%] justify-center">
                  <select
                    className="bg-transparent text-white w-[60%] outline-none "
                    value={selectedRouterRip}
                    onChange={handleRouterRipChange}
                  >
                    <option className="text-black" value=""></option>
                    {routerRip.map((R) => (
                      <option className="text-black" key={R.id} value={R.id}>
                        {R.name}
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
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
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
                    <option className="text-black" value=""></option>
                    {versionRip.map((ver) => (
                      <option
                        className="text-black"
                        key={ver.id}
                        value={ver.id}
                      >
                        {ver.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 -translate-y-2 items-center">
              <div className="text-gray-600 font-bold">Insert subnet</div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <button
              onClick={twofunc}
              className={`px-4 py-2 rounded-lg ${
                isbuttonClicked
                  ? "apply shadow-in shadow-black bg-black text-white p-3 w-[20%] rounded-full"
                  : "apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
              } text-white`}
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
            <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
              RIP info
            </button>
          </div>
        </div>
      </div>

      {/* EGRIP Configuration */}
      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
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
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
                <div className="flex w-[80%] justify-center">
                  <select
                    className="bg-transparent text-white w-[60%] outline-none "
                    value={selectedRouterEgrip}
                    onChange={handleRouterEgripChange}
                  >
                    <option className="text-black" value=""></option>
                    {routerEgrip.map((R) => (
                      <option className="text-black" key={R.id} value={R.id}>
                        {R.name}
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
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
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
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <button
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
            <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
              EGRIP info
            </button>
          </div>
        </div>
      </div>

      {/* OSPF Configuration */}
      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">OSPF Configuration:</div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply OSPF to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
                <div className="flex w-[80%] justify-center">
                  <select
                    className="bg-transparent text-white w-[60%] outline-none "
                    value={selectedRouterOspf}
                    onChange={handleRouterOspfChange}
                  >
                    <option className="text-black" value=""></option>
                    {routerOspf.map((R) => (
                      <option className="text-black" key={R.id} value={R.id}>
                        {R.name}
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
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center h-full gap-7">
              <div className="text-blue-700 font-bold">Choose interfaces</div>

              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div className="flex items-center justify-center">
                  <select
                    className="bg-transparent text-white p-2  outline-none "
                    value={selectedInterfaceOspfs}
                    onChange={handleInterfaceOspfChange}
                  >
                    <option className="text-black" value="">
                      {" "}
                      Interfaces
                    </option>
                    {interfacesOspf.map((inter) => (
                      <option
                        className="text-black"
                        key={inter.id}
                        value={inter.id}
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
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-5">
          <div className="text-blue-700 font-bold">Insert Area Number</div>
          <input className=" bg-gray-400 p-1 outline-none w-[30%]  shadow-black shadow-inner rounded-full"></input>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <button
              onClick={fetchOSPFdata}
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
            <button className="dhcp trasla bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
              OSPF info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocols;
