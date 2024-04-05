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
  AlertContext,
  AlertContextDHCP,
  AlertContextEGRIP,
  AlertContextOSPF,
} from "./alertsContext";
import { useState } from "react";
import BoardInfo from "./Components/BoardInfo";

import InterfacesLoop from "./Components/InterfacesLoop";

function App() {
  const [val, setVal] = useState([]);
  const [dhcpValue, setDhcpValue] = useState([]);
  const [ospfValue, setOspfValue] = useState([]);
  const [egripValue, setEgripValue] = useState([]);
  return (
    <div>
      <AlertContext.Provider value={[val, setVal]}>
        <AlertContextDHCP.Provider value={[dhcpValue, setDhcpValue]}>
          <AlertContextEGRIP.Provider value={[egripValue, setEgripValue]}>
            <AlertContextOSPF.Provider value={[ospfValue, setOspfValue]}>
              {/* <Routes>
                <Route path="/" element={<InterfacesLoop />}></Route>
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
            </AlertContextOSPF.Provider>
          </AlertContextEGRIP.Provider>
        </AlertContextDHCP.Provider>
      </AlertContext.Provider>
    </div>
  );
}

export default App;
