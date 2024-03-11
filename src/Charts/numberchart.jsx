import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 350 },
  { name: "Group F", value: 500 },
];

const numberchart = () => {
  return (
    <ResponsiveContainer>
      <PieChart width={100} height={100}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="120"
          cy="100"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default numberchart;
