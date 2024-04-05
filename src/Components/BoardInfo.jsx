import React from "react";
import "/src/Css/pingbutton.css";

const BoardInfo = () => {
  return (
    <div className="flex flex-col  bg-transparent w-full h-full p-5 gap-3">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
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

      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Hardware Info Router :</div>
        <div className="flex w-full p-3 items-center bg-gray-400 rounded-full shadow-md shadow-black">
          <div className="flex w-[10%] h-full">
            {" "}
            <img src={"/Router.png"} />
          </div>
          <div className="flex items-center w-full justify-around">
            <div className="flex flex-col items-center font-bold">
              <div className="flex gap-1">
                <div>Activity: </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex gap-1">
                <div>Name:</div>
                <div className="text-blue-700">R1</div>
              </div>
            </div>
            <div className="flex flex-col items-center font-bold">
              <div className="flex gap-1">
                <div>Description: </div>
                <div className="text-blue-700">cisco7200</div>
              </div>
              <div className="flex gap-1">
                <div>Version ID: </div>
                <div className="text-blue-700">V01</div>
              </div>
            </div>

            <div className="flex flex-col items-center font-bold ">
              <div className="flex gap-1">
                <div>Product ID: </div>
                <div className="text-blue-700">1561658/k9 </div>
              </div>
              <div className="flex gap-1">
                <div>Serial Num: </div>
                <div className="text-blue-700">DEF987654</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full items-center">
          <div className="flex flex-col w-[65%] gap-3 font-bold">
            <div
              className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
            bg-gradient-to-r from-blue-700 to-[rgb(0,255,0)]"
            >
              <div>GigabitEthernet 0/0</div>
              <div>Up</div>
            </div>
            <div
              className="flex w-full justify-between rounded-full shadow-md shadow-black p-2 
            bg-gradient-to-r from-blue-700 to-[rgb(255,0,0)]"
            >
              <div>GigabitEthernet 0/0</div>
              <div>Down</div>
            </div>
          </div>
          <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[62%]">
            <div className=" bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)]  p-2  rounded-full ">
              <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                30%
              </div>
            </div>
            <div className="flex flex-col items-center font-bold">
              <div>Memory R1 </div>
              <div className="text-blue-700">40255 kb</div>
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
    </div>
  );
};

export default BoardInfo;
