import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddNewDevice = ({ N }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [ip, setIP] = useState();
  const [type, setType] = useState();
  const [hostname, setHostname] = useState();

  const AddNew = async () => {
    await fetch(
      `http://localhost:3000/dashboard/devices/post?hostname=${hostname}&&type=${type}&&username=${username}&&password=${password}&&ip=${ip}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        discard();
      }, []);
  };

  // const twofunc = () => {
  //   AddNew();

  // };

  const discard = () => {
    setUsername("");
    setPassword("");
    setIP("");
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event1) => {
    setPassword(event1.target.value);
  };
  const handleChangeIP = (event2) => {
    setIP(event2.target.value);
  };

  // handleSelectChange = (e) => {
  //   const newValue = e.target.value;
  //   if (newValue !== this.state.selectedValue) {
  //     console.log(newValue);
  //     this.setState({ selectedValue: newValue });
  //   }
  // };

  useEffect(() => {
    AddNew();
  }, []);

  return (
    <div className="flex flex-col gap-3 ">
      <div className="gap-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="font-bold">Type</div>
            <div className="flex justify-around items-center bg-blue-900 h-[50%] shadow-lg shadow-black rounded-full ">
              <div className="flex items-center justify-center">
                <select
                  onChange={(e) => setType(e.target.value)}
                  className="bg-transparent text-white p-2  outline-none "
                >
                  <option className="text-black">Choose</option>
                  <option className="text-black" value={"Router"}>
                    Router
                  </option>
                  <option className="text-black" value={"Switch"}>
                    Switch
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <div className="font-bold">Username :</div>
            <input
              value={username}
              onChange={handleChangeUsername}
              className="shadow-inner shadow-black rounded-full p-1 bg-gray-400 outline-none "
            />
          </div>
          <div className="flex gap-5 items-center">
            <div className="font-bold">Password :</div>
            <input
              value={password}
              onChange={handleChangePassword}
              className="shadow-inner shadow-black rounded-full p-1 bg-gray-400 outline-none "
            />
          </div>
          <div className="flex gap-5 items-center">
            <div className="font-bold">IP :</div>
            <input
              value={ip}
              onChange={handleChangeIP}
              className="shadow-inner shadow-black rounded-full p-1 bg-gray-400 outline-none "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center  ">
        <button
          onClick={AddNew}
          className="bg-blue-700 p-2 rounded-full shadow-black shadow-md text-white"
        >
          Save & Add Another
        </button>
      </div>
    </div>
  );
};

export default AddNewDevice;
