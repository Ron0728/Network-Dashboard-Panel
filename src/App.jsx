import { Route, Router, Routes } from "react-router-dom";
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
import TrubleShooting from "./Frames/TrubleShooting";
import Dhcp from "./Frames/Dhcp";
import CheckConfigurations from "./Frames/CheckConfigurations";
import Interfaces from "./Frames/Interfaces";
import TroubleShooting from "./Frames/TroubleShooting";

import {
  AlertContextGood,
  AlertContextDanger,
  AlertContextWarrning,
  AlertContextSuggested,
} from "./alertsContext";
import { useState } from "react";
import BoardInfo from "./Components/BoardInfo";

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
                <Route path="/" element={<Toodelete4 />}></Route>
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

                  <Route path="rip" element={<TrubleShooting />}></Route>
                  <Route path="dhcp" element={<Dhcp />}></Route>
                  <Route path="ospf" element={<CheckConfigurations />}></Route>
                  <Route path="egrip" element={<Interfaces />}></Route>
                </Route>

                <Route path="/main" element={<DashBoard />}>
                  <Route path="board" element={<Board />}>
                    <Route path="boardinfo" element={<BoardInfo />}></Route>
                  </Route>
                  <Route path="hardware" element={<Hardware />}></Route>
                  <Route
                    path="troubleShooting"
                    element={<TroubleShooting />}
                  ></Route>
                  <Route path="protocols" element={<Protocols />}></Route>
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
