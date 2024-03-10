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
import TrubleShooting from "./Frames/TrubleShooting";
import Dhcp from "./Frames/Dhcp";
import CheckConfigurations from "./Frames/CheckConfigurations";
import Interfaces from "./Frames/Interfaces";
import Protocols2 from "./Frames/Protocols2";
import TroubleShooting from "./Frames/troubleShooting";
import Hello from "./Components/Hello";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route index element={<Welcome />}></Route>
          <Route path="signup" element={<SingUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>

        <Route path="/help" element={<Help />}></Route>

        <Route path="/setting" element={<Settings />}>
          <Route index element={<SettingBoxes />}></Route>

          <Route path="trubleshooting" element={<TrubleShooting />}>
            <Route path="dhcp" element={<Dhcp />}></Route>
            <Route
              path="configurations"
              element={<CheckConfigurations />}
            ></Route>
            <Route path="interfaces" element={<Interfaces />}></Route>
          </Route>

          <Route path="dhcp" element={<Dhcp />}></Route>
          <Route
            path="configurations"
            element={<CheckConfigurations />}
          ></Route>
          <Route path="interfaces" element={<Interfaces />}></Route>
          <Route path="protocols2" element={<Protocols2 />}></Route>
        </Route>

        <Route path="/main" element={<DashBoard />}>
          <Route path="board" element={<Board />}></Route>
          <Route path="protocols" element={<Protocols />}></Route>
          <Route path="hardware" element={<Hardware />}></Route>
          <Route path="troubleShooting" element={<TroubleShooting />}></Route>
          <Route path="alerts" element={<Alerts />}></Route>
          <Route path="security" element={<Security />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
