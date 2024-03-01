import React from "react";
import classNames from "classnames";
import {
  DASHBOARS_SIDEBAR_LNKS,
  DASHBOARS_SIDEBAR_BOTTOM_LNKS,
} from "./SideBarNavigation";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import "/src/Css/LogOutButton.css";

// const LinkClasses = "text-green-700";
// const SideBar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col bg-gradient-to-r from-[rgb(6,28,69)] to-gray-400 h-full justify-between w-[15%] border-r-2 ">
//       <div className="h-[80%] flex flex-col p-2">
//         {DASHBOARS_SIDEBAR_LNKS.map((items) => (border-gray-700
//           <sidebarLink
//             // className="a"
//             className="flex  font-semibold border-2 border-transparent
//             hover:border-2 hover:border-r-transparent hover:border-l-transparent
//             e p-3 items-center cursor-pointer gap-2"
//             onClick={() => navigate(items.Path)}
//             key={items.key}
//             items={items}
//           >
//             <div>{items.icon}</div>
//             <button onClick={() => navigate(items.Path)}>{items.label}</button>
//           </sidebarLink>
//         ))}
//         <div className=" border-b-2 border-gray-700 "></div>
//       </div>
// <div className="flex items-end w-full h-full">
//   {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
//     <sidebarLink
//       className="flex  hover:bg-red-700 h-[20%] w-full  text-gray-900  font-bold border-2 border-transparent cursor-pointer"
//       key={items.key}
//       onClick={() => navigate(items.Path)}
//       items={items}
//     >
//       <button
//         className="flex w-full justify-start items-center  hover:bg-red-700 gap-2 p-5 font-bold"
//         onClick={() => navigate(items.Path)}
//       >
//         <div>{items.icon}</div>
//         {items.label}
//       </button>
//     </sidebarLink>
//   ))}
// </div>
//     </div>
//   );
// };

// function sidebarLink({ items }) {
//   const { pathname } = useLocation();
//   return (
//     <link
//       to={items.Path}
//       className={classNames(
//         pathname === items.Path ? "text-red-700" : "text-green-700",
//         LinkClasses
//       )}
//     >
//       <span className="text-red-700">{items.icon}</span>
//       {items.label}
//     </link>
//   );
// }
// export default SideBar;

const LinkClasses = "text-green-700";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-[15%] text-lg  bg-gradient-to-r from-[rgb(6,28,69)] border-r-2 border-gray-700 to-gray-400 p-5 justify-between ">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {DASHBOARS_SIDEBAR_LNKS.map((items) => (
            <SidebarLink key={items.key} items={items}>
              {items.label}
            </SidebarLink>
          ))}
        </div>
        <div className=" border-b-2 border-gray-700 "></div>
      </div>
      <div className="flex flex-col gap-3">
        {DASHBOARS_SIDEBAR_BOTTOM_LNKS.map((items) => (
          <SidebarLink key={items.key} items={items}>
            {items.label}
          </SidebarLink>
        ))}
      </div>
    </div>
  );
}
function SidebarLink({ items }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={items.Path}
      className={classNames(
        pathname === items.Path
          ? "flex text-white"
          : "flex items-center gap-1 text-orange-600",
        LinkClasses
      )}
    >
      <span>{items.icon}</span>
      {items.label}
    </Link>
  );
}
