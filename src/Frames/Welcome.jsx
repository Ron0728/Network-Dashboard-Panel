import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center  gap-3 
       bg-blue-950 bg-cover w-screen h-screen "
    >
      <div
        className=" flex flex-col items-center justify-center gap-10 h-80 w-80
       rounded-3xl backdrop-blur-[10px] "
      >
        <div className=" flex flex-col justify-center items-center">
          <h2 className=" text-2xl animate-pulse text-white  text-center ">
            Manage Your Network
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-center gap-3 text-white italic">
            If you already have an account :{" "}
            <button1
              onClick={() => navigate("login")}
              className="flex justify-center cursor-pointer bg-cyan-800 hover:bg-cyan-600 "
            >
              Login
            </button1>
          </div>
          <div className="flex flex-col justify-center gap-3 text-white italic">
            To create an account :{" "}
            <button1
              onClick={() => navigate("signup")}
              className="flex cursor-pointer bg-cyan-800 hover:bg-cyan-600 justify-center"
            >
              Sign Up
            </button1>
          </div>
        </div>
        <div className="flex gap-5"></div>
      </div>
    </div>
  );
};

export default Welcome;
