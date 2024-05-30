import React from "react";
import ExistingDevives from "../Components/ExistingDevives";
import Protocol_DHCP from "../Components/Protocol_DHCP";
import Protocol_RIP from "../Components/Protocol_RIP";
import Protocol_EGRIP from "../Components/Protocol_EGRIP";
import Protocol_OSPF from "../Components/Protocol_OSPF";
import Check_Protocol_Interfaces from "../Components/Check_Protocol_Interfaces";

const Protocols = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <ExistingDevives />

      {/* Check Interfaces: */}
      <Check_Protocol_Interfaces />

      {/* DHCP  Configuration*/}
      <Protocol_DHCP />

      {/* RIP Configuration */}
      <Protocol_RIP />

      {/* EGRIP Configuration */}
      <Protocol_EGRIP />

      {/* OSPF Configuration */}
      <Protocol_OSPF />
    </div>
  );
};

export default Protocols;
