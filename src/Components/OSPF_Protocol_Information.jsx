import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineFileProtect } from "react-icons/ai";

const OSPF_Protocol_Information = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold w-full animate-pulse text-2xl text-shadow-lg ">
            Protocol OSPF Information
          </div>
          <div className="flex items-center w-full justify-end gap-3 ">
            <button
              onClick={() => navigate("/main/protocols")}
              className="bg-blue-300 rounded-xl gap-1  shadow-black shadow-md font-bold   p-2 items-center flex "
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
          <p>
            Open Shortest Path First (OSPF) is a dynamic routing protocol used
            in computer networks to determine the best paths for data packets to
            travel from one router to another. It is commonly used in larger and
            more complex networks, as it is able to scale to support thousands
            of routers and routes.
          </p>
          <p>
            Here are some key features of OSPF:
            <p>
              1- Link-State Protocol: OSPF is a link-state routing protocol that
              operates by exchanging link-state advertisements (LSAs) between
              routers. Each router maintains a database of all the links in the
              network and uses the information to calculate the shortest path to
              each destination.
            </p>
            <p>
              2- Hierarchical Design: OSPF networks are typically divided into
              areas, with routers within an area sharing routing information.
              This hierarchical design helps to reduce network traffic and
              improve efficiency.
            </p>
            <p>
              3- Dynamic Routing: OSPF routers dynamically exchange routing
              information and adapt to network changes by recalculating routes
              based on updated link-state information. This allows OSPF to
              quickly converge and adapt to network topology changes.
            </p>
            <p>
              4- Cost-based Metric: OSPF uses a cost-based metric to determine
              the best path to reach a destination. The cost is assigned to each
              link based on factors such as bandwidth, delay, and reliability.
              OSPF routers calculate the route with the lowest cumulative cost
              to reach a destination.
            </p>
            <p>
              5- Fast Convergence: OSPF is known for its fast convergence time,
              meaning it can quickly adapt to network changes and reroute
              traffic along the most efficient paths.
            </p>
            <p>
              6- Scalability: OSPF is well-suited for large and complex networks
              due to its hierarchical design and efficient routing algorithm. It
              can support networks with thousands of routers and routes while
              maintaining stable and efficient routing
            </p>
          </p>
          <p>
            Overall, OSPF is a widely-used routing protocol in enterprise
            networks and service provider networks where scalability,
            efficiency, and fast convergence are important considerations. It
            provides a robust and reliable mechanism for routing packets in
            complex network environments.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OSPF_Protocol_Information;
