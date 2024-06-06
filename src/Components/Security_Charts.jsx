import React, { useEffect, useState } from "react";
import LevelPieChart from "../Charts/LevelPieChart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Security_Charts = () => {
  const [configaudit, setConfigaudit] = useState([]);
  const [diff_Percentage, setDiff_Percentage] = useState();

  const notify = () => {
    toast.success("DONE", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const fetchDevices_configaudit = async () => {
    await fetch("http://localhost:3000/dashboard/security/configaudit")
      .then((res) => res.json())
      .then((data) => {
        setConfigaudit(data);
        setDiff_Percentage(data.diff_percentage);
        setDiff_Percentage(data.device_ip);
        console.log(data);
        console.log(data.diff_percentage);
        console.log(data.device_ip);
      }, []);
  };

  useEffect(() => {
    fetchDevices_configaudit();
  }, []);
  return (
    <div className="flex gap-5  ">
      <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
        <div className=" w-full  ">
          <LevelPieChart />
          <div className=" font-bold flex justify-center">CISCO</div>
        </div>
        <div className="flex font-bold flex-col gap-3 items-center justify-center w-full">
          <button
            onClick={notify}
            className="bg-gray-700 w-[20%] p-2 rounded-xl shadow-black shadow-md"
          >
            Check
          </button>
          <ToastContainer />
          <button className="bg-green-700 w-[20%] p-2 rounded-xl shadow-black shadow-md">
            Start
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-t from-blue-500 to-gray-300 rounded-2xl gap-3 p-5 w-full h-full  shadow-lg shadow-black ">
        <div className="w-full ">
          <LevelPieChart PERCENT={diff_Percentage} />
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
  );
};

export default Security_Charts;
