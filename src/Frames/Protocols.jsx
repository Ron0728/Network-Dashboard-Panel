import React, { useState } from "react";

const Protocols = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [protocolData, setProtocolData] = useState({
    network: "",
    subnet: "",
  });

  const handleChange = (e) => {
    setProtocolData({ ...protocolData, [e.target.network]: e.target.value });
  };

  const handleApply = (e) => {
    e.preventDefault();
    setProtocolData({ network: "", subnet: "" });
    console.log("Apply done");
  };

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <div className="flex flex-col bg-gray-300 rounded-2xl gap-3 p-5 w-full  shadow-lg shadow-black ">
        <div className="font-bold text-2xl">
          Existing Devives on GNS3 port 3080
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%]  p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <div>
              <img className="" src={"/public/Switch.png"} />
            </div>
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 text-blue-700 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Switch.png"} />
            <div className="font-bold">SW1</div>
            <div>
              <div className="text-sm">CISCO Catalyst</div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-gray-400 w-[13%] h-full p-5 rounded-es-2xl rounded-ee-2xl shadow-md shadow-black ">
            <img src={"/public/Router.png"} />
            <div className="flex flex-col items-center justify-center translate-y-3">
              <div className="font-bold">R1</div>
              <div>
                <div className="text-sm">C7200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">Check Interfaces:</div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-5">
            <div className="flex items-center w-full h-full gap-3 ">
              <div className="flex w-full items-center">
                <div className="text-blue-700 text-lg font-bold">
                  Choose wanted device{" "}
                  <span className="text-sm  text-gray-600">
                    all interfaces status & option
                  </span>
                </div>
              </div>
              <div className="flex justify-around items-center h-[70%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex justify-end w-full h-full">
              <button className="startchecking -translate-x-3 flex justify-center  bg-blue-950 p-3  text-white font-bold rounded-full shadow-lg shadow-black">
                Start Checking
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full h-full justify-between">
            <div className="flex flex-col gap-2 w-[85%] h-full">
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked1 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked1 ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
               bg-gradient-to-r from-[rgb(0,0,255)] ${
                 isChecked2 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
               }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked2 ? " Up " : " Down "}</div>
              </div>
              <div
                className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
                bg-gradient-to-r from-[rgb(0,0,255)] ${
                  isChecked3 ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
                }`}
              >
                <div>GigabitEthernet 0/0</div>
                <div>{isChecked3 ? " Up " : " Down "}</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[15%] h-full gap-6 p-2 ">
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    id="check"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)]
                   peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check1"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    id="check1"
                    checked={isChecked1}
                    onChange={(e) => setIsChecked1(e.target.checked)}
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8  transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold ">
                OFF
                <label
                  for="check2"
                  className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    id="check2"
                    checked={isChecked2}
                    onChange={(e) => setIsChecked2(e.target.checked)}
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
              <div className=" flex w-full h-full gap-3 font-bold">
                OFF
                <label
                  for="check3"
                  className="bg-gray-700 shadow-md shadow-black  cursor-pointer relative w-[40%] rounded-full"
                >
                  <input
                    type="checkbox"
                    id="check3"
                    checked={isChecked3}
                    onChange={(e) => setIsChecked3(e.target.checked)}
                    class="sr-only peer"
                  />
                  <span
                    class="bg-[rgb(255,0,0)] w-1/3 h-4/6 absolute shadow-inner shadow-black rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] 
                  peer-checked:left-8 transition-all duration-500"
                  ></span>
                </label>
                ON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">DHCP Configuration:</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply DHCP to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex gap-3 items-center">
              <div>
                <div className="flex justify-center text-gray-600 font-bold">
                  insert network
                </div>
                <div className="text-gray-600 font-bold">Applying Network</div>
              </div>
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center h-full gap-7">
              <div className="text-blue-700 font-bold">Choose interfaces</div>

              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="F 0/1">F 0/1</option>
                    <option value="F 0/2">F 0/2</option>
                    <option value="F 0/3">F 0/3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-gray-600 font-bold">Insert subnet</div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            DHCP info
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">RIP Configuration:</div>
        <div className="flex justify-between">
          <div className=" flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply RIP to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex gap-3 items-center">
              <div>
                <div className="flex justify-center text-gray-600 font-bold">
                  insert network
                </div>
                <div className="text-gray-600 font-bold">Applying Network</div>
              </div>
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="  flex flex-col gap-5 ">
            <div className="flex items-center -translate-y-1.5 h-full gap-7">
              <div className="text-blue-700 font-bold">Choose RIP version</div>
              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="Version1">Version 1</option>
                    <option value="Version2">Version 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 -translate-y-2 items-center">
              <div className="text-gray-600 font-bold">Insert subnet</div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            RIP info
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">EGRIP Configuration:</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply EGRIP to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex gap-3 items-center">
              <div>
                <div className="flex justify-center text-gray-600 font-bold">
                  insert network
                </div>
                <div className="text-gray-600 font-bold">Applying Network</div>
              </div>
              <input className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
          <div className="  flex flex-col gap-5 ">
            <div className="flex items-center -translate-y-1.5 h-full gap-7">
              <div>
                <div className="text-blue-700 font-bold">Choose AS Number</div>
                <div className="text-gray-700 font-bold">
                  (Optinal) default 10
                </div>
              </div>
              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 -translate-y-2 items-center">
              <div className="text-gray-600 font-bold">Insert subnet</div>
              <input className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"></input>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            EGRIP info
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black ">
        <div className="font-bold text-2xl">OSPF Configuration:</div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <div>
                <div className="text-blue-700 w-full font-bold">
                  Choose wanted device
                </div>
                <div className="flex justify-center font-bold text-gray-600">
                  to apply OSPF to it
                </div>
              </div>
              <div className="flex justify-around items-center bg-blue-900 w-[40%] shadow-lg shadow-black rounded-full ">
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
            <div className="flex gap-3 items-center">
              <div>
                <div className="flex justify-center text-gray-600 font-bold">
                  insert network
                </div>
                <div className="text-gray-600 font-bold">Applying Network</div>
              </div>
              <input
                value={protocolData.network}
                onChange={handleChange}
                className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center h-full gap-7">
              <div className="text-blue-700 font-bold">Choose interfaces</div>

              <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
                <div>
                  <select className="flex pr-5 bg-transparent outline-none font-bold">
                    <option value="F 0/1">F 0/1</option>
                    <option value="F 0/2">F 0/2</option>
                    <option value="F 0/3">F 0/3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-gray-600 font-bold">Insert subnet</div>
              <input
                value={protocolData.subnet}
                onChange={handleChange}
                className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-5">
          <div className="text-blue-700 font-bold">Insert Area Number</div>
          <input className=" bg-gray-400 p-1 outline-none w-[30%]  shadow-black shadow-inner rounded-full"></input>
        </div>
        <form onSubmit={handleApply} className="flex gap-5">
          <button className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full">
            Apply
          </button>
          <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            Discard
          </button>
          <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
            OSPF info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Protocols;
