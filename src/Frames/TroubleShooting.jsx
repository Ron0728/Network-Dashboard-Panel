import React from "react";

const TroubleShooting = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold">Existing Devives on GNS3 port 3080</div>
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
        <div className="font-bold">Check Connectivity:</div>
        <div className="flex w-full h-full justify-around">
          <div className="flex gap-3 w-[30%]">
            <div>
              <div className="text-blue-700 font-bold">Choose first device</div>
              <div className="text-gray-600 font-bol">One sending ICMP req</div>
            </div>
            <button className="bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full sh">
              R1
            </button>
          </div>

          <div className="flex gap-3 w-[30%]">
            <div>
              <div className="text-blue-700 font-bold">
                Choose second device
              </div>
              <div className="text-gray-600 font-bol">One sending ICMP req</div>
            </div>
            <button className="bg-blue-900 w-[40%] rounded-full shadow-lg shadow-black">
              R1
            </button>
          </div>
          <div>
            <button className="bg-black hover:animate-bounce text-white font-bold rounded-full p-3 shadow-lg shadow-black ">
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
        <div className="font-bold">Check Configurations:</div>
        <div className="flex gap-5">
          <div className="flex w-full h-full ">
            <div className="text-blue-700 font-bold">Choose wanted device</div>
            <div className="text-gray-600">results as messages & advives</div>
            <button className="bg-blue-900 w-[40%] rounded-full shadow-lg shadow-black">
              R1
            </button>
          </div>
          <div className="flex justify-end w-full h-full">
            <button className="flex bg-blue-950 p-3  text-white font-bold rounded-full shadow-lg shadow-black">
              start checking
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-gray-400 rounded-3xl p-5 shadow-inner shadow-black">
          <div className="flex bg-gray-900  text-white p-2 rounded-full">
            error: Incorrect configuration found on device 10.0.0.100
          </div>
          <div className="bg-gray-600 text-white p-2 rounded-full">
            suggestion: Please review the configuration files and make necessary
            corrections
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold">Check Interfaces:</div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <div className="flex w-full h-full ">
              <div className="text-blue-700 font-bold">
                Choose wanted device
              </div>
              <div className="text-gray-600">results as messages & advives</div>
              <button className="bg-blue-900 w-[40%] rounded-full shadow-lg shadow-black">
                R1
              </button>
            </div>
            <div className="flex justify-end w-full h-full">
              <button className="flex bg-blue-950 p-3  text-white font-bold rounded-full shadow-lg shadow-black">
                start checking
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
            <div className="flex flex-col justify-center items-center w-[15%] gap-5 p-3 ">
              <div>
                OFF
                <button className="">
                  <input type="checkbox" />
                </button>
                ON
              </div>
              <div>
                OFF
                <button className="">
                  <input type="checkbox" />
                </button>
                ON
              </div>
              <div>
                OFF
                <button className="">
                  <input type="checkbox" />
                </button>
                ON
              </div>
              <div>
                OFF
                <button className="">
                  <input type="checkbox" />
                </button>
                ON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold">DHCP Configuration:</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex  ">
              <div className="text-blue-700 font-bold">
                Choose wanted device
              </div>
              <div className="text-gray-600">results as messages & advives</div>
              <button className="bg-blue-900 w-[40%] rounded-full shadow-lg shadow-black">
                R1
              </button>
            </div>
            <div className="flex gap-3">
              <div className="text-gray-600 font-bold">
                insert network the appling network
              </div>
              <input className="bg-gray-400 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div className="text-blue-700 font-bold">
                Choose wanted device
              </div>
              <div className="text-gray-600">results as messages & advives</div>
              <button className="bg-blue-900 w-[40%] rounded-full shadow-lg shadow-black">
                R1
              </button>
            </div>
            <div className="flex gap-3">
              <div className="text-gray-600 font-bold">
                insert network the appling network
              </div>
              <input className="bg-gray-400 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="bg-warmGray-600 text-white p-3 w-[20%] rounded-full">
            discard
          </button>
          <button className="bg-gray-600 text-white p-3 w-[20%] rounded-full">
            DHCP info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TroubleShooting;
