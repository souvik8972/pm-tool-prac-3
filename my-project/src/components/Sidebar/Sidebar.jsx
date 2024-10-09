import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarHeader from './SidebarHeader';
import { BiSolidUserDetail } from "react-icons/bi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdTask } from "react-icons/md";
import { PiUsersFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { HiTicket } from "react-icons/hi2";
import { FaClipboardList } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";

// Sidebar component
const Sidebar = ({isOpen, setIsOpen}) => {
    
  
  const sidebarSections = {
    admin: [
      { name: 'Resource Allocation', link: '/resource-allocation', icon: <BiSolidUserDetail /> },
      { name: 'Clients', link: '/clients', icon: <PiSuitcaseSimpleBold /> },
      { name: 'Projects', link: '/projects', icon: <GoProjectRoadmap /> },
      { name: 'Task', link: '/task', icon: <MdTask /> },
      { name: 'Employee', link: '/employee', icon: <PiUsersFill /> },
      { name: 'Reports', link: '/reports', icon: <BiSolidReport /> },
      { name: 'Tickets', link: '/tickets', icon: <HiTicket /> },
      { name: 'Time Sheet', link: '/time-sheet', icon: <FaClipboardList /> },
      { name: 'Finance Module', link: '/finance-module', icon: <HiCurrencyDollar /> },
      { name: 'Claim Asset', link: '/claim-asset', icon: <FaClipboardList /> },
    ],
    pm: [
      { name: 'Projects', link: '/projects', icon: <GoProjectRoadmap /> },
      { name: 'Task', link: '/task', icon: <MdTask /> },
      { name: 'Time Sheet', link: '/time-sheet', icon: <FaClipboardList /> },
    ],
    employee: [
      { name: 'Employee', link: '/employee', icon: <PiUsersFill /> },
      { name: 'Claim Asset', link: '/claim-asset', icon: <FaClipboardList /> },
    ],
  };

  //user role
  const currentUserRole = 'admin'; 

  // Get sidebar 
  const filteredItems = sidebarSections[currentUserRole]|| []; 
  return (
    <div  className=" w-full h-full bg-[#333333]  lg:block xl:block  ">
      <SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <ul className={`absolute  w-full  ${isOpen ? 'left-0' : '-left-80'} md:left-0`}>
        {filteredItems.map((item, index) => (
          <li key={index} className="flex m-[0.0625rem] ml-0 pl-4 mr-0">
            <NavLink
              to={item.link}
              className="flex items-center justify-start h-10 text-[15px] gap-2 p-3 w-full text-white hover:bg-gray-200 hover:text-black rounded-full rounded-r-none transition-all"
            >
              <span className='text-[1.25rem]'>{item.icon}</span>
              <span className={`${isOpen ? 'block' : 'hidden'} transition-transform duration-300`}>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
