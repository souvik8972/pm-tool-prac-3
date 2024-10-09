import React, { useState } from "react";
import logo from "../../assets/avatars/Medtrixlogo.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// SidebarHeader component
const SidebarHeader = ({ isOpen, setIsOpen }) => {
  // Local state to manage the collapse status of the logo
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle both the sidebar collapse and the logo's visibility
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle local collapse state
    setIsOpen(prev => !prev); // Toggle the sidebar's open state
    console.log(isOpen); // Log the current state for debugging
  };

  return (
    <div className="flex w-full p-3 items-center relative ">
      {/* Logo that appears or collapses based on isCollapsed state */}
      <img
        src={logo}
        alt="Medtrix logo"
        className={`${isCollapsed ? "block" : "w-0"} sm:h-[64px] h-[50px] pl-7 transition-transform duration-300`}
      />

      {/* Collapse/Expand toggle button */}
      <div
        onClick={handleToggleCollapse}
        className="text-3xl h-[2.3rem] w-[2.3rem] p-1 absolute top--[1.7rem] -right-4 flex justify-center items-center bg-white rounded-full cursor-pointer transition-transform duration-300"
      >
        {/* Icon rotates based on the collapse status */}
        <IoIosArrowDroprightCircle
          className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
