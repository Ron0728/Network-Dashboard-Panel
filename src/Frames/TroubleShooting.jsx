import React, { useState } from "react";
// import axios from 'axios'
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/dhcpinfobutton.css";
import "/src/Css/ping2.css";
import "/src/Css/startcheckingbutton.css";

const TroubleShooting = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  // const handleApplyClick = async () => {
  //   try{
  //     const response = await axios.post('')
  //   }
  // }

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold text-2xl">
          Existing Devives on GNS3 port 3080
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Switch.png"} />
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Switch.png"} />
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <button className="ping flex items-center justify-center bg-green-600 w-full h-[70%] text-white font-bold rounded-full p-3 shadow-lg shadow-black ">
              Ping
            </button>
          </div>
        </div>
        <div className="flex font-bold justify-around bg-gray-400 shadow-sm shadow-black rounded-full p-2">
          <div>ICMPs Sent: 4 </div>
          <div>Lost ICMPs: 1</div>
          <div>Recived ICMPs: 3</div>
          <div>Success Rate: 75%</div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-300 w-full h-full gap-3 rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Configurations:</div>
        <div className="flex gap-5">
          <div className="flex items-center w-full h-full gap-3 ">
            <div className="flex w-full items-center">
              <div className="text-blue-700 text-lg font-bold">
                Choose wanted device{" "}
                <span className="text-sm text-gray-600">
                  results as messages & advives
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
        <div className="flex flex-col gap-3 bg-gray-400 rounded-3xl p-5 shadow-inner shadow-black">
          <div className="flex shadow-inner shadow-black bg-gradient-to-r from-[rgb(255,0,0)] to-gray-400 text-white p-2 rounded-full">
            error: Incorrect configuration found on device 10.0.0.100
          </div>
          <div className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r from-[rgb(213,110,37)] to-[rgb(255,167,26)]  text-white p-2 rounded-full">
            suggestion: Please review the configuration files and make necessary
            corrections
          </div>
          <div className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r from-[rgb(0,255,0)] to-gray-400  text-white p-2 rounded-full">
            Connection finished successfully
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
          <div className="flex gap-2 w-full h-full justify-between">
            <div className="flex flex-col gap-2 w-[85%] h-full">
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked1 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked1 ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
                bg-gradient-to-r from-[rgb(0,0,255)] ${
                  isChecked2 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
                }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked2 ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked3 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked3 ? " Up " : " Down "}</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[15%] h-full gap-6 p-2 ">
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    id="check"
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)]
                   peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check1"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={(e) => setIsChecked1(e.target.checked)}
                    id="check1"
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8  transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold ">
                OFF
                <label
                  for="check2"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={(e) => setIsChecked2(e.target.checked)}
                    id="check2"
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check3"
                  className="bg-gray-700 shadow-md shadow-black  cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    id="check3"
                    checked={isChecked3}
                    onChange={(e) => setIsChecked3(e.target.checked)}
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 absolute shadow-inner shadow-black rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg  shadow-black ">
        <div className="font-bold text-2xl">DHCP Configuration:</div>
        <div className="flex ">
          <div className="flex w-[50%] flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center gap-7">
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
              <div className="flex gap-3 justify-center items-center">
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
            <div className="flex justify-center items-center gap-7">
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
            <div className="flex gap-3 justify-center items-center">
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
        <div className="flex justify-center gap-5">
          <button className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            DHCP info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TroubleShooting;
