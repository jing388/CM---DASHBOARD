import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", icon: <SpaceDashboardOutlinedIcon />, path: "/" },
    {
      title: "Logbook",
      isHeader: true, // Indicates a label
      items: [
        { title: "From Email", icon: <AutoStoriesOutlinedIcon />, path: "/from-email" },
        { title: "Manual Input", icon: <AutoStoriesOutlinedIcon />, path: "/manual-input" },
      ],
    },
    {
      title: "Mails",
      isHeader: true,
      items: [
        { title: "Inbox", icon: <EmailOutlinedIcon />, path: "/inbox" },
        { title: "Starred", icon: <EmailOutlinedIcon />, path: "/starred" },
        { title: "Sent", icon: <EmailOutlinedIcon />, path: "/sent" },
        { title: "Archive", icon: <EmailOutlinedIcon />, path: "/archive" },
      ],
    },
    { title: "Attachments", icon: <AttachmentOutlinedIcon />, path: "/attachments" },
    { title: "Case Tracker", icon: <TableChartOutlinedIcon />, path: "/case-tracker" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`${open ? "w-[270px]" : "w-[80px]"} primary-color h-screen p-5 pt-8 duration-300 relative flex flex-col`}>
      <div
        className="absolute cursor-pointer -right-3 top-9 w-7 h-7 flex items-center justify-center border-dark-purple border-2 rounded-full bg-white"
        onClick={() => setOpen(!open)}
      >
        <ArrowBackIosNewOutlinedIcon
          className={`${!open && "rotate-180"} transition-transform duration-300 text-dark-purple`}
        />
      </div>

      {/* Logo and Title Section */}
      <div className="flex items-center gap-x-4">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        {open && (
          <h1 className="text-white font-medium text-xl duration-200">
            Designer
          </h1>
        )}
      </div>

      {/* Menu Items */}
      <ul className="pt-6 flex-grow space-y-2">
        {Menus.map((menu, index) => (
          <div key={index} className="space-y-2">
            {/* Header Label */}
            {menu.isHeader ? (
              <span className={`text-[#6F798E] text-sm font-medium ${open ? "block" : "hidden"} pl-2`}>
                {menu.title.toUpperCase()}
              </span>
            ) : null}

            {/* Main or Sub-items */}
            {!menu.isHeader && (
              <li
                onClick={() => handleNavigation(menu.path)}
                className={`text-white text-sm flex items-center gap-x-4 p-3 rounded-md cursor-pointer hover:bg-gray-700
                  ${menu.path === location.pathname ? "bg-[#0C1A37]" : ""}`}
              >
                <span>{menu.icon}</span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
              </li>
            )}
            
            {/* Sub-items for header sections */}
            {menu.isHeader && menu.items?.map((subItem, subIndex) => (
              <li
                key={subIndex}
                onClick={() => handleNavigation(subItem.path)}
                className={`text-white text-sm flex items-center gap-x-4 pl-6 pr-3 py-3 rounded-md cursor-pointer hover:bg-gray-700
                  ${subItem.path === location.pathname ? "bg-[#0C1A37]" : ""}`}
              >
                <span>{subItem.icon}</span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>{subItem.title}</span>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
