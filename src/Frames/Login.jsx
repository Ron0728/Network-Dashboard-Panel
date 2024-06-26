import React, { useState } from "react";
import "/src/Css/Button.css";
import { useNavigate } from "react-router-dom";
// import api from "/Api/api";
// import { setToken } from "/Api/token";
// import { setUser } from "/Api/user";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [netowrkNumber, setNetowrkNumber] = useState("");

  const sendLoginData = async () => {
    if (!username || !password || !netowrkNumber) {
      alert("Please enter credentials");
      return;
    }
    if (
      username == "admin" &&
      password == "admin" &&
      netowrkNumber == "admin"
    ) {
      navigate("/main/board");
    } else {
      navigate("/Toodelete5");
    }
    // let res = await api.post("/login", {
    //   username: username,
    //   password: password,
    //   netowrkNumber: netowrkNumber,
    // });
    // setToken(res.data.accessToken);
    // setUser(res.data.user);
  };

  return (
    <div className="flex flex-col  bg-blue-950 items-center justify-center h-screen bg-cover">
      <div className=" flex flex-col backdrop-blur-[10px]  w-80 justify-center align-center p-5 rounded-3xl">
        <div className=" flex flex-col gap-4">
          <div className=" flex flex-col justify-center gap-14">
            <div className=" flex flex-col justify-center items-center">
              <h2 className=" text-2xl animate-bounce text-white font-bold text-center">
                Login
              </h2>
              <div className="flex border-b-2 w-24 animate-pulse"></div>
            </div>

            <div className="flex-col flex">
              <input
                type="text"
                placeholder="Network Number"
                className="bg-transparent border-b-2 text-white outline-none "
                onChange={(e) => setNetowrkNumber(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className=" bg-transparent border-b-2 text-white  outline-none "
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              className=" bg-transparent border-b-2 text-white  outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" flex flex-col text-center mt-4 gap-5">
            <span className="italic text-white flex justify-between">
              <div>
                Remeber me <input type="checkbox" className="cursor-pointer" />
              </div>

              <a href="#">Forget Password?</a>
            </span>
            <button1
              className=" mb-2 bg-cyan-600 cursor-pointer hover:bg-cyan-800 p-2 rounded-lg text-white "
              value="Login"
              onClick={() => sendLoginData()}
            >
              Login
            </button1>
            <p className=" ">
              <span
                className=" font-semibold cursor-pointer text-white hover:text-cyan-500 "
                onClick={() => navigate("/signup")}
              >
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
