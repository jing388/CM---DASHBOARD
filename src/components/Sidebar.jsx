import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FromEmail from "../pages/Logbook/FromEmail";
import ManualInput from "../pages/Logbook/ManualInput";
import Inbox from "../pages/Mails/Inbox";
import Starred from "../pages/Mails/Starred";
import Sent from "../pages/Mails/Sent";
import Archive from "../pages/Mails/Archive";
import Attachments from "../pages/Attachment";
import CaseTracker from "../pages/CaseTracker";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [dropdownState, setDropdownState] = useState({
    logbook: false,
    mails: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", icon: <SpaceDashboardOutlinedIcon />, path: "/" },
    {
      title: "Logbook",
      icon: <AutoStoriesOutlinedIcon />,
      path: "/from-email" || "/manual-input",
      element: <FromEmail /> || <ManualInput />,
      hasDropdown: true,
      dropdownKey: "logbook",
      dropdownItems: [
        { title: "From Email", path: "/from-email", element: <FromEmail /> },
        {
          title: "Manual Input",
          path: "/manual-input",
          element: <ManualInput />,
        },
      ],
    },
    {
      title: "Mails",
      icon: <EmailOutlinedIcon />,
      path: "/inbox",
      element: <Inbox />,
      hasDropdown: true,
      dropdownKey: "mails",
      dropdownItems: [
        { title: "Inbox", path: "/inbox", element: <Inbox /> },
        { title: "Starred", path: "/starred", element: <Starred /> },
        { title: "Sent", path: "/sent", element: <Sent /> },
        { title: "Archive", path: "/archive", element: <Archive /> },
      ],
    },
    {
      title: "Attachments",
      icon: <AttachmentOutlinedIcon />,
      path: "/attachments",
      element: <Attachments />,
    },
    {
      title: "Case Tracker",
      icon: <TableChartOutlinedIcon />,
      path: "/case-tracker",
      element: <CaseTracker />,
    },
  ];

  const [activeMenu, setActiveMenu] = useState(null);
  const handleNavigation = (
    path,
    hasDropdown = false,
    dropdownKey = null,
    isDropdownItem = false
  ) => {
    setActiveMenu(path);

    if (hasDropdown && !isDropdownItem) {
      setDropdownState((prevState) => ({
        ...prevState,
        [dropdownKey]: !prevState[dropdownKey],
      }));
      if (location.pathname !== path) {
        navigate(path);
      }
    } else if (isDropdownItem) {
      navigate(path);
    } else {
      setDropdownState({});
      navigate(path);
    }
  };

  const handleDropdownToggle = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div
      className={`${
        open ? "w-[270px]" : "w-[80px]"
      } primary-color h-screen p-5 pt-8 duration-300 relative flex flex-col`}
    >
      <div
        className="absolute cursor-pointer -right-3 top-9 w-7 h-7 flex items-center justify-center border-dark-purple border-2 rounded-full bg-white"
        onClick={() => setOpen(!open)}
      >
        <ArrowBackIosNewOutlinedIcon
          className={`${
            !open && "rotate-180"
          } transition-transform duration-300 text-dark-purple`}
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
      <ul className="pt-6 flex-grow">
        {Menus.map((menu, index) => (
          <div key={index}>
            <li
              onClick={() =>
                handleNavigation(menu.path, menu.hasDropdown, menu.dropdownKey)
              }
              className={`text-white text-sm flex items-center justify-between gap-x-4 py-3 px-5 rounded-md cursor-pointer ${
                menu.path === activeMenu
                  ? "bg-white text-[#0f2043] font-semibold"
                  : "hover:bg-[#0B1730]"
              }`}
            >
              <div className="flex items-center gap-x-4">
                <span
                  className={`${
                    menu.path === activeMenu ? "text-[#0f2043]" : "text-white"
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={`${
                    menu.path === activeMenu ? "text-[#0f2043]" : "text-white"
                  } ${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </div>
              {menu.hasDropdown &&
                open &&
                (dropdownState[menu.dropdownKey] ? (
                  <ExpandLessIcon
                    className={`text-white ${
                      dropdownState[menu.dropdownKey] ? "" : "text-[#0f2043]"
                    }`}
                    onClick={() => handleDropdownToggle(menu.dropdownKey)}
                  />
                ) : (
                  <ExpandMoreIcon
                    className={`text-white ${
                      dropdownState[menu.dropdownKey] ? "" : "text-[#0f2043]"
                    }`}
                    onClick={() => handleDropdownToggle(menu.dropdownKey)}
                  />
                ))}
            </li>

            {/* Dropdown Items */}
            {menu.hasDropdown && dropdownState[menu.dropdownKey] && open && (
              <ul className="pt-2 ml-6 space-y-2">
                {menu.dropdownItems.map((dropdownItem, idx) => (
                  <li
                    key={idx}
                    onClick={() =>
                      handleNavigation(dropdownItem.path, false, null, true)
                    }
                    className={`text-white text-sm flex items-center gap-x-4 p-2 rounded-md cursor-pointer hover:bg-[#0B1730] ${
                      dropdownItem.path === activeMenu ? "bg-[#0C1A37]" : ""
                    }`}
                  >
                    <span>{dropdownItem.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
