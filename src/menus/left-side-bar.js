import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";
import RightSideBar from "./right-side-bar";

// menu icon
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

// email icons
import { MdEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

// chat icons
import { IoChatbox } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";

// meet icons
import { RiVideoOnFill } from "react-icons/ri";
import { RiVideoOnLine } from "react-icons/ri";

// settings icon
import { IoSettingsOutline } from "react-icons/io5";

// help icon
import { BiHelpCircle } from "react-icons/bi";

// arrow icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// google icon
import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// search icon
import { IoSearch } from "react-icons/io5";

// mix icon
import { RxMixerHorizontal } from "react-icons/rx";

const MailTooltip = () => {
  return <span class={"tooltip-container position-mail"}>Tooltip text</span>;
};
const ChatTooltip = () => {
  return <span class={"tooltip-container position-chat"}>Tooltip text</span>;
};

const menus = [
  {
    id: "1",
    title: "Mail",
    link: "/",
    activeIcon: <MdEmail size={18} color="#000" className="menu-title" />,
    inactiveIcon: (
      <MdOutlineEmail size={18} color="#000" className="menu-title" />
    ),
    tooltip: <MailTooltip />,
  },
  {
    id: "2",
    title: "Chat",
    link: "/chat",
    activeIcon: <IoChatbox size={18} color="#000" className="menu-title" />,
    inactiveIcon: (
      <IoChatboxOutline size={18} color="#000" className="menu-title" />
    ),
    tooltip: <ChatTooltip />,
  },
  {
    id: "3",
    title: "Meet",
    link: "/meet",
    activeIcon: <RiVideoOnFill size={18} color="#000" className="menu-title" />,
    inactiveIcon: (
      <RiVideoOnLine size={18} color="#000" className="menu-title" />
    ),
  },
];

const Search = () => {
  return (
    <div className="global-search">
      <div className="search-icon">
        <IoSearch size={28} color="black" />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search in emails"
      />
      <div className="filter-icon">
        <RxMixerHorizontal size={28} color="black" />
      </div>
    </div>
  );
};

function LeftSideBar({ Component, pageProps }) {
  const [activeMenu, setActiveMenu] = useState(menus[0]);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  return (
    <div className="left-side-bar-container">
      <div className="left-menus">
        <div className="menu-drawer">
          <IoMdMenu
            size={22}
            color="#000"
            className="drawer-btn"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div>
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveMenu(menu);
                router.push(menu.link);
              }}
              className={`menu ${
                activeMenu.id !== menu.id && menu.tooltip && "tooltip"
              }`}
            >
              <div
                className={`menu-icon ${
                  activeMenu.id === menu.id ? "active" : ""
                }`}
              >
                {activeMenu.id === menu.id
                  ? menu.activeIcon
                  : menu.inactiveIcon}
              </div>
              <span>{menu.title}</span>
              {activeMenu.id !== menu.id && menu.tooltip}
            </div>
          ))}
        </div>
      </div>
      <div className="page-container">
        <div className="app-bar">
          <div className="left-app-bar">
            <div className="company-title">
              <div className="logo">
                <SiGmail size={26} color="red" />
              </div>
              <span className="title">Gmail</span>
            </div>
            <Search />
          </div>
          <div className="right-app-bar">
            <div className="status">
              <div className="status-signal" />
              <span className="status-title">Active</span>
              {true ? (
                <IoIosArrowDown size={22} color="#000" />
              ) : (
                <IoIosArrowUp size={22} color="#000" />
              )}
            </div>
            <div className="action-btns">
              <CgMenuGridO size={26} color="#000" className="action-btn" />
              <IoSettingsOutline
                size={26}
                color="#000"
                className="action-btn"
              />
              <BiHelpCircle size={26} color="#000" className="action-btn" />
            </div>
            <div className="title-box">
              <span className="company-title">Google</span>
              <div className="avatar-container">
                <span className="profile-avatar-text">A</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-page">
          <Component {...pageProps} toggle={toggle} />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
