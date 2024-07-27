import React from "react";

const HardwareLoop = ({ NA, I, DS, SN, PID, VID, ACT }) => {
  // const [m, setM] = useState(NA);
  return (
    <div>
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
                  ACT
                    ? " rounded-full p-2 shadow-black shadow-md animate-pulse bg-[rgb(0,255,0)]"
                    : " rounded-full p-2 shadow-black shadow-inner bg-[rgb(97,96,96)]"
                }`}
              ></div>
            </div>
            <div className="flex gap-1">
              <div>Name:</div>

              <div className="text-blue-700">{NA[I]}</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start font-bold">
            <div className="flex gap-1 ">
              <div>Description: </div>
              <div className="text-blue-700">{DS[I]}</div>
            </div>
            <div className="flex gap-1">
              <div>Version ID: </div>
              <div className="text-blue-700">{VID[I]}</div>
            </div>
          </div>

          <div className="flex flex-col items-center font-bold ">
            <div className="flex gap-1">
              <div>Product ID: </div>
              <div className="text-blue-700">{PID[I]} </div>
            </div>
            <div className="flex gap-1">
              <div>Serial Num: </div>
              <div className="text-blue-700">{SN[I]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareLoop; //Done
