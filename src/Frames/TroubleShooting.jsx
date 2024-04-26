import React, { useState, useContext } from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/dhcpinfobutton.css";
import "/src/Css/ping2.css";
import "/src/Css/startcheckingbutton.css";
import InterfacesLoop from "../Components/InterfacesLoop";
import ExistingDevives from "../Components/ExistingDevives";
import GAlertMSG from "../Components/GAlertMSG";
import DAlertMSG from "../Components/DAlertMSG";
import WAlertMSG from "../Components/WAlertMSG";
import SAlertMSG from "../Components/SAlertMSG";
import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextSuggested,
  AlertContextWarrning,
} from "../alertsContext";

const TroubleShooting = () => {
  const [pingMessage1S, setPingMessage1S] = useState();
  const [pingMessage1W, setPingMessage1W] = useState();
  const [pingMessage1D, setPingMessage1D] = useState();
  const [checkingSuccessfullMSG, setCheckingSuccessfullMSG] = useState();
  const [checkingErrorMSG, setCheckingErrorMSG] = useState();
  const [checkingSuggestionMSG, setCheckingSuggestionMSG] = useState();

  const [alertGoodMessages, setAlertGoodMessages] =
    useContext(AlertContextGood);
  const [alertWarningMessages, setAlertWarningMessages] =
    useContext(AlertContextWarrning);
  const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
    AlertContextSuggested
  );
  const [alertDangerMessages, setAlertDangerMessages] =
    useContext(AlertContextDanger);

  const fetchPing1 = async () => {
    await fetch("http://localhost:3000/data1331")
      .then((res) => res.json())
      .then((data) => {
        {
          data.Message1S ? (
            setPingMessage1S(
              <div className="text-green-700">{data.Message1S}</div>
            )
          ) : (
            <></>
          );
        }
        {
          data.Message1D ? (
            setPingMessage1D(
              <div className="text-red-700">{data.Message1D}</div>
            )
          ) : (
            <></>
          );
        }
        {
          data.Message1W ? (
            setPingMessage1W(
              <div className="text-orange-500">{data.Message1W}</div>
            )
          ) : (
            <></>
          );
        }
      });
  };

  const StartChecking = async () => {
    await fetch("http://localhost:3000/data144")
      .then((res) => res.json())
      .then((data) => {
        {
          data.Error ? (
            setCheckingErrorMSG(
              <div
                className="flex shadow-inner shadow-black bg-gradient-to-r
               from-[rgb(255,0,0)] to-gray-400 text-white p-2 rounded-full"
              >
                {data.Error}
              </div>
            )
          ) : (
            <></>
          );
        }
        {
          data.Successfull ? (
            setCheckingSuccessfullMSG(
              <div
                className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r 
              from-[rgb(0,255,0)] to-gray-400  text-white p-2 rounded-full"
              >
                {data.Successfull}
              </div>
            )
          ) : (
            <></>
          );
        }
        {
          data.Suggestion ? (
            setCheckingSuggestionMSG(
              <div
                className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r 
              from-[rgb(213,110,37)] to-[rgb(255,167,26)]  text-white p-2 rounded-full"
              >
                {data.Suggestion}
              </div>
            )
          ) : (
            <></>
          );
        }
      });
  };

  const fetchDHCP_TroubleShooting_data = async () => {
    await fetch("http://localhost:3000/data1555")
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
          data.G_messageDhcpTroubleShooting ? (
            (setAlertGoodMessages([
              ...alertGoodMessages,
              <GAlertMSG
                alertGoodMessages={data.G_messageDhcpTroubleShooting}
              />,
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
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <ExistingDevives />

      {/* Check Connectivity */}
      <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Connectivity:</div>
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
          <div className=" flex justify-center items-center h-full w-[10%]">
            <button
              onClick={fetchPing1}
              className="ping flex items-center justify-center bg-green-600 w-full h-[70%] text-white font-bold rounded-full p-3 shadow-lg shadow-black "
            >
              Ping
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold gap-2 w-fit justify-center bg-gray-400 shadow-sm shadow-black rounded-md p-2">
            Ping : {pingMessage1D || pingMessage1S || pingMessage1W}
          </div>
        </div>
      </div>

      {/* Check Configurations */}
      <div className="flex flex-col bg-gray-300 w-full h-full gap-3 rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Configurations:</div>
        <div className="flex gap-5">
          <div className="flex items-center w-full h-full gap-3 ">
            <div className="flex w-full items-center">
              <div className="text-blue-700 text-lg font-bold">
                Choose wanted device{" "}
                <span className="text-sm text-gray-600">
                  results as messages & advices
                </span>
              </div>
            </div>
            <div className="flex justify-around items-center h-[60%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
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
          <div className="flex items-center justify-end w-full ">
            <button
              onClick={StartChecking}
              className="startchecking flex bg-blue-950 p-5 h-[70%] items-center justify-center text-white font-bold rounded-full shadow-lg shadow-black"
            >
              Start checking
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-gray-400 rounded-3xl shadow-inner shadow-black">
          {checkingSuccessfullMSG ||
          checkingErrorMSG ||
          checkingSuggestionMSG ? (
            <div className="flex flex-col gap-2">
              <p>{checkingSuccessfullMSG}</p>
              <p>{checkingErrorMSG}</p>

              <p>{checkingSuggestionMSG}</p>
            </div>
          ) : (
            <p className=" flex justify-center font-bold animate-pulse text-gray-700">
              Waiting for any Check
            </p>
          )}
        </div>
      </div>

      {/* Check Interfaces */}
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
              <div className="flex justify-around items-center h-[60%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex items-center justify-end w-full ">
              <button className="startchecking flex bg-blue-950 p-5 h-[70%] items-center justify-center text-white font-bold rounded-full shadow-lg shadow-black">
                Start checking
              </button>
            </div>
          </div>
          <div>
            <InterfacesLoop />
          </div>
        </div>
      </div>

      {/* DHCP Configuration */}
      <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg  shadow-black ">
        <div className="font-bold text-2xl">DHCP Configuration:</div>
        <div className="flex ">
          <div className="flex w-[50%] flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-7">
                <div>
                  <div className="text-blue-700 font-bold text-lg">
                    Choose Interface
                  </div>
                  <div className="flex text-gray-600 font-bold text-sm ">
                    All || Specific interface
                  </div>
                </div>
                <div className="flex justify-around items-center  bg-blue-900 w-[25%] h-[70%] shadow-lg shadow-black rounded-full ">
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
                  <div className="text-blue-700 font-bold text-lg">
                    Insert network
                  </div>
                  <div className="flex text-gray-600 font-bold text-sm ">
                    the appling network
                  </div>
                </div>
                <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
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
              <div className="flex justify-around items-center  bg-blue-900 w-[25%] h-[70%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex gap-3 justify-end items-center">
              <div>
                <div className="text-blue-700 font-bold text-lg">
                  Insert Subnet
                </div>
                <div className="flex text-gray-600 font-bold text-sm ">
                  network's mask
                </div>
              </div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
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
            <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
              DHCP info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleShooting;
