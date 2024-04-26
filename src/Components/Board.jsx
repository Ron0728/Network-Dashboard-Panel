import React, { useState } from "react";
import { IoSpeedometerSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BrainCircuit } from "lucide-react";
import BoardInfo from "./BoardInfo";
import "/src/Css/FetchButton.css";

const Board = () => {
  // to fetch data after clicking (fetch data) button
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [pid, setPID] = useState();
  const [sn, setSN] = useState();
  const [vid, setVID] = useState();
  const [percentage, setPercentage] = useState();
  const [actives, setActives] = useState(false);
  const [interface1Port, setInterface1Port] = useState();
  const [interface2Port, setInterface2Port] = useState();
  const [interface1Active, setInterface1Active] = useState(false);
  const [interface2Active, setInterface2Active] = useState(false);
  const [memory, setMemory] = useState();

  const fetchData = async () => {
    await fetch("http://localhost:3000/data112")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.Description);
        setPID(data.PID);
        setVID(data.VID);
        setSN(data.SN);
        setPercentage(data.Percentage);
        setActives(data.active);
        setInterface1Port(data.Interface1Port);
        setInterface2Port(data.Interface2Port);
        setInterface1Active(data.Interface1Active);
        setInterface2Active(data.Interface2Active);
        setMemory(data.Memory);
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
          Name={name}
          Description={description}
          Pid={pid}
          Vid={vid}
          Sn={sn}
          Percentage={percentage}
          Actives={actives}
          Port1={interface1Port}
          Port2={interface2Port}
          Active1={interface1Active}
          Active2={interface2Active}
          Memory={memory}
        />
      </div>
    </div>
  );
};

export default Board;
