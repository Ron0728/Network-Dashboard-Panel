import React from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/startcheckingbutton.css";
import { FaNetworkWired } from "react-icons/fa6";
import MoreNetButtom from "../Components/MoreNetButton";
import LevelPieChart from "../Charts/LevelPieChart";
import MoreNetworks from "../Components/MoreNetworks";

const Security = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3 bg-gray-400 p-5 overflow-y-scroll">
      <div className="bg-gradient-to-r text-gray-800 from-blue-700 to-white p-5 rounded-full font-bold shadow-md shadow-black">
        Text
      </div>

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full  shadow-lg shadow-black ">
        <div className="font-bold text-2xl">
          Existing Devives on GNS3 port 3080
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/Switch.png"} />
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

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fit shadow-lg shadow-black ">
        <div className="font-bold text-2xl ">Accessability</div>

        <div className="flex gap-3 items-center h-full  w-full sm:w-1/2">
          <div>
            <div className="text-blue-700 text-lg font-bold">
              Choose the device{" "}
              <span className="text-gray-600 text-sm font-bold">
                to edit accessabilty
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center bg-blue-900 w-[25%] p-2 shadow-lg shadow-black rounded-full ">
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

        <div className="flex flex-col bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold bg-gradient-to-r from-[rgb(0,255,0)] to-gray-500 shadow-md shadow-black p-2 rounded-full">
            Permition list
          </div>
          <MoreNetworks />
        </div>
        <div className="flex flex-col  bg-gray-400 p-4 rounded-xl gap-3 shadow-inner shadow-black">
          <div className="font-bold shadow-md shadow-black bg-gradient-to-r from-[rgb(255,0,0)] to-gray-500 p-2 rounded-full">
            Prevention list
          </div>
          <MoreNetworks />
        </div>

        <div className=" flex gap-5">
          <button className="apply bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Apply
          </button>
          <button className="discard bg-warmGray-600 text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Discard
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
        <div className="font-bold">Security Audit</div>
        <div className="flex h-full justify-around">
          <div className="flex items-center gap-3 h-full w-[30%]">
            <div className="md:flex-col">
              <div className="text-blue-700 font-bold">Choose the device</div>
            </div>
            <div className="flex justify-around items-center bg-blue-900 w-[40%] h-[70%] shadow-lg shadow-black rounded-full ">
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
          <button className="startchecking bg-black text-white p-3 w-[15%] rounded-full shadow-black shadow-md">
            Start
          </button>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="font-bold text-blue-600">
            Securtity level according to CISCO & Al-Baath standards:
          </div>
        </div>
      </div>
      <div className="flex gap-5  ">
        <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
          <div className=" w-full  ">
            <LevelPieChart />
            <div className=" font-bold flex justify-center">CISCO</div>
          </div>
          <div className="flex font-bold flex-col gap-3 items-center justify-center w-full">
            <button className="bg-gray-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Check
            </button>
            <button className="bg-green-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Start
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
          <div className="w-full ">
            <LevelPieChart />
            <div className=" font-bold flex justify-center items-center">
              AL-Baath
            </div>
          </div>
          <div className="flex font-bold flex-col gap-3 items-center justify-center w-full">
            <button className="bg-gray-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Check
            </button>
            <button className="bg-green-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
