import React, { useState, useEffect } from "react";
const ToggleSwitch = ({ swData }) => {
  const [checked, setChecked] = useState(swData.active);

  const Send_data_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/troubleshooting/interfaceStatus?selectedDeviceIP=${checked}`
    );
    const data = await response.json();
  };

  useEffect(() => {
    Send_data_ToServer();
  });

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 bg-gradient-to-r from-[rgb(0,0,255)] ${
          checked ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
        }`}
      >
        <div>
          {swData.type} {swData.port}
        </div>
        <div>{checked ? `${swData.state}` : "Down"}</div>
      </div>
      <div className="flex w-[15%] justify-around h-full gap-3 font-bold">
        OFF
        <label
          htmlFor={swData.id}
          className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
        >
          <input
            type="checkbox"
            id={swData.id}
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="sr-only peer"
          />
          <span
            className={`bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] peer-checked:left-8 transition-all duration-500`}
          ></span>
        </label>
        ON
      </div>
    </div>
  );
};

const InterfacesLoop = ({ SW_INTERFACE }) => {
  const [switches, setSwitches] = useState([]);
  const [ids, setIds] = useState([]);
  const [types, setTypes] = useState([]);
  const [states, setState] = useState([]);
  const [ports, setPorts] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    if (SW_INTERFACE) {
      setIds(SW_INTERFACE.Interfaces.map((item) => item.id));
      setTypes(SW_INTERFACE.Interfaces.map((item) => item.type));
      setState(SW_INTERFACE.Interfaces.map((item) => item.state));
      setPorts(SW_INTERFACE.Interfaces.map((item) => item.port));
      setActive(SW_INTERFACE.Interfaces.map((item) => item.active));
    }
  }, [SW_INTERFACE]);

  return (
    <div className="flex flex-col gap-3">
      {ids.map((sw) => (
        <ToggleSwitch
          key={sw}
          swData={SW_INTERFACE.Interfaces.find((item) => item.id === sw)}
        />
      ))}
    </div>
  );
};

export default InterfacesLoop; //Done
