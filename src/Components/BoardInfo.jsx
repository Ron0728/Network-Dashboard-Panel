import React, { useState } from "react";
import "/src/Css/pingbutton.css";
import ExistingDevives from "./ExistingDevives";

const BoardInfo = ({
  Name,
  Description,
  Pid,
  Vid,
  Sn,
  Percentage,
  Actives,
  Port1,
  Port2,
  Active1,
  Active2,
  Memory,
}) => {
  const [pingMessage, setPingMessage] = useState();

  const fetchPing = async () => {
    await fetch("http://localhost:3000/data133")
      .then((res) => res.json())
      .then((data) => {
        setPingMessage(data.Message);
      });
  };

  return (
    <div className="flex flex-col  bg-transparent w-full h-full p-5 gap-3">
      <ExistingDevives />

      {/* Hardware Info Router */}
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold text-xl">Hardware Router information:</div>
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
                    Actives
                      ? " rounded-full p-2 shadow-black shadow-md bg-[rgb(0,255,0)]"
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
        <div className="flex w-full h-full items-center">
          <div className="flex flex-col gap-3 w-[65%]">
            <div
              className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           Active1 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }`}
            >
              <div> GigabitEthernet 0/{Port1}</div>
              <div> {Active1 ? " Up " : " Down "} </div>
            </div>
            <div
              className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           Active2 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }`}
            >
              <div> GigabitEthernet 0/{Port2}</div>
              <div> {Active2 ? " Up " : " Down "} </div>
            </div>
          </div>
          <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[62%]">
            <div className=" bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)]  p-2  rounded-full ">
              <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                {Percentage}
              </div>
            </div>
            <div className="flex flex-col items-center font-bold">
              <div>Memory R1 </div>
              <div className="text-blue-700">{Memory}</div>
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
              onClick={fetchPing}
              className="ping flex items-center justify-center bg-green-600 w-full h-[70%] text-white font-bold rounded-full p-3 shadow-lg shadow-black "
            >
              Ping
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold gap-2 w-fit justify-center bg-gray-400 shadow-sm shadow-black rounded-md p-2">
            Ping :<div className="text-green-700">{pingMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardInfo;
