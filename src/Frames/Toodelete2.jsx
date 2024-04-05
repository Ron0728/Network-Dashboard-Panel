import React from "react";

const Toodelete2 = ({ IPx, usernamex, passwordx }) => {
  return (
    <div className=" w-1/2 bg-gray-200 p-3 shadow-inner shadow-black rounded-md">
      <div>
        The IP is : <span className="font-bold">{IPx}</span>{" "}
      </div>
      <div>
        The Username is : <span className="font-bold">{usernamex}</span>{" "}
      </div>
      <div>
        The Password is : <span className="font-bold">{passwordx}</span>{" "}
      </div>
    </div>
  );
};

export default Toodelete2;
