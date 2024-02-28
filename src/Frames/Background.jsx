import React, { useState, useReducer, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

const Background = (props) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <video
        loop
        muted
        autoPlay="autoplay"
        class="Background-clip"
        className="absolute w-screen h-screen"
      >
        <source src="MainBackGround.mp4" type="video/mp4"></source>
      </video>
      <Outlet />
    </div>
  );
};

export default Background;
