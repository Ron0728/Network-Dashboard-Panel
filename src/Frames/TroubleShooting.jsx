import React from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/dhcpinfobutton.css";
import "/src/Css/ping2.css";
import "/src/Css/startcheckingbutton.css";

const TroubleShooting = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold text-2xl">
          Existing Devives on GNS3 port 3080
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div className="font-bold">R1</div>
            <div>
              <div className="text-sm">C7200</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div className="font-bold">R1</div>
            <div>
              <div className="text-sm">C2600</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Connectivity:</div>
        <div className="flex w-full h-full justify-around">
          <div className="flex gap-3 w-[30%]">
            <div>
              <div className="text-blue-700 font-bold">Choose first device</div>

              <div className="text-gray-600 font-bol">One sending ICMP req</div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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

          <div className="flex gap-3 w-[30%]">
            <div>
              <div className="text-blue-700 font-bold">
                Choose second device
              </div>
              <div className="text-gray-600 font-bol">One sending ICMP req</div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
          <div className="flex items-center">
            <button className="ping2 flex bg-black items-center text-white font-bold rounded-full p-3 shadow-lg shadow-black hover:text-black ">
              Ping
            </button>
          </div>
        </div>
        <div className="flex justify-around bg-gray-400 shadow-sm shadow-black rounded-full p-2">
          <div>ICMPs sent </div>
          <div>Lost ICMPs</div>
          <div>Recived ICMPs</div>
          <div>Success rate</div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-300 w-full h-full gap-3 rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Configurations:</div>
        <div className="flex  gap-5">
          <div className="flex w-full h-full gap-3 ">
            <div>
              <div className="text-blue-700 font-bold">
                Choose wanted device
              </div>
              <div className="text-gray-600">results as messages & advives</div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
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
          <div className="flex justify-end w-full h-full">
            <button className="startchecking flex bg-blue-950 p-3 justify-center text-white font-bold rounded-full shadow-lg shadow-black">
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
            Connectiong finished successfully
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Interfaces:</div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-5">
            <div className="flex w-full h-full gap-3 ">
              <div className="flex flex-col">
                <div className="text-blue-700 font-bold">
                  Choose wanted device
                </div>
                <div className="text-gray-600">
                  results as messages & advives
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex justify-end w-full h-full">
              <button className="startchecking flex justify-center  bg-blue-950 p-3  text-white font-bold rounded-full shadow-lg shadow-black">
                Start Checking
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full h-full justify-between">
            <div className="flex flex-col gap-2 w-[85%] h-full">
              <div
                className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] to-[rgb(0,255,0)]"
              >
                <div>GigabitEthernet 0/0</div>
                <div>Up</div>
              </div>
              <div
                className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] to-warmGray-600"
              >
                <div>GigabitEthernet 0/0</div>
                <div>Down</div>
              </div>
              <div
                className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] to-[rgb(0,255,0)]"
              >
                <div>GigabitEthernet 0/0</div>
                <div>Up</div>
              </div>
              <div
                className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] to-warmGray-600"
              >
                <div>GigabitEthernet 0/0</div>
                <div>Down</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[15%] h-full gap-6 p-2 ">
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input type="checkbox" id="check" class="sr-only peer" />
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
                  <input type="checkbox" id="check1" class="sr-only peer" />
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
                  <input type="checkbox" id="check2" class="sr-only peer" />
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
                  <input type="checkbox" id="check3" class="sr-only peer" />
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

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">DHCP Configuration:</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-16">
              <div>
                <div className="text-blue-700 font-bold">
                  Choose wanted device
                </div>
                <div className="text-gray-600">
                  results as messages & advives
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
              <div className="text-gray-600 font-bold">
                insert network the appling network
              </div>
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-16">
              <div>
                <div className="text-blue-700 font-bold">
                  Choose wanted device
                </div>
                <div className="text-gray-600">
                  results as messages & advives
                </div>
              </div>
              <div className="flex justify-around items-center  bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
              <div className="text-gray-600 font-bold">
                insert network the appling network
              </div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
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
