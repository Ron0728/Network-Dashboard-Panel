import React, { useEffect, useState } from "react";

const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2 
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           checked ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         }`}
      >
        <div> {checked ? `GigabitEthernet 0/${id}` : "-----"}</div>
        <div> {checked ? " Up " : " Down "} </div>
      </div>
      <div className=" flex w-[15%] justify-around h-full gap-3 font-bold">
        OFF
        <label
          htmlFor={(checked) => !checked}
          for="check"
          className="bg-gray-700 shadow-md shadow-black cursor-pointer relative w-[40%] rounded-full"
        >
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            class="sr-only peer"
          />
          <span
            class="bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)]
                   peer-checked:left-8 transition-all duration-500"
          ></span>
        </label>
        ON
      </div>
    </div>
  );
};

const InterfacesLoop = () => {
  useEffect(() => {
    fetchSwitchInfo();
  }, []);

  const [switches, setSwitches] = useState([]);
  const fetchSwitchInfo = async () => {
    await fetch("http://localhost:3000/data4")
      .then((res) => res.json())
      .then((data) => {
        setSwitches(data);
      });
  };

  const handleToggle = (id) => {
    setSwitches((data) =>
      data.map((sw) => (sw.id === id ? { ...sw, checked: !sw.checked } : sw))
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {switches.map((sw) => (
        <ToggleSwitch
          key={sw.id}
          id={sw.id}
          checked={sw.checked}
          onChange={() => handleToggle(sw.id)}
        />
      ))}
    </div>
  );
};

export default InterfacesLoop;
