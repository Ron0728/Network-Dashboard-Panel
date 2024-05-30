import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RIP_Protocol_Information = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold w-full animate-pulse text-2xl text-shadow-lg ">
            Protocol RIP Information
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
              className="bg-white rounded-xl shadow-black shadow-md font-bold p-2 items-center flex"
            >
              Home
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-3 text-lg overflow-y-scroll">
          <p>
            The Routing Information Protocol RIP is one of the oldest
            distance-vector routing protocols used in computer networks. It was
            originally designed for small and simple networks, but has been
            largely replaced by more robust protocols such as OSPF and EIGRP.
            RIP operates on the network layer of the OSI model and is used to
            determine the best path for data packets to reach their destination.
          </p>
          <p>
            RIP works by exchanging routing information between routers in a
            network. Each router maintains a routing table that contains
            information about the network topology and the best path to reach a
            particular destination. RIP routers broadcast their entire routing
            table to their neighboring routers periodically, allowing them to
            update their own tables accordingly.
          </p>
          <p>
            One of the key features of RIP is its use of hop count as the metric
            for determining the best path. A hop count refers to the number of
            routers a packet must pass through to reach its destination. RIP
            routers choose the path with the lowest hop count, regardless of
            other factors such as bandwidth or reliability
          </p>
          <p>
            RIP has a maximum hop count limit of 15, which means it can only
            support networks with up to 15 routers. This limitation makes RIP
            unsuitable for large or complex networks, as it can lead to routing
            loops and inefficient routing decisions.
          </p>
          <p>
            Despite its limitations, RIP is still used in some smaller networks
            or as a backup routing protocol. It is easy to configure and
            implement, making it a good choice for simple network setups.
            However, for larger and more complex networks, administrators
            typically opt for more advanced routing protocols that provide
            greater flexibility and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RIP_Protocol_Information;
