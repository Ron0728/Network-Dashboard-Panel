import React, { useState } from "react";
import { IoSpeedometerSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BrainCircuit } from "lucide-react";
import BoardInfo from "./BoardInfo";
import "/src/Css/FetchButton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Board = () => {
  // to fetch data after clicking (fetch data) button
  const [hardwareData, setHardwareData] = useState([]);
  const [name1, setName] = useState();
  const [description, setDescription] = useState();
  const [pid, setPID] = useState();
  const [sn, setSN] = useState();
  const [vid, setVID] = useState();
  const [percentages, setPercentages] = useState();
  const [actives, setActives] = useState(false);
  const [interface1Port, setInterface1Port] = useState();
  const [interface2Port, setInterface2Port] = useState();
  const [interface3Port, setInterface3Port] = useState();
  const [interface1Active, setInterface1Active] = useState(false);
  const [interface2Active, setInterface2Active] = useState(false);
  const [interface3Active, setInterface3Active] = useState(false);
  const [interface1state, setInterface1state] = useState();
  const [interface2state, setInterface2state] = useState();
  const [interface3state, setInterface3state] = useState();
  const [interface1type, setInterface1type] = useState();
  const [interface2type, setInterface2type] = useState();
  const [interface3type, setInterface3type] = useState();
  const [memory, setMemory] = useState();

  const fetchData = async () => {
    try {
      await fetch("http://localhost:3000/dashboard/basicInfo")
        .then((res) => res.json())
        .then((data) => {
          // setHardwareData(response.data);
          setName(data.Hardware[0].name);
          setDescription(data.Hardware[0].descr);
          setPID(data.Hardware[0].pid);
          setVID(data.Hardware[0].vid);
          setSN(data.Hardware[0].sn);
          setMemory(data.Memory.memory_usage);
          setActives(true);
          setInterface1Active(data.Interfaces[0].active);
          setInterface2Active(data.Interfaces[1].active);
          setInterface3Active(data.Interfaces[2].active);
          setInterface1Port(data.Interfaces[0].port);
          setInterface2Port(data.Interfaces[1].port);
          setInterface3Port(data.Interfaces[2].port);
          setInterface1state(data.Interfaces[0].state);
          setInterface2state(data.Interfaces[1].state);
          setInterface3state(data.Interfaces[2].state);
          setInterface1type(data.Interfaces[0].type);
          setInterface2type(data.Interfaces[1].type);
          setInterface3type(data.Interfaces[2].type);
          setPercentages(data.Percentage.percentage);
          notifyG("Done");
        }, []);
    } catch {
      notifyW("An Error Occurred");
    }
  };

  const notifyG = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 1000,
      newestOnTop: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const notifyW = (msg) => {
    toast.warn(msg, {
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
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      {/* Automatic configurations & management */}
      <div>
        <div className="pl-10">
          <div className="font-bold w-fit text-white bg-blue-800 shadow-sm shadow-black p-2 rounded-full">
            Automatic configurations & management
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-700 to-blue-200 rounded-full gap-3 p-3 w-full shadow-lg shadow-black ">
          <div className="flex items-center justify-between text-white font-bold">
            <div className="flex items-center gap-1">
              <div className="text-2xl">
                <IoShieldCheckmarkOutline />
              </div>
              <div className="text-xl">Source</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-2xl">
                <IoSpeedometerSharp />
              </div>
              <div className="text-xl">Fast</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-3xl">
                <BrainCircuit />
              </div>
              <div className="text-xl">AI</div>
            </div>

            <button
              onClick={fetchData}
              className="fetchbutton flex bg-blue-700 shadow-black shadow-md hover:bg-green-500 items-center text-white font-bold rounded-full p-3"
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full">
        <BoardInfo
          Name={name1}
          Description={description}
          Pid={pid}
          Vid={vid}
          Sn={sn}
          Percentage={percentages}
          Active={actives}
          Port1={interface1Port}
          Port2={interface2Port}
          Port3={interface3Port}
          State1={interface1state}
          State2={interface2state}
          State3={interface3state}
          Active1={interface1Active}
          Active2={interface2Active}
          Active3={interface3Active}
          Type1={interface1type}
          Type2={interface2type}
          Type3={interface3type}
          Memory={memory}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Board;
