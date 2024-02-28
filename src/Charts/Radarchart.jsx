import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "A",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "B",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "C",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "D",
    A: 130,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "E",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "F",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Radarchart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="AA"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={1}
        />
        <Radar
          name="BB"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.7}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Radarchart;
