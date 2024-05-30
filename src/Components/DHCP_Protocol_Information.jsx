import React from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const DHCP_Protocol_Information = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-centers bg-gray-400 p-5 w-full h-full ">
      <div className="flex flex-col gap-3 bg-gray-300 w-full h-full rounded-2xl p-5 shadow-lg shadow-black ">
        <div className="flex justify-between p-2 items-center gap-3">
          <div className="font-bold w-full animate-pulse text-2xl text-shadow-lg ">
            Protocol DHCP Information
          </div>
          <div className="flex items-center w-full justify-end gap-3 ">
            <button
              onClick={() => navigate("/main/troubleShooting")}
              className="bg-blue-400 rounded-xl gap-1 shadow-black shadow-md font-bold  p-2 items-center flex "
            >
              <FaTools size={15} /> <p>To TroubleShooting</p>
            </button>
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
          <p>
            The Dynamic Host Configuration Protocol (DHCP) is a network protocol
            used to automatically assign IP addresses and other network
            configuration parameters to devices on a network. DHCP simplifies
            the process of network administration by dynamically assigning IP
            addresses to devices, rather than requiring manual configuration of
            each device.
          </p>
          <p>
            When a device connects to a network that uses DHCP, it sends a
            request to a DHCP server for an IP address. The DHCP server then
            assigns a unique IP address to the device from a pool of available
            addresses. The server also provides additional configuration
            information, such as the subnet mask, default gateway, and DNS
            server addresses.
          </p>
          <p>
            DHCP operates using a client-server model, with the DHCP server
            responsible for managing and assigning IP addresses, and the DHCP
            client requesting and accepting the assigned address. DHCP servers
            can be standalone devices or integrated into routers and network
            equipment.
          </p>
          <p>
            Some key features of DHCP include:
            <p>
              1- IP Address Management: DHCP simplifies the management of IP
              addresses on a network by automatically assigning and renewing
              addresses for devices.
            </p>
            <p>
              2- Address Pooling: DHCP servers maintain a pool of available IP
              addresses that can be dynamically assigned to devices as needed.
            </p>
            <p>
              3- Lease Time: DHCP allows administrators to set a lease time for
              assigned IP addresses, after which the addresses are returned to
              the pool for reuse.
            </p>
            <p>
              4- Centralized Configuration: DHCP provides a centralized
              mechanism for configuring network parameters, making it easier to
              manage network settings and updates.
            </p>
          </p>
          <p>
            Overall, DHCP is a crucial component of modern network
            infrastructure, as it simplifies network configuration and
            management, reduces the likelihood of IP address conflicts, and
            enables efficient use of network resources. It is widely used in
            both small home networks and large corporate environments to
            streamline the process of connecting devices to the network.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DHCP_Protocol_Information;
