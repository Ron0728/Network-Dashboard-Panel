import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToggleSwitch = ({ act, ID, State, Type, Port, checked, onChange }) => {
  const Send_data_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/troubleshooting/interfaceStatus?Check=${checked}`
    );
    const data = await response.json();
    console.log("check Intetface ", ID, " --> : ", checked);
  };

  useEffect(() => {
    Send_data_ToServer();
  });

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex w-full justify-between font-bold rounded-full shadow-md shadow-black p-2
         bg-gradient-to-r from-[rgb(0,0,255)] ${
           checked ? "to-[rgb(0,255,0)]" : "to-[rgb(255,0,0)]"
         } ${State == "Administratively" ? "to-[rgb(154,29,180)]" : ""}`}
      >
        <div>
          {Type} {Port}
        </div>
        <div>{checked ? `${State}` : " Down "}</div>
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
            id={ID}
            checked={checked}
            onChange={onChange}
            class="sr-only peer"
          />
          <span
            class={`bg-[rgb(255,0,0)] w-1/3 h-4/6 shadow-inner shadow-black absolute rounded-full left-1 top-1 peer-checked:bg-[rgb(0,255,0)] ${
              State == "Administratively"
                ? "peer-checked:bg-[rgb(154,29,180)]"
                : ""
            } peer-checked:left-8 transition-all duration-500`}
          ></span>
        </label>
        ON
      </div>{" "}
      {/* selectedDeviceIP */} {/* selectedAction*/}{" "}
      {/* selectedDeviceInterface */}
    </div>
  );
};

const InterfacesLoop = ({ SW_INTERFACE }) => {
  const [switches, setSwitches] = useState([]);
  const [active, setActive] = useState([]);

  const fetchSwitchInfo = async () => {
    await fetch("http://localhost:3000/dashboard/troubleshooting/interfaces")
      .then((res) => res.json())
      .then((data) => {
        console.log("XXX", SW_INTERFACE);
        {
          SW_INTERFACE
            ? setSwitches(SW_INTERFACE)
            : (setSwitches([]),
              notifyW("Please select a device then Start checking first"));
        }
      });
  };

  useEffect(() => {
    handleToggle();
    // fetchSwitchInfo();
  }, []);

  const handleToggle = (id) => {
    setSwitches((data) =>
      data.map((sw) => (sw.id === id ? { ...sw, checked: !sw.checked } : sw))
    );
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
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={fetchSwitchInfo}
          className="bg-blue-800 w-[25%] p-1 rounded-2xl shadow-black shadow-md text-white"
        >
          Bring Interfaces
        </button>
        <ToastContainer />
      </div>
      {switches.map((sw) => (
        <ToggleSwitch
          key={sw.id}
          ID={sw.id}
          checked={sw.checked}
          act={active}
          State={sw.state}
          Type={sw.type}
          Port={sw.port}
          onChange={() => handleToggle(sw.id)}
        />
      ))}
    </div>
  );
};

export default InterfacesLoop;
