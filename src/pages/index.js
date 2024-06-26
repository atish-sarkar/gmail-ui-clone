import React, { useEffect, useState } from "react";
import MailDrawer from "@/components/mail-drawer";
import ChatDrawer from "@/components/chat-drawer";

// icons
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCaretDownOutline } from "react-icons/io5";
import { RxReload } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { PiDotsSixVerticalLight } from "react-icons/pi";
import { MdOutlineArchive } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiMailUnreadLine } from "react-icons/ri";
import { ImClock } from "react-icons/im";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { TbAlertOctagon } from "react-icons/tb";
import { TbClockPlus } from "react-icons/tb";
import { MdLabelOutline } from "react-icons/md";
import { MdDriveFileMoveOutline } from "react-icons/md";

const dummyMails = [
  {
    id: 1,
    checked: false,
    stared: true,
    sender: "John Doe",
    subject: "Dummy Mail",
    content:
      "This is a dummy mail to check the visibility of the tabular view.",
    time: "12:30",
  },
  {
    id: 2,
    checked: false,
    stared: false,
    sender: "Jane Smith",
    subject: "Meeting Reminder",
    content: "Don't forget about the meeting tomorrow at 10 AM.",
    time: "09:15",
  },
  {
    id: 3,
    checked: false,
    stared: true,
    sender: "Bob Johnson",
    subject: "Project Update",
    content: "The project is on track for completion by the end of the month.",
    time: "14:45",
  },
  {
    id: 4,
    checked: false,
    stared: false,
    sender: "Alice Brown",
    subject: "Vacation Request",
    content: "I'd like to request vacation from July 1st to July 15th.",
    time: "08:30",
  },
  {
    id: 5,
    checked: false,
    stared: true,
    sender: "Charlie Davis",
    subject: "Invoice #12345",
    content: "Attached is the invoice for last month's services.",
    time: "11:00",
  },
  {
    id: 6,
    checked: false,
    stared: false,
    sender: "Diana Prince",
    subject: "New Policy Updates",
    content: "Please review the attached document for the new policy updates.",
    time: "16:20",
  },
  {
    id: 7,
    checked: false,
    stared: true,
    sender: "Edward Norton",
    subject: "Feedback on Presentation",
    content:
      "Great job on the presentation! Here are some additional thoughts.",
    time: "13:10",
  },
  {
    id: 8,
    checked: false,
    stared: false,
    sender: "Fiona Gallagher",
    subject: "Welcome to the Team",
    content: "Welcome to the team! We're excited to have you on board.",
    time: "10:50",
  },
  {
    id: 9,
    checked: false,
    stared: true,
    sender: "George Clark",
    subject: "Weekly Report",
    content: "Attached is the weekly report for your review.",
    time: "15:00",
  },
  {
    id: 10,
    checked: false,
    stared: false,
    sender: "Helen Turner",
    subject: "Birthday Celebration",
    content:
      "Join us in celebrating John's birthday in the break room at 3 PM.",
    time: "13:45",
  },
  {
    id: 11,
    checked: false,
    stared: true,
    sender: "Will Jacks",
    subject: "Dummy Mail",
    content:
      "This is a dummy mail to check the visibility of the tabular view.",
    time: "12:30",
  },
  {
    id: 12,
    checked: false,
    stared: false,
    sender: "Vikrant Massi",
    subject: "Dummy Mail",
    content:
      "This is a dummy mail to check the visibility of the tabular view.",
    time: "12:30",
  },
  {
    id: 13,
    checked: false,
    stared: true,
    sender: "John Smith",
    subject: "Dummy Mail",
    content:
      "This is a dummy mail to check the visibility of the tabular view.",
    time: "12:30",
  },
];

