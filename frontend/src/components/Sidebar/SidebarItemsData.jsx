import { BsFolder2 } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { TiChartBar } from "react-icons/ti";
import { PiPlugChargingFill } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoSettingsOutline, IoPersonCircleSharp } from "react-icons/io5";

export const SidebarItems = [
  {
    id: 1,
    title: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    id: 2,
    title: "Campaigns",
    icon: <IoPersonCircleSharp />,
  },
  {
    id: 3,
    title: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: 4,
    title: "Campaigns",
    icon: <TiChartBar />,
  },
  {
    id: 5,
    title: "Flows",
    icon: <BsFolder2 />,
  },
  {
    id: 6,
    title: "Integrations",
    icon: <PiPlugChargingFill />,
  },
  {
    id: 7,
    title: "Customers",
    icon: <RiBarChartHorizontalFill />,
  },
];
