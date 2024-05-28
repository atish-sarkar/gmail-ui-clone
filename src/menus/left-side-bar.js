import { useRouter } from "next/router";

import React, { useCallback, useState } from "react";
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
import MailDrawer from "@/components/mail-drawer";
import ChatDrawer from "@/components/chat-drawer";

const menus = [
  {
    id: "1",
    title: "Mail",
    link: "/",
    activeIcon: <MdEmail size={18} color="#000" className="menu-title" />,
    inactiveIcon: (
      <MdOutlineEmail size={18} color="#000" className="menu-title" />
    ),
  },
  {
    id: "2",
    title: "Chat",
    link: "/chat",
    activeIcon: <IoChatbox size={18} color="#000" className="menu-title" />,
    inactiveIcon: (
      <IoChatboxOutline size={18} color="#000" className="menu-title" />
    ),
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
        <IoSearch size={28} color="gray" />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search in emails"
      />
      <div className="filter-icon">
        <RxMixerHorizontal size={28} color="gray" />
      </div>
    </div>
  );
};

function LeftSideBar({ Component, pageProps }) {
  const [activeMenu, setActiveMenu] = useState(menus[0]);
  const [toggle, setToggle] = useState(false);
  const [hoverOn, setHoverOn] = useState(null);

  const router = useRouter();

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    router.push(menu.link);
  };

  const handleMouseEnter = (id) => {
    if (activeMenu.id === id || id === "3") {
      setHoverOn(null);
    } else {
      setHoverOn(id);
    }
  };

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    if (clientX > 8 && clientY < 162 && clientY > 84) {
      return;
    }
    setHoverOn(null);
  }

  return (
    <div
      className="left-side-bar-container"
      // onMouseMove={(e) => console.log(e.clientY)}
    >
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
              onClick={() => handleMenuChange(menu)}
              className="menu"
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={(e) => handleMouseMove(e)}
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
          <div className={`${toggle ? "hide" : ""} mail-drawer`}>
            {activeMenu.id === "1" ? (
              hoverOn !== "2" ? (
                <MailDrawer
                  hoverOn={hoverOn}
                  isHoverTheme={hoverOn === "1"}
                  setHoverOn={setHoverOn}
                />
              ) : (
                <ChatDrawer
                  hoverOn={hoverOn}
                  isHoverTheme={hoverOn === "2"}
                  setHoverOn={setHoverOn}
                />
              )
            ) : activeMenu.id === "2" ? (
              hoverOn !== "1" ? (
                <ChatDrawer
                  hoverOn={hoverOn}
                  isHoverTheme={hoverOn === "2"}
                  setHoverOn={setHoverOn}
                />
              ) : (
                <MailDrawer
                  hoverOn={hoverOn}
                  isHoverTheme={hoverOn === "1"}
                  setHoverOn={setHoverOn}
                />
              )
            ) : (
              <></>
            )}
          </div>
          <Component {...pageProps} toggle={toggle} />
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
