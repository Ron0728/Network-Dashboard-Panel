import React, { useEffect, useState } from "react";
import Devices from "./Devices";
import AddNewDevice from "./AddNewDevice";

// import { RiFunctionAddFill } from "react-icons/ri";

const ExistingDevives = () => {
  const [devs, setDevs] = useState([]);
  const [name, setName] = useState([]);
  const [info, setInfo] = useState([]);
  const [pics, setPics] = useState([]);
  const [ids, setIDs] = useState([]);
  const [ips, setIPs] = useState([]);
  const [torF, setTorF] = useState(false);

  const fetchDev = async () => {
    await fetch("http://localhost:3000/dashboard/devices/get")
      .then((res) => res.json())
      .then((data) => {
        setDevs(data);
        setName(data.map((item) => item.hostname));
        setPics(data.map((item) => item.pic));
        setInfo(data.map((item) => item.type));
        setIDs(data.map((item) => item._id));
        setIPs(data.map((item) => item.ip));
        console.log("Ex Dev", data);
        console.log("Ex Dev", pics);
      }, []);
  };

  // useEffect(() => {
  //   fetchDev();
  // }, []);

  return (
    <div className="flex flex-col cursor-pointer bg-gray-300 rounded-2xl gap-3 p-5 w-full h-fit shadow-lg shadow-black ">
      <div className="font-bold text-xl">
        Existing Devices on GNS3 Port 3080
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex w-full items-center">
          <div className="flex w-full  gap-3">
            {ids.map((ids) => (
              <Devices PIC={pics} N={name} I={info} ID={ids} IP={ips} />
            ))}
          </div>
          <div
            onClick={() => setTorF(!torF)}
            className="flex font-bold shadow-black shadow-md bg-blue-600 p-3 rounded-full justify-center items-center"
          >
            {torF ? "Close" : "Add"}
          </div>
        </div>

        {torF ? <AddNewDevice NAME={name} /> : <></>}
      </div>
    </div>
  );
};

export default ExistingDevives;
