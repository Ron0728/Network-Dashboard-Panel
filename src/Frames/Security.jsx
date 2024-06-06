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

const Security = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3 bg-gray-400 p-5 overflow-y-scroll">
      <div className="bg-gradient-to-r text-gray-800 from-blue-700 to-white p-5 rounded-full font-bold shadow-md shadow-black">
        Text
      </div>

      <ExistingDevives />

      {/* Accessability */}
      <Accessability />

      {/* Security Audit */}
      <Security_Audit />

      {/* Charts */}
      <Security_Charts />
    </div>
  );
};

export default Security;
