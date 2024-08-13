import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const EGRIP_Protocol_Information = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold w-full animate-pulse text-2xl text-shadow-lg ">
            Protocol EGRIP Information
          </div>
          <div className="flex items-center w-full justify-end gap-3 ">
            <button
              onClick={() => navigate("/main/protocols")}
              className="bg-blue-300 rounded-xl gap-1 shadow-black shadow-md font-bold  p-2 items-center flex "
            >
              <AiOutlineFileProtect size={20} /> <p>To Protocols</p>
            </button>
            <button
              onClick={() => navigate("/main/board")}
              className="bg-white rounded-xl shadow-black shadow-md font-bold  p-2 items-center flex"
            >
              Home
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-3 text-lg overflow-y-scroll">
          {" "}
          <div>
            EGRIP, which stands for "Edge Gateway Remote Inference Protocol," is
            a communication protocol primarily used in the context of edge
            computing and IoT (Internet of Things) applications. The protocol is
            designed to facilitate efficient data processing and communication
            between edge devices and cloud or centralized systems.
          </div>
          <p>Here are some key features and aspects of EGRIP:</p>
          <p>
            1- Edge Computing: EGRIP aims to enable processing data closer to
            the source (i.e., the edge devices) rather than relying solely on
            remote cloud servers. This reduces latency, decreases bandwidth
            usage, and enables real-time processing of data.
          </p>
          <p>
            2- Remote Inference: EGRIP supports remote inference for machine
            learning models, allowing edge devices to perform tasks such as
            object recognition, anomaly detection, and other AI-driven processes
            using models hosted on more powerful cloud infrastructure.
          </p>
          <p>
            3- Protocol Design: The protocol is designed to be lightweight,
            supporting efficient data serialization and communication. This is
            crucial in resource-constrained environments like IoT devices, where
            processing power and memory may be limited.
          </p>
          <p>
            4- Interoperability: EGRIP typically emphasizes compatibility with
            various IoT standards and protocols, thereby enhancing its usability
            across different device ecosystems.
          </p>
          <p>
            5- Security: Security features are an integral part of EGRIP,
            addressing the concerns of data privacy and integrity. Encryption
            and authentication mechanisms are commonly implemented to protect
            the data exchanged between edge devices and the central system.
          </p>
          <p>
            6- Use Cases: EGRIP can be employed in various applications,
            including smart cities, industrial automation, healthcare
            monitoring, and any scenario where real-time data processing is
            critical.
          </p>
          <p>
            7- Deployment Models: EGRIP can support different deployment
            scenarios, from purely edge-based processing to hybrid models where
            edge and cloud resources work collaboratively.
          </p>
          <p>
            8- Scalability: The protocol is designed to scale as the number of
            connected devices grows, maintaining performance and efficiency even
            as more data flows through the system.
          </p>
          <p>
            It's important to stay updated with current developments regarding
            EGRIP or similar protocols, as they evolve rapidly with advancements
            in technology and emerging standards in edge computing and IoT.
          </p>
        </div>
      </div>
    </div>
  );
};
export default EGRIP_Protocol_Information;
