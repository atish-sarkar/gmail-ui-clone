import React, { useState } from "react";

// icons
import { FcCalendar } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { PiTargetLight } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function RightSideBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className={`right-menus ${toggle ? "hide" : ""}`}>
        <div className="top-times">
          <FcCalendar size={24} />
          <FcIdea size={24} />
          <PiTargetLight size={24} color="blue" />
          <FaUser size={24} color="blue" />
        </div>
      </div>
      <div className="toggler" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <IoIosArrowBack size={24} />
        ) : (
          <IoIosArrowForward size={24} />
        )}
      </div>
    </div>
  );
}

export default RightSideBar;
