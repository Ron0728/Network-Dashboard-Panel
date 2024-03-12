import React, { useState } from "react";
import Linechart from "../Charts/Linechart";

const Protocols = () => {
  const [protocol, setportocol] = useState("");

  const options = [
    { label: "ARP", value: "ARP" },
    { label: "Telnet", value: "Telnet" },
    { label: "SMTP", value: "SMTP" },
    { label: "OSPF", value: "OSPF" },
    { label: "BGP", value: "BGP" },
    { label: "DHCP", value: "DHCP" },
    { label: "HTTP", value: "HTTP" },
    { label: "FTP", value: "FTP" },
  ];

  function handleSelect(event) {
    setportocol(event.target.value);
  }
  return (
    <div className="flex h-full w-full bg-gray-400 ">
      <div className="flex flex-col gap-24 m-5 justify-center items-center">
        <h1 className="font-bold ">
          The Network You Are Managing is working with NAME Protocol.
        </h1>
        <span className="w-[90%] items-center">
          You Can View The Effects of This Protocol on the Network with the
          Diagram:
          <span className="font-bold w-[10%] ">{protocol}</span>
        </span>
        <div className="flex flex-col w-full gap-3">
          <div className="font-bold flex justify-center ">
            Try Another Protocol:
          </div>
          <div className="flex gap-5 justify-center">
            <div className="flex bg-gray-300 shadow-md shadow-black rounded-2xl outline-none">
              <input
                placeholder="Other Protocols..."
                className=" bg-gray-300 text-black shadow-inner shadow-black rounded-2xl outline-none  p-2"
              />
              <select
                onChange={handleSelect}
                className="flex bg-transparent outline-none font-bold"
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <button className=" bg-blue-700 text-white p-3 w-[30%] rounded-2xl hover:shadow-inner hover:shadow-black shadow-black shadow-sm font-bold ml-4">
              Try
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(255,249,249)] w-1/2 border-4 border-black m-5">
        <Linechart />
      </div>
    </div>
  );
};

export default Protocols;
