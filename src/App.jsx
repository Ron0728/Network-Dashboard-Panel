import { Route, Routes } from "react-router-dom";
import Welcome from "./Frames/Welcome";
import SingUp from "./Frames/SingUp";
import Login from "./Frames/Login";
import DashBoard from "./Frames/DashBoard";
import Protocols from "./Frames/Protocols";
import Security from "./Frames/Security";
import Hardware from "./Frames/Hardware";
import Alerts from "./Frames/Alerts";
import Board from "./Components/Board";
import Help from "./Frames/Help";
import Settings from "./Frames/Settings";
import SettingBoxes from "./Frames/SettingBoxes";
import Background from "./Frames/Background";
import TroubleShooting from "./Frames/TroubleShooting";

import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextWarrning,
  AlertContextSuggested,
} from "./alertsContext";
import { useState } from "react";
import BoardInfo from "./Components/BoardInfo";
import Toodelete5 from "./Frames/Toodelete5";
import RIP_Protocol_Information from "./Components/RIP_Protocol_Information";

import DHCP_Protocol_Information from "./Components/DHCP_Protocol_Information";
import OSPF_Protocol_Information from "./Components/OSPF_Protocol_Information";
import EGRIP_Protocol_Information from "./Components/EGRIP_Protocol_Information";
import Todelete9 from "./Frames/Todelete9";
import Monitoring from "./Frames/Monitoring";
import Report from "./Frames/Report";
import Interface_Edit from "./Components/Interface_Edit";
import Manual_EGRIP from "./Components/Manual_EGRIP";
import Static_Configuration from "./Components/Static_Configuration";
import Manual_OSPF from "./Components/Manual_OSPF";
import AddNewDevice from "./Components/AddNewDevice";

function App() {
  const [goodMSG, setGoodMSG] = useState([]);
  const [dangerMSG, setDangerMSG] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [warrningMSG, setWarrningMSG] = useState([]);

  return (
    <div>
      <AlertContextGood.Provider value={[goodMSG, setGoodMSG]}>
        <AlertContextDanger.Provider value={[dangerMSG, setDangerMSG]}>
          <AlertContextWarrning.Provider value={[warrningMSG, setWarrningMSG]}>
            <AlertContextSuggested.Provider value={[suggested, setSuggested]}>
              {/* <Routes>
                <Route path="/" element={<Todelete9 />}></Route>
              </Routes> */}
              <Routes>
                <Route path="/" element={<Background />}>
                  <Route index element={<Welcome />}></Route>
                  <Route path="signup" element={<SingUp />}></Route>
                  <Route path="login" element={<Login />}></Route>
                </Route>

                <Route path="/help" element={<Help />}></Route>

                <Route path="/setting" element={<Settings />}>
                  <Route index element={<SettingBoxes />}></Route>

                  <Route
                    path="rip"
                    element={<RIP_Protocol_Information />}
                  ></Route>
                  <Route
                    path="dhcp"
                    element={<DHCP_Protocol_Information />}
                  ></Route>
                  <Route
                    path="ospf"
                    element={<OSPF_Protocol_Information />}
                  ></Route>
                  <Route
                    path="egrip"
                    element={<EGRIP_Protocol_Information />}
                  ></Route>
                </Route>

                <Route path="/main" element={<DashBoard />}>
                  <Route path="board" element={<Board />}>
                    <Route path="boardinfo" element={<BoardInfo />}></Route>
                    <Route path="addnewdevice" element={<AddNewDevice />} />
                  </Route>
                  <Route path="hardware" element={<Hardware />}></Route>
                  <Route
                    path="troubleShooting"
                    element={<TroubleShooting />}
                  ></Route>

                  <Route path="protocols" element={<Protocols />}>
                    <Route path="E-manual" element={<Manual_EGRIP />}></Route>
                    <Route
                      path="E-static"
                      element={<Static_Configuration />}
                    ></Route>
                  </Route>

                  <Route path="monitor" element={<Monitoring />}></Route>
                  <Route path="report" element={<Report />}></Route>
                  <Route path="alerts" element={<Alerts />}></Route>
                  <Route path="security" element={<Security />}></Route>
                </Route>
              </Routes>
            </AlertContextSuggested.Provider>
          </AlertContextWarrning.Provider>
        </AlertContextDanger.Provider>
      </AlertContextGood.Provider>
    </div>
  );
}

export default App;
