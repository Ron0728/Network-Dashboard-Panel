import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interface_Info_Monitoring = () => {
  const [interfaceInfo, setInterfaceInfo] = useState();
  const [selectedRouter, setSelectedRouter] = useState("");
  const [selectedInterfaces, setSelectedInterfaces] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const [router, setRouter] = useState([]);

  const fetchData = async () => {
    await fetch(
      `http://localhost:3000/dashboard/monitoring/interface?selectedDeviceIP=${iP}&&SelectedDeviceInt=${Int}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInterfaceInfo(data.Interface);
        console("---> ", data.Interface);
      });
  };

  const fetchData2 = async () => {
    await fetch("http://localhost:3000/dashboard/monitoring/save")
      .then((res) => res.json())
      .then((data) => {
        console("---> ", data.message);
        notifyG(data.message);
      });
  };

  const notifyG = (msg) => {
    toast.success(msg, {
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

  const handleRouterChange = (event) => {
    const selected_Router = event.target.value;
    setSelectedRouter(selected_Router);
    fetchInterfaces(selected_Router);
    console.log("the selected Router : -->", selected_Router);
  };

  const fetchInterfaces = async (Router) => {
    try {
      const response = await fetch(
        `http://localhost:3000/info/interfaces?Router=${Router}`
      );
      const data = await response.json();
      setInterfaces(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching interfaces:", error);
    }
  };

  const fetchRouter = async () => {
    try {
      const response = await fetch("http://localhost:3000/info/routers");
      const data = await response.json();
      setRouter(data);
    } catch (error) {
      console.error("Error fetching router:", error);
    }
  };

  useEffect(() => {
    fetchRouter();
  }, []);

  const handleInterfaceChange = (event) => {
    const selected_Interfaces = event.target.value;
    setSelectedInterfaces(selected_Interfaces);
    console.log("the selected Interface : -->", selected_Interfaces);
  };

  return (
    <div className="flex flex-col gap-5 bg-gray-300 rounded-2xl p-5 w-full shadow-lg shadow-black ">
      <div className="font-bold text-xl">Interface Info Monitoring </div>
      <div className="flex gap-20 items-center ">
        <div className="flex w-full gap-5 items-center">
          <div className="font-bold text-blue-700">Choose Device</div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
            <select
              className="bg-transparent outline-none "
              value={selectedRouter}
              onChange={handleRouterChange}
            >
              <option>Choose</option>
              {router.map((R) => (
                <option className="text-black" key={R.id} value={R.name}>
                  {R.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full gap-5 items-center">
          <div className="font-bold text-blue-700">Choose Interface</div>
          <div className="flex justify-around items-center p-2 bg-blue-900 w-[37%] shadow-lg text-white shadow-black rounded-full ">
            <select
              className="bg-transparent outline-none "
              value={selectedInterfaces}
              onChange={handleInterfaceChange}
            >
              {interfaces.map((I) => (
                <option className="text-black" key={I.id} value={I.name}>
                  {I.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="bg-blue-700 text-white hover:bg-green-600 w-[31%] p-2 rounded-full shadow-black shadow-lg items-center justify-center"
          onClick={fetchData}
        >
          Start
        </button>
      </div>
      <textarea
        placeholder="Choose a Device to Monitor ..."
        className="flex outline-none h-fit p-3 shadow-inner rounded-lg shadow-black"
        value={interfaceInfo}
      />
      <textPath />
      <div className="flex justify-center">
        <button
          className="bg-blue-700 text-white p-2 rounded-full w-[10%] shadow-black shadow-lg items-center justify-center"
          onClick={fetchData2}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Interface_Info_Monitoring;
