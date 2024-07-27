// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import WAlertMSG from "./WAlertMSG";
// import DAlertMSG from "./DAlertMSG";
// import GAlertMSG from "./GAlertMSG";
// import SAlertMSG from "./SAlertMSG";
// import {
//   AlertContextGood,
//   AlertContextDanger,
//   AlertContextSuggested,
//   AlertContextWarrning,
// } from "../alertsContext";
// import axios from "axios";

// const Protocol_DHCP = () => {
//   const [selectedDevice, setSelectedDevice] = useState("");
//   const [device, setDevice] = useState([]);
//   const [selectedInterfaces, setSelectedInterfaces] = useState("");
//   const [networkDHCPData, setNetworkDHCPData] = useState("");
//   const [interfaces, setInterfaces] = useState([]);
//   const [subnetDHCPData, setSubnetDHCPData] = useState("");
//   const [iP, setIP] = useState();
//   const navigate = useNavigate();

//   const [alertGoodMessages, setAlertGoodMessages] =
//     useContext(AlertContextGood);
//   const [alertWarningMessages, setAlertWarningMessages] =
//     useContext(AlertContextWarrning);
//   const [alertSuggestedMessages, setAlertSuggestedMessages] = useContext(
//     AlertContextSuggested
//   );
//   const [alertDangerMessages, setAlertDangerMessages] =
//     useContext(AlertContextDanger);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3000/data55555", {
//         subnetDHCPData: subnetDHCPData,
//         networkDHCPData: networkDHCPData,
//       });
//       console.log(response.data);
//       call_ALerts(`update with ${subnetDHCPData} subnet`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handlerDeviceChange = (event) => {
//     const selectedDevice = event.target.value;
//     setSelectedDevice(selectedDevice);
//     const selectedDeviceIP = device.find(
//       (device) => device.name === selectedDevice
//     ).ip;
//     setIP(selectedDeviceIP);
//     console.log(
//       `Selected device: ${selectedDevice}, Selected IP: ${selectedDeviceIP}`
//     );
//   };

//   const handleChange2_for_DHCP = (e) => {
//     setNetworkDHCPData(e.target.value);
//   };

//   const handleChange_for_DHCP = (event) => {
//     setSubnetDHCPData(event.target.value);
//   };

//   const fetchDevices = async () => {
//     await fetch("http://localhost:3000/info/routers")
//       .then((res) => res.json())
//       .then((data) => {
//         setDevice(data);
//         console.log(data);
//       }, []);
//   };

//   const handleInterfaceChange = (event) => {
//     const selectedInterfaces = event.target.value;
//     setSelectedInterfaces(selectedInterfaces);
//   };

//   const fetchDHCPdata = async () => {
//     await fetch("http://localhost:3000/dashboard/protocols/dhcp ")
//       .then((res) => res.json())
//       .then((data) => {
//         {
//           data.messageDhcpW ? (
//             (setAlertWarningMessages([
//               ...alertWarningMessages,
//               <WAlertMSG alertWarningMessages={data.messageDhcpW} />,
//             ]),
//             call_ALerts("Warning from DHCP"))
//           ) : (
//             <></>
//           );
//         }
//         {
//           data.messageDhcpD ? (
//             (setAlertDangerMessages([
//               ...alertDangerMessages,
//               <DAlertMSG alertDangerMessages={data.messageDhcpD} />,
//             ]),
//             call_ALerts("Danger from DHCP"))
//           ) : (
//             <></>
//           );
//         }
//         {
//           data.message ? (
//             (setAlertGoodMessages([
//               ...alertGoodMessages,
//               <GAlertMSG alertGoodMessages={data.message} />,
//             ]),
//             call_ALerts("DHCP configured successfully"))
//           ) : (
//             <></>
//           );
//         }
//         {
//           data.messageDhcpS ? (
//             (setAlertSuggestedMessages([
//               ...alertSuggestedMessages,
//               <SAlertMSG alertSuggestedMessages={data.messageDhcpS} />,
//             ]),
//             call_ALerts("DHCP suggested message"))
//           ) : (
//             <></>
//           );
//         }
//       });
//   };

//   function call_ALerts(msg) {
//     alert(msg);
//   }

//   useEffect(() => {
//     fetchDevices();
//   }, []);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-3 bg-gray-300 rounded-2xl w-full h-full p-5 shadow-lg shadow-black "
//     >
//       <div className="font-bold text-2xl">DHCP Configuration:</div>
//       <div className="flex justify-between">
//         <div className="flex flex-col gap-5">
//           <div className="flex gap-7">
//             <div>
//               <div className="text-blue-700 w-full font-bold">
//                 Choose wanted device
//               </div>
//               <div className="flex justify-center font-bold text-gray-600">
//                 to apply DHCP to it
//               </div>
//             </div>
//             <div className="flex justify-around items-center p-2 bg-blue-900 w-[25%] shadow-lg text-white shadow-black rounded-full ">
//               <div className="flex items-center justify-center">
//                 <select
//                   className="bg-transparent outline-none "
//                   value={selectedDevice}
//                   onChange={handlerDeviceChange}
//                 >
//                   {device.map((D) => (
//                     <option className="text-black " key={D.id} value={D.name}>
//                       {D.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-3 items-center">
//             <div>
//               <div className="flex justify-center text-gray-600 font-bold">
//                 insert network
//               </div>
//               <div className="text-gray-600 font-bold">Applying Network</div>
//             </div>
//             <input
//               value={networkDHCPData}
//               onChange={handleChange2_for_DHCP}
//               className="bg-gray-400 outline-none p-1 shadow-black shadow-inner rounded-full"
//             ></input>
//           </div>
//         </div>
//         <div className="flex flex-col gap-5">
//           <div className="flex items-center h-full gap-7">
//             <div className="text-blue-700 text-xl w-[40%] flex justify-end font-bold">
//               Choose
//             </div>

//             <div className="flex justify-around items-center  bg-blue-900 w-[40%] h-[80%] shadow-lg shadow-black rounded-full ">
//               <div className="flex items-center justify-center">
//                 <select
//                   className="bg-transparent text-white p-2  outline-none "
//                   value={selectedInterfaces}
//                   onChange={handleInterfaceChange}
//                 >
//                   <option className="text-black" value="">
//                     {" "}
//                     Interfaces
//                   </option>
//                   {interfaces.map((inter) => (
//                     <option
//                       className="text-black"
//                       key={inter.id}
//                       value={inter.id}
//                     >
//                       {inter.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-3 items-center">
//             <div className="text-gray-600 font-bold">Insert subnet</div>
//             <input
//               value={subnetDHCPData}
//               onChange={handleChange_for_DHCP}
//               className="bg-gray-400 p-1 outline-none shadow-black shadow-inner rounded-full"
//             ></input>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between gap-5">
//         <div className="flex gap-5">
//           <button
//             onClick={fetchDHCPdata}
//             type="submit"
//             className="apply shadow-md shadow-black bg-black text-white p-3 w-[20%] rounded-full"
//           >
//             Apply
//           </button>
//           <button className="discard bg-warmGray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
//             Discard
//           </button>
//           <button className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full">
//             Disable
//           </button>
//         </div>
//         <div>
//           <button
//             onClick={() => {
//               navigate("/setting/dhcp");
//             }}
//             className="dhcp bg-gray-600 shadow-md shadow-black text-white p-3 w-[20%] rounded-full"
//           >
//             DHCP info
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Protocol_DHCP;
