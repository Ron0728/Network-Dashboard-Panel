import React from "react";
import Linechart from "../Charts/Linechart";

const Security = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3 bg-gray-400 p-5 overflow-y-scroll">
      <div className="bg-gradient-to-r from-blue-700 to-white p-5 rounded-xl shadow-md shadow-black">
        text
      </div>

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full  shadow-lg shadow-black ">
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

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full  shadow-lg shadow-black ">
        <div className="font-bold">Accessability</div>

        <div className="flex gap-3 w-[30%]">
          <div>
            <div className="text-blue-700 font-bold">Choose first device</div>
            <div className="text-gray-600 font-bol">One sending ICMP req</div>
          </div>
          <button className="bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full sh">
            R1
          </button>
        </div>

        <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold bg-gradient-to-r from-[rgb(0,255,0)] to-gray-500 p-2 rounded-full">
            Permition list
          </div>
          <div className=" flex justify-around ">
            <div>
              <div className="flex h-full gap-3">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose first device
                  </div>
                  <div className="text-gray-600 font-bol">
                    One sending ICMP req
                  </div>
                </div>
                <input className="bg-gray-200 shadow-black shadow-inner rounded-full"></input>
              </div>
            </div>
            <div>
              <div className="flex h-full gap-3">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose first device
                  </div>
                  <div className="text-gray-600 font-bol">
                    One sending ICMP req
                  </div>
                </div>
                <input className="bg-gray-200 shadow-black shadow-inner rounded-full"></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="flex bg-blue-800 p-2 rounded-full shadow-black shadow-md ">
              + More Networks
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold bg-gradient-to-r from-[rgb(255,0,0)] to-gray-500 p-2 rounded-full">
            Permition list
          </div>
          <div className=" flex justify-around ">
            <div>
              <div className="flex h-full gap-3">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose first device
                  </div>
                  <div className="text-gray-600 font-bol">
                    One sending ICMP req
                  </div>
                </div>
                <input className="bg-gray-200 shadow-black shadow-inner rounded-full"></input>
              </div>
            </div>
            <div>
              <div className="flex h-full gap-3">
                <div>
                  <div className="text-blue-700 font-bold">
                    Choose first device
                  </div>
                  <div className="text-gray-600 font-bol">
                    One sending ICMP req
                  </div>
                </div>
                <input className="bg-gray-200 shadow-black shadow-inner rounded-full"></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="flex bg-blue-800 p-2 rounded-full shadow-black shadow-md ">
              + More Networks
            </button>
          </div>
        </div>

        <div className=" flex gap-5">
          <button className=" bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            apply
          </button>
          <button className=" bg-warmGray-600 text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            discard
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fitt  shadow-lg shadow-black ">
        <div className="font-bold">Security Audit</div>
        <div className="flex justify-around">
          <div className="flex gap-3 w-[30%]">
            <div>
              <div className="text-blue-700 font-bold">Choose first device</div>
              <div className="text-gray-600 font-bol">One sending ICMP req</div>
            </div>
            <button className="bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full sh">
              R1
            </button>
          </div>
          <button className=" bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Start Comparing
          </button>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="font-bold text-blue-600">
            Securtity level according to CISCO & Al-Baath standards:
          </div>

          <div className="flex flex-col p-5 bg-purple-800 w-[30%] gap-3 items-center justify-center">
            <div className="flex w-fitt h-fitt justify-center bg-pink-500">
              s <Linechart />s
            </div>
            <div className="flex w-[30%] justify-center bg-red-500">text</div>
            <button
              className="flex justify-center text-white rounded-full shadow-black shadow-md
       bg-blue-950 w-[70%] p-2 "
            >
              save
            </button>
            <button
              className="flex justify-center text-white rounded-full shadow-black shadow-md
       bg-[rgb(0,255,0)] w-[70%] p-2 "
            >
              apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
