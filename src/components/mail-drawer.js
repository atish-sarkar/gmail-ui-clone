import React, { useState } from "react";
// icons
import { MdModeEditOutline } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { LuSendHorizonal } from "react-icons/lu";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdLabelImportantOutline } from "react-icons/md";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { TbAlertOctagon } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdLabelOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdLabel } from "react-icons/md";

const firstListItems = [
  {
    id: 1,
    title: "Inbox",
    icon: <MdInbox size={18} color="black" />,
  },
  {
    id: 2,
    title: "Stared",
    icon: <FaRegStar size={18} color="black" />,
  },
  {
    id: 3,
    title: "Snoozed",
    icon: <FaRegClock size={18} color="black" />,
  },
  {
    id: 4,
    title: "Sent",
    icon: <LuSendHorizonal size={18} color="black" />,
  },
  {
    id: 5,
    title: "Draft",
    icon: <IoDocumentOutline size={18} color="black" />,
  },
];
const secondListItems = [
  {
    id: 6,
    title: "Important",
    icon: <MdLabelImportantOutline size={18} color="black" />,
  },
  {
    id: 7,
    title: "Scheduled",
    icon: <MdOutlineScheduleSend size={18} color="black" />,
  },
  {
    id: 8,
    title: "All Mail",
    icon: <LuMails size={18} color="black" />,
  },
  {
    id: 9,
    title: "Spam",
    icon: <TbAlertOctagon size={18} color="black" />,
  },
  {
    id: 10,
    title: "Bin",
    icon: <RiDeleteBin6Line size={18} color="black" />,
  },
  {
    id: 11,
    title: "Categories",
    icon: <MdLabelOutline size={18} color="black" />,
  },
  {
    id: 12,
    title: "Manage labels",
    icon: <IoSettingsOutline size={18} color="black" />,
  },
  {
    id: 13,
    title: "Create new label",
    icon: <IoMdAdd size={18} color="black" />,
  },
];
const labelListItems = [
  {
    id: 1,
    title: "College",
    color: "red",
  },
  {
    id: 2,
    title: "School",
    color: "orange",
  },
  {
    id: 3,
    title: "Coaching",
    color: "#000",
  },
  {
    id: 4,
    title: "Sports",
    color: "blue",
  },
];

function MailDrawer({ isHoverTheme, setHoverOn }) {
  // console.log("hoverOn", hoverOn);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(
    isHoverTheme ? {} : firstListItems[0]
  );
  function handleLeave(e) {
    const { clientX, clientY } = e;
    if (clientX > 8 && clientX < 58 && clientY) {
    }
  }
  return (
    <div
      className={`drawer-container ${isHoverTheme ? "hover-theme" : ""}`}
      onMouseLeave={handleLeave}
    >
      <div
        className={`compose-mail-container ${
          isHoverTheme ? "compose-mail-container-bg-hover" : ""
        }`}
      >
        <div
          className={`compose-mail pointer ${isHoverTheme ? "remove-bg" : ""}`}
        >
          <MdModeEditOutline size={26} color="black" />
          <span className="compose-mail-text">Compose</span>
        </div>
      </div>
      <div className="drawer-list-container">
        <div className="drawer-list-menus">
          {firstListItems.map((item, index) => (
            <div
              onClick={() => setSelected(item)}
              className={`drawer-list-menu-item ${
                selected.id === item.id ? "active" : "inactive"
              } pointer`}
              key={index}
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </div>
          ))}
          <div
            className="drawer-list-menu-item pointer show"
            onClick={() => setOpened(!opened)}
          >
            {opened ? (
              <IoIosArrowUp size={18} color="black" />
            ) : (
              <IoIosArrowDown size={18} color="black" />
            )}

            <span>{opened ? "Less" : "More"}</span>
          </div>
          {opened && (
            <>
              {secondListItems.map((item, index) => (
                <div
                  onClick={() => setSelected(item)}
                  className={`drawer-list-menu-item ${
                    selected.id === item.id ? "active" : "inactive"
                  } pointer`}
                  key={index}
                >
                  <div>{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              ))}
            </>
          )}
          <div className="drawer-list-menus">
            <div
              onClick={() => setOpened(!opened)}
              className="drawer-list-menu-label"
            >
              <span className="label-text">Labels</span>
              <div className="pointer label-add-icon">
                <IoMdAdd size={18} color="black" />
              </div>
            </div>
            {labelListItems.map((item, index) => (
              <div className="drawer-list-label-item pointer" key={index}>
                <div>
                  <MdLabel size={18} color={item.color} />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailDrawer;
