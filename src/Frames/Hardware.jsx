import React from "react";

const Hardeare = () => {
  return (
    <div className="p-5 w-full bg-gray-400">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Hardware Info Router :</div>
        <div className="flex  justify-around p-3  w-full h-full">
          <div className="flex gap-3  w-full">
            <div>
              <div className="text-blue-700 font-bold">
                Choose wanted device
              </div>
              <div className="text-gray-600 font-bold">
                it will return all related info:
              </div>
            </div>
            <div className="flex justify-around items-center  bg-blue-900 w-[25%] shadow-lg shadow-black rounded-full ">
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
          <div className="flex flex-col w-[65%] gap-3">
            <div
              className="flex w-full justify-between rounded-full shadow-md font-bold shadow-black p-2 bg-gradient-to-r 
             from-[rgb(0,0,255)] to-[rgb(255,0,0)]"
            >
              <div>GigabitEthernet 0/0</div>
              <div>Down</div>
            </div>
            <div
              className="flex w-full justify-between rounded-full shadow-md font-bold shadow-black p-2 bg-gradient-to-r 
             from-[rgb(0,0,255)] to-[rgb(0,255,0)]"
            >
              <div>GigabitEthernet 0/0</div>
              <div>Up</div>
            </div>
          </div>
          <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[75%]">
            <div className="  bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)] absolute p-2 -translate-x-32 rounded-full ">
              <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                30%
              </div>
            </div>
            <div className="flex flex-col justify-center items-center translate-x-28 font-bold">
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
