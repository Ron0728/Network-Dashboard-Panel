import React, { useState, useContext, useEffect } from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/dhcpinfobutton.css";
import "/src/Css/ping2.css";
import "/src/Css/startcheckingbutton.css";
import ExistingDevives from "../Components/ExistingDevives";
import DHCP_Configuration from "../Components/DHCP_Configuration";
import Check_Connectivity from "../Components/Check_Connectivity";
import Check_Configurations from "../Components/Check_Configurations";
import Check_Protocol_Interfaces from "../Components/Check_Protocol_Interfaces";
// import Check_Interface from "../Components/Check_Interface"

const TroubleShooting = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full bg-gray-400 w-full h-full p-5 gap-3">
      <ExistingDevives />

      <Check_Connectivity />

      <Check_Configurations />

      <Check_Protocol_Interfaces />
      {/* <Check_Interface /> */}

      <DHCP_Configuration />
    </div>
  );
};

export default TroubleShooting;
