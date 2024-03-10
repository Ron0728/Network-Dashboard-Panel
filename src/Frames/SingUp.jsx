import React from "react";
import { useNavigate } from "react-router-dom";
import "/src/Css/Button.css";

const SingUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5  bg-blue-950 items-center justify-center h-screen bg-cover">
      <div className=" flex flex-col shadow-2xl backdrop-blur-[10px] shadow-i w-80 justify-center align-center p-5 rounded-3xl">
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col justify-center gap-12">
            <div className=" flex flex-col justify-center items-center">
              <h2 className=" text-2xl animate-bounce text-white font-bold text-center">
                SignUp
              </h2>
              <div className="flex border-b-2 w-24 animate-pulse"></div>
            </div>
            <input
              type="text"
              placeholder="FirstName"
              className=" bg-transparent border-b-2 outline-none text-white outline-nonee "
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="LastName"
              className=" bg-transparent border-b-2  text-white outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className=" bg-transparent border-b-2  text-white outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              className=" bg-transparent border-b-2 text-white outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your Password"
              className=" bg-transparent border-b-2 text-white outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-center gap-4">
            <button1
              className="bg-cyan-800 cursor-pointer hover:bg-cyan-600 p-2 rounded-lg text-white border-2 border-cyan-700"
              onClick={() => navigate("/main/board")}
            >
              SignUp
            </button1>
            <p className=" ">
              <button
                className=" font-semibold text-white hover:text-cyan-500 "
                onClick={() => navigate("/login")}
              >
                Already have an Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
