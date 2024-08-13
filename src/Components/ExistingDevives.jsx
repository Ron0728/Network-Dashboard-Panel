import React from "react";

const ExistingDevives = () => {
  return (
    <div className="flex flex-col cursor-pointer bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fit shadow-lg shadow-black ">
      <div className="font-bold text-xl">
        Existing Devices on GNS3 Port 3080
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex w-full gap-5 items-center">
          <div className="flex flex-col bg-gray-400 text-blue-700 w-[13%] p-2 rounded-2xl shadow-md shadow-black ">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/public/Switch.png" />

                <div className=" font-bold">SW 1</div>
                <div>
                  <div className=" text-sm">C 7700</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-400  text-blue-700  w-[13%] p-2 rounded-2xl shadow-md shadow-black ">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/public/Switch.png" />

                <div className=" font-bold">SW 2</div>
                <div>
                  <div className=" text-sm">C 7700</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-400   w-[13%] p-2 rounded-2xl shadow-md shadow-black ">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/public/Router.png" />

                <div className=" font-bold">R 1</div>
                <div>
                  <div className=" text-sm">C 2700</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-400   w-[13%] p-2 rounded-2xl shadow-md shadow-black ">
            <div className="flex gap-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/public/Router.png" />

                <div className=" font-bold">R 2</div>
                <div>
                  <div className=" text-sm">C 2700</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingDevives;
