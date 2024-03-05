import { ListChecks } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Waypoints } from "lucide-react";
import { HdmiPort } from "lucide-react";
import { GrConfigure } from "react-icons/gr";
export const Settings_Boxes = [
  {
    key: "Trubleshooting",
    label: "Trubleshooting",
    Path: "trubleshooting",
    icon: <ListChecks />,
  },

  {
    key: "DHCP",
    label: "DHCP",
    Path: "dhcp",
    icon: <Waypoints />,
  },
  {
    key: "Check-Configurations",
    label: "Check Configurations",
    Path: "configurations",
    icon: <GrConfigure />,
  },
  {
    key: "Interfaces",
    label: "Interfaces",
    Path: "interfaces",
    icon: <HdmiPort />,
  },
  {
    key: "Protocols",
    label: "Protocols",
    Path: "protocols2",
    icon: <ShieldCheck />,
  },
];
