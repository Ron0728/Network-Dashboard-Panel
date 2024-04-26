import React from "react";

const ExistingDevives = () => {
  return (
    <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">
        Existing Devives on GNS3 port 3080
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
          <img src={"/Switch.png"} />
          <div className="font-bold">SW 1</div>
          <div>
            <div className="text-sm">CISCO Catalyst</div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
          <img src={"/Switch.png"} />
          <div className="font-bold">SW 2</div>
          <div>
            <div className="text-sm">CISCO Catalyst</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
          <img src={"/Router.png"} />
          <div>
            <div className="flex flex-col  items-center justify-center ">
              <div className="font-bold">R 1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
          <img src={"/Router.png"} />
          <div>
            <div className="flex flex-col  items-center justify-center ">
              <div className="font-bold">R 2</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingDevives;
