import { MdDashboard } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import { Cpu } from "lucide-react";

export const DASHBOARS_SIDEBAR_LNKS = [
  {
    key: "Board",
    label: "Board",
    Path: "/main/board",
    icon: <MdDashboard />,
  },

  {
    key: "Hardware",
    label: "Hardware",
    Path: "/main/hardware",
    icon: <Cpu size={19} />,
  },
  {
    key: "TroubleShooting",
    label: "TroubleShoot",
    Path: "/main/troubleShooting",
    icon: <FaTools />,
  },
  {
    key: "Security",
    label: "Security",
    Path: "/main/security",
    icon: <MdOutlineSecurity />,
  },
  {
    key: "Protocols",
    label: "Protocols",
    Path: "/main/protocols",
    icon: <AiOutlineFileProtect />,
  },
  {
    key: "Monitor",
    label: "Monitor",
    Path: "/main/monitor",
    icon: <FaEye />,
  },
  {
    key: "Report",
    label: "Report",
    Path: "/main/report",
    icon: <MdReport />,
  },
  {
    key: "Alerts",
    label: "Alerts",
    Path: "/main/alerts",
    icon: <AiFillAlert />,
  },
];

export const DASHBOARS_SIDEBAR_BOTTOM_LNKS = [
  {
    key: "Logout",
    label: "Logout",
    Path: "/",
    icon: <TbLogout2 />,
  },
];
