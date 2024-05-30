import React, { useEffect, useState } from "react";

const Check_Configurations = () => {
  const [selectedDevice_Check, setSelectedDevice_Check] = useState("");
  const [device, setDevice] = useState([]);
  const [checkingSuccessfullMSG, setCheckingSuccessfullMSG] = useState();
  const [checkingErrorMSG, setCheckingErrorMSG] = useState();
  const [checkingSuggestionMSG, setCheckingSuggestionMSG] = useState();
  const [iP_Check, setIP_Check] = useState();

  const handlerDevice_Check = (event3) => {
    const selectedDevice_Check = event3.target.value;
    setSelectedDevice_Check(selectedDevice_Check);
    const selectedDeviceIP_check_Config = device.find(
      (device) => device.name === selectedDevice_Check
    ).ip;
    setIP_Check(selectedDeviceIP_check_Config);
    console.log(
      `Selected device : ${selectedDevice_Check} with the ip of : ${selectedDeviceIP_check_Config} for checking`
    );
  };

  const fetchDevices = async () => {
    await fetch("http://localhost:3000/info/routers")
      .then((res) => res.json())
      .then((data) => {
        setDevice(data);
        console.log(data);
      }, []);
  };

  const StartChecking = async () => {
    await fetch("http://localhost:3000/dashboard/troubleshooting/checkconfig")
      .then((res) => res.json())
      .then((data) => {
        Send_IP_ToCheck_ToServer();
        {
          data.error ? (
            setCheckingErrorMSG(
              <div
                className="flex shadow-inner shadow-black bg-gradient-to-r
                   from-[rgb(255,0,0)] to-gray-400 text-white p-2 rounded-full"
              >
                {data.error}
              </div>
            )
          ) : (
            <></>
          );
        }
        {
          data.success ? (
            setCheckingSuccessfullMSG(
              <div
                className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r
                  from-[rgb(0,255,0)] to-gray-400  text-white p-2 rounded-full"
              >
                {data.success}
              </div>
            )
          ) : (
            <></>
          );
        }
        {
          data.suggestion ? (
            setCheckingSuggestionMSG(
              <div
                className="bg-gray-600 shadow-inner shadow-black bg-gradient-to-r
                  from-[rgb(213,110,37)] to-[rgb(255,167,26)]  text-white p-2 rounded-full"
              >
                {data.suggestion}
              </div>
            )
          ) : (
            <></>
          );
        }
      });
  };

  const Send_IP_ToCheck_ToServer = async () => {
    const response = await fetch(
      `http://localhost:3000/dashboard/basicInfo?selectedDeviceIP_check_Config=${iP_Check}`
    );
    const data = await response.json();
    console.log("data sent");
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="flex flex-col bg-gray-300 w-full h-full gap-3 rounded-2xl p-5 shadow-lg shadow-black ">
      <div className="font-bold text-xl">Check Configurations:</div>
      <div className="flex gap-5">
        <div className="flex items-center w-full h-full gap-3 ">
          <div className="flex w-full items-center">
            <div className="text-blue-700 text-lg font-bold">
              Choose wanted device{" "}
              <span className="text-sm text-gray-600">
                results as messages & advices
              </span>
            </div>
          </div>
          <div className="flex justify-around items-center h-[70%] bg-blue-900 w-[30%] shadow-lg shadow-black rounded-full ">
            <div className="flex items-center justify-center">
              <select
                className="bg-transparent text-white outline-none "
                value={selectedDevice_Check}
                onChange={handlerDevice_Check}
              >
                <option>Choose</option>
                {device.map((D) => (
                  <option className="text-black " key={D.id} value={D.name}>
                    {D.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full ">
          <button
            onClick={StartChecking}
            className="startchecking flex bg-blue-950 p-5 h-[70%] items-center justify-center text-white font-bold rounded-full shadow-lg shadow-black"
          >
            Start checking
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-3 bg-gray-400 rounded-3xl shadow-inner shadow-black">
        {checkingSuccessfullMSG || checkingErrorMSG || checkingSuggestionMSG ? (
          <div className="flex flex-col gap-2">
            <p>{checkingSuccessfullMSG}</p>
            <p>{checkingErrorMSG}</p>

            <p>{checkingSuggestionMSG}</p>
          </div>
        ) : (
          <p className=" flex justify-center font-bold animate-pulse text-gray-700">
            Waiting for any Check
          </p>
        )}
      </div>
    </div>
  );
};

export default Check_Configurations;
