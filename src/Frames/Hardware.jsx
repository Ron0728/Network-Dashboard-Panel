import React from "react";

const Hardeare = () => {
  return (
    <div className="p-5 w-full bg-gray-400">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full shadow-lg shadow-black ">
        <div className="font-bold">Hardware Info Router :</div>
        <div className="flex  justify-around p-3  w-full h-full">
          <div className="flex gap-3  w-full">
            <div>
              <div className="text-blue-700 font-bold">Choose first device</div>
              <div className="text-gray-600 font-bol">One sending ICMP req</div>
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
          <div className=" flex w-full h-full justify-end gap-5">
            <button className=" bg-black text-white p-3 w-[25%] rounded-full shadow-black shadow-md">
              Start
            </button>
            <button className=" bg-warmGray-600 text-white p-3 w-[25%] rounded-full shadow-black shadow-md">
              Information
            </button>
          </div>
        </div>
        <div className="flex w-full p-3 items-center bg-gray-400 rounded-full shadow-md shadow-black">
          <div>pic</div>
          <div className="flex items-center w-full justify-around">
            <div className="flex flex-col items-center font-bold">
              <div className="flex gap-1">
                <div>Activity </div>
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
          <div className="flex flex-col w-[65%] gap-3">
            <div className="flex w-full justify-between rounded-full shadow-md text-white shadow-black p-2 bg-gradient-to-r from-[rgb(0,0,255)] to-warmGray-600">
              <div>GigabitEthernet 0/0</div>
              <div>up</div>
            </div>
            <div className="flex w-full justify-between rounded-full shadow-md text-white shadow-black p-2 bg-gradient-to-r from-[rgb(0,0,255)] to-[rgb(0,255,0)]">
              <div>GigabitEthernet 0/0</div>
              <div>up</div>
            </div>
          </div>
          <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[75%]">
            <div>30%</div>
            <div className="flex flex-col items-center font-bold">
              <div>Memory R1 </div>
              <div className="text-blue-700">40255 kb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardeare;
