import React, { useState } from "react";
import "/src/Css/FlippingCard.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [h_name, set_H_Name] = useState();
  const [h_description, set_H_Description] = useState();
  const [h_pid, set_H_PID] = useState();
  const [h_sn, set_H_SN] = useState();
  const [h_vid, set_H_VID] = useState();
  const [h_percentage, set_H_Percentage] = useState();
  const [h_actives, set_H_Actives] = useState(false);
  const [h_interface1Port, set_H_Interface1Port] = useState();
  const [h_interface2Port, set_H_Interface2Port] = useState();
  const [h_interface1Active, set_H_Interface1Active] = useState(false);
  const [h_interface2Active, set_H_Interface2Active] = useState(false);
  const [h_memory, set_H_Memory] = useState();

  const fetchStart = async () => {
    await fetch("http://localhost:3000/data1122")
      .then((res) => res.json())
      .then((data) => {
        set_H_Name(data.H_Name);
        set_H_Description(data.H_Description);
        set_H_PID(data.H_PID);
        set_H_VID(data.H_VID);
        set_H_SN(data.H_SN);
        set_H_Percentage(data.H_Percentage);
        set_H_Actives(true);
        set_H_Interface1Port(data.H_Interface1Port);
        set_H_Interface2Port(data.H_Interface2Port);
        set_H_Interface1Active(data.H_Interface1Active);
        set_H_Interface2Active(data.H_Interface2Active);
        set_H_Memory(data.H_Memory);
      });
  };

  return (
    <div className="p-5 w-full h-f bg-gray-400">
      <div className={`flip-card ${isFlipped ? "flipped " : ""}`}>
        <div className="flip-card-inner flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full h-[380px] shadow-lg shadow-black">
          <div className="flip-card-front flex flex-col gap-3">
            <div className="font-bold text-xl">Hardware Info Router :</div>
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
                <button
                  onClick={fetchStart}
                  className=" bg-black text-white p-3 w-[25%] rounded-full shadow-black shadow-md"
                >
                  Start
                </button>
                <button
                  onClick={handleClick}
                  className=" bg-warmGray-600 text-white p-3 w-[25%] rounded-full shadow-black shadow-md"
                >
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
                  <div className="flex items-center gap-1">
                    <div>Activity: </div>
                    <div
                      className={` ${
                        h_actives
                          ? " rounded-full p-2 shadow-black shadow-md bg-[rgb(0,255,0)]"
                          : " rounded-full p-2 shadow-black shadow-inner bg-[rgb(97,96,96)]"
                      }`}
                    ></div>
                  </div>
                  <div className="flex gap-1">
                    <div>Name:</div>
                    <div className="text-blue-700">{h_name}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center font-bold">
                  <div className="flex gap-1">
                    <div>Description: </div>
                    <div className="text-blue-700">{h_description}</div>
                  </div>
                  <div className="flex gap-1">
                    <div>Version ID: </div>
                    <div className="text-blue-700">{h_vid}</div>
                  </div>
                </div>

                <div className="flex flex-col items-center font-bold ">
                  <div className="flex gap-1">
                    <div>Product ID: </div>
                    <div className="text-blue-700">{h_pid} </div>
                  </div>
                  <div className="flex gap-1">
                    <div>Serial Num: </div>
                    <div className="text-blue-700">{h_sn}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full  h-full items-center">
              <div className="flex flex-col gap-3 w-[65%]">
                <div
                  className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           h_interface1Active ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }`}
                >
                  <div>GigabitEthernet 0/{h_interface1Port}</div>
                  <div> {h_interface1Active ? " Up " : " Down "} </div>
                </div>
                <div
                  className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           h_interface2Active ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }`}
                >
                  <div>GigabitEthernet 0/{h_interface2Port}</div>
                  <div> {h_interface2Active ? " Up " : " Down "} </div>
                </div>
              </div>
              <div className=" flex w-[35%] bg-gray-400 shadow-black shadow-md justify-around items-center rounded-full h-[62%]">
                <div className="  bg-gradient-to-tl from-[rgb(0,255,0)] to-[rgb(0,0,255)] absolute p-2 -translate-x-32 rounded-full ">
                  <div className=" bg-gray-300 p-4  rounded-full font-bold ">
                    {h_percentage}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center translate-x-24 font-bold">
                  <div>Memory R1 </div>
                  <div className="text-blue-700"> {h_memory}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back flex flex-col absolute w-full  justify-center ">
            <div
              className="flip-card-front flex -translate-y-48
             flex-col gap-3 "
            >
              <div className="font-bold text-xl">Hardware Info Router :</div>
              <div className="flex  justify-around p-3  w-full h-full">
                <div className=" flex w-full h-full justify-end gap-5">
                  <button
                    onClick={handleClick}
                    className=" bg-warmGray-600 -translate-x-10 text-white p-3 w-[15%] rounded-full shadow-black shadow-md"
                  >
                    Back
                  </button>
                </div>
              </div>

              <div className="flex w-full  h-full items-center">
                <div>test</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
