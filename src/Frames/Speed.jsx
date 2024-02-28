// import React from "react";
// import { CircularGaugeComponent } from "@syncfusion/ej2-react-circulargauge";

// const SpeedGauge = () => {
//   const gaugeData = [
//     { value: 80, color: "#30B32D" },
//     { value: 20, color: "#FFDD00" },
//     { value: 0, color: "#F03E3E" },
//   ];

//   return (
//     <CircularGaugeComponent
//       id="speedGauge"
//       title="Speed"
//       centerY="50%"
//       load={loadGauge}
//       axes={[
//         {
//           ranges: [
//             { start: 0, end: 40, color: "#30B32D" },
//             { start: 40, end: 80, color: "#FFDD00" },
//             { start: 80, end: 100, color: "#F03E3E" },
//           ],
//           pointers: [
//             {
//               value: gaugeData[0].value,
//               radius: "80%",
//               color: gaugeData[0].color,
//               pointerWidth: 8,
//               animation: { enable: true },
//             },
//           ],
//           majorTicks: { width: 0 },
//           minorTicks: { width: 0 },
//           startAngle: 220,
//           endAngle: 140,
//           minimum: 0,
//           maximum: 100,
//           radius: "80%",
//           labelStyle: { font: { size: "0px" } },
//         },
//       ]}
//     />
//   );
// };

// const loadGauge = (args) => {
//   const gauge = args.gauge;
//   const pointer = gauge.axes[0].pointers[0];
//   pointer.value = gaugeData[0].value;
//   pointer.color = gaugeData[0].color;
//   gauge.setPointerValue(0, 0, pointer.value);
// };

// export default SpeedGauge;
