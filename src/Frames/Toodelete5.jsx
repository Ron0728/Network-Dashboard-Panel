import React, { useState, useEffect } from "react";
import SpeedChart from "../Charts/SpeedChart";
import LevelPieChart from "../Charts/LevelPieChart";

function App() {
  const [percentNumber, setPercentNumber] = useState(0);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/data8")
      .then((response) => response.json())
      .then((data) => {
        // Update the percentNumberage
        setPercentNumber(data.percentNumber);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full h-screen">
      <LevelPieChart percentage={percentNumber} />
      <div className="pie-chart">
        <div className="bar" style={{ width: `${percentNumber}%` }}></div>
      </div>
      <p>{percentNumber}%</p>
    </div>
  );
}

export default App;
