import React, { useContext, useState, useEffect } from "react";
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

  // ------------- Select -------------
  const [optionss, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    await fetch("http://localhost:3000/data4")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOptions(data);
      });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // ------------- Select -------------

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
                <div>
                  <select
                    className="bg-transparent p-2 outline-none text-white "
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    {optionss.map((dataOP) => (
                      <option
                        className="bg-white text-black "
                        key={dataOP.id}
                        value={dataOP.value}
                      >
                        {dataOP.label}
                      </option>
                    ))}
                  </select>
                </div>
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
                <div>
                  <select
                    className="bg-transparent p-2 outline-none text-white "
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    {optionss.map((dataOP) => (
                      <option
                        className="bg-white text-black "
                        key={dataOP.id}
                        value={dataOP.value}
                      >
                        {dataOP.label}
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
                <div>
                  <select
                    className="bg-transparent p-2 outline-none text-white "
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    {optionss.map((dataOP) => (
                      <option
                        className="bg-white text-black "
                        key={dataOP.id}
                        value={dataOP.value}
                      >
                        {dataOP.label}
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="R1">R 1</option>
                    <option value="R2">R 2</option>
                    <option value="R3">R 3</option>
                    <option value="R4">R 4</option>
                    <option value="SW1">SW 1</option>
                    <option value="SW2">SW 2</option>
                    <option value="SW3">SW 3</option>
                    <option value="SW4">SW 4</option>
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="Version1">Version 1</option>
                    <option value="Version2">Version 2</option>
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
              // className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="R1">R 1</option>
                    <option value="R2">R 2</option>
                    <option value="R3">R 3</option>
                    <option value="R4">R 4</option>
                    <option value="SW1">SW 1</option>
                    <option value="SW2">SW 2</option>
                    <option value="SW3">SW 3</option>
                    <option value="SW4">SW 4</option>
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="R1">R 1</option>
                    <option value="R2">R 2</option>
                    <option value="R3">R 3</option>
                    <option value="R4">R 4</option>
                    <option value="SW1">SW 1</option>
                    <option value="SW2">SW 2</option>
                    <option value="SW3">SW 3</option>
                    <option value="SW4">SW 4</option>
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
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="F 0/1">F 0/1</option>
                    <option value="F 0/2">F 0/2</option>
                    <option value="F 0/3">F 0/3</option>
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
