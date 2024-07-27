import { X } from "lucide-react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Devices = ({ PIC, N, I, ID, IP }) => {
  const [mSG, setMSG] = useState();

  const Delete = async () => {
    await fetch(`http://localhost:3000/dashboard/devices/delete?id=${ID}`)
      .then((res) => res.json())
      .then((data) => {
        setMSG(data.message);
        notifyI(mSG);
        console.log("delete", ID);
      }, []);
  };

  const notifyI = (msg) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 3000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col bg-gray-400 text-blue-700 w-[13%] p-2 rounded-2xl shadow-md shadow-black ">
      <div className="justify-end flex">
        <button
          onClick={Delete}
          className="bg-gray-600 w-[20%] h-[50%] hover:bg-[rgb(255,0,0)] text-black shadow-md shadow-black p-1 justify-center items-center flex  rounded-full"
        >
          <X />
        </button>
      </div>
      <div>
        {" "}
        <div className="flex flex-col justify-center items-center">
          <img src={PIC[ID]} />

          <div className="font-bold">{N[ID]}</div>
          <div>
            <div className="text-sm">{I[ID]}</div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Devices;
