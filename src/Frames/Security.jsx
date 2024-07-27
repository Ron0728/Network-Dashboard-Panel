import React from "react";
import "/src/Css/applybutton.css";
import "/src/Css/discardbutton.css";
import "/src/Css/startcheckingbutton.css";
import "/src/Css/applyACL.css";
import ExistingDevives from "../Components/ExistingDevives";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accessability from "../Components/Accessability";
import Security_Audit from "../Components/Security_Audit";
import Security_Charts from "../Components/Security_Charts";
import Accessability2 from "../Components/Accessability2";

const Security = () => {
  return (
    <div className="flex flex-col w-full h-full gap-5 bg-gray-400 p-5 overflow-y-scroll">
      <div className=" flex flex-col p-20 bg-[url('../public/Ad_Security.png')] bg-no-repeat w-full rounded-full gap-3 shadow-lg shadow-black"></div>

      <ExistingDevives />

      {/* Accessability */}
      <Accessability />
      <Accessability2 />

      {/* Security Audit */}
      {/* <Security_Audit /> */}

      {/* Charts */}
      {/* <Security_Charts /> */}
    </div>
  );
};

export default Security;
