import React, { useContext, useEffect, useState } from "react";
import { AlertContext } from "../alertsContext";

const Toodelete4 = () => {
  const [alerts, setAlerts] = useContext(AlertContext);
  return (
    <div className="flex gap-1 bg-gray-300 h-screen justify-center items-center">
      {alerts.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <span className="font-bold text-green-500">{alerts}</span>
    </div>
  );
};

export default Toodelete4;
