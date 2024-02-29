import { MdDashboard } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";

export const DASHBOARS_SIDEBAR_LNKS = [
  {
    key: "Board",
    label: "Board",
    Path: "board",
    icon: <MdDashboard />,
  },

  {
    key: "Details",
    label: "Details",
    Path: "details",
    icon: "",
  },
  {
    key: "TroubleShooting",
    label: "TroubleShooting",
    Path: "troubleShooting",
    icon: "",
  },
  {
    key: "Security",
    label: "Security",
    Path: "security",
    icon: <MdOutlineSecurity />,
  },
  {
    key: "Protocols",
    label: "Protocols",
    Path: "protocols",
    icon: <AiOutlineFileProtect />,
  },
  {
    key: "Alerts",
    label: "Alerts",
    Path: "alerts",
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