function Mail({ toggle }) {
  const [selectedMails, setSelectedMails] = useState([]);

  const handleSelect = (mailId) => {
    let found = selectedMails.find((id) => id === mailId);
    if (found) {
      let filtered = selectedMails.filter((id) => id !== mailId);
      setSelectedMails(filtered);
    } else {
      setSelectedMails((prev) => [...prev, mailId]);
    }
  };

  const handleSelectAll = (mails) => {
    mails.forEach((element) => {
      setSelectedMails((prev) => [...prev, element.id]);
    });
  };

  return (
    <div className="mail-container">
      {/* <div className={`${toggle ? "hide" : ""} mail-drawer`}>
        {hoverOn === "2" ? (
          <ChatDrawer
            hoverOn={hoverOn}
            isHoverTheme={true}
            setHoverOnDrawer={setHoverOnDrawer}
          />
        ) : (
          <MailDrawer hoverOn={hoverOn} isHoverTheme={false} />
        )}
      </div> */}
      <div className="mail-listing">
        <div className="mail-header">
          <div className="left-action-btns">
            <div className="selection-action-btns">
              <div className="check">
                {selectedMails.length < 1 ? (
                  <div onClick={() => handleSelectAll(dummyMails)}>
                    <MdCheckBoxOutlineBlank size={18} color="#000" />
                  </div>
                ) : selectedMails.length === dummyMails.length ? (
                  <div onClick={() => setSelectedMails([])}>
                    <IoIosCheckboxOutline size={18} color="#000" />
                  </div>
                ) : (
                  <div onClick={() => setSelectedMails([])}>
                    <MdOutlineIndeterminateCheckBox size={18} color="#000" />
                  </div>
                )}
              </div>
              <div className="check">
                <IoCaretDownOutline size={18} color="#000" />
              </div>
            </div>
            <div className="list-action-btns">
              {selectedMails.length === dummyMails.length ? (
                <>
                  <div className="list-action-btn">
                    <MdOutlineArchive size={20} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <TbAlertOctagon size={20} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <RiDeleteBin6Line size={18} color="gray" />
                  </div>
                  <div className="devider" />
                  <div className="list-action-btn">
                    <RiMailUnreadLine size={18} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <ImClock size={16} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <TbClockPlus size={18} color="gray" />
                  </div>
                  <div className="devider" />
                  <div className="list-action-btn">
                    <MdDriveFileMoveOutline size={18} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <MdLabelOutline size={18} color="gray" />
                  </div>
                  <div className="list-action-btn">
                    <CiMenuKebab size={18} color="gray" />
                  </div>
                </>
              ) : (
                <>
                  <div className="list-action-btn">
                    <RxReload size={18} color="#000" />
                  </div>
                  <div className="list-action-btn">
                    <CiMenuKebab size={18} color="#000" />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="right-action-btns">
            <div className="selection-action-btns">
              <div className="content-count">
                <span>1-19 of 19</span>
              </div>
              <div className="pagination-arrows">
                <FaChevronLeft size={14} color="gray" />
                <FaChevronRight size={14} color="gray" />
              </div>
            </div>
          </div>
        </div>
        <div className="mail-list">
          <table className="table">
            <tbody>
              {dummyMails.map((mail, i) => (
                <tr
                  key={i}
                  className={`${
                    selectedMails.includes(mail.id) ? "selected" : ""
                  }`}
                >
                  <td
                    className="check-box"
                    onClick={() => handleSelect(mail.id)}
                  >
                    <div className="check-box-content">
                      <PiDotsSixVerticalLight size={18} className="view" />
                      {selectedMails.includes(mail.id) ? (
                        <IoIosCheckbox size={18} color="#000" />
                      ) : (
                        <MdCheckBoxOutlineBlank size={18} color="#000" />
                      )}
                    </div>
                  </td>
                  <td className="star">
                    {mail.stared ? (
                      <BsStarFill size={20} color="gold" />
                    ) : (
                      <BsStar size={20} color="black" />
                    )}
                  </td>
                  <td className="name">{mail.sender}</td>
                  <td className="subject">
                    {mail.subject} - {mail.content}
                  </td>
                  <td className="time">
                    <div className="operation-btns">
                      <div>
                        <MdOutlineArchive size={20} color="gray" />
                      </div>
                      <div>
                        <RiDeleteBin6Line size={18} color="gray" />
                      </div>
                      <div>
                        <RiMailUnreadLine size={18} color="gray" />
                      </div>
                      <div>
                        <ImClock size={18} color="gray" />
                      </div>
                    </div>
                    <span className="time-text">{mail.time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Mail;
