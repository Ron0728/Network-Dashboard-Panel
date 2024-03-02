import { MdDashboard } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

export const DASHBOARS_SIDEBAR_LNKS = [
  {
    key: "Board",
    label: "Board",
    Path: "/main/board",
    icon: <MdDashboard />,
  },

  {
    key: "Details",
    label: "Details",
    Path: "/main/details",
    icon: <TbListDetails />,
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
