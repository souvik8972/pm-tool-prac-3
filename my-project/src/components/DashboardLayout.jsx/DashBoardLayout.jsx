import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const DashBoardLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-[100vh] w-[100%] flex relative overflow-y-hidden   ">
      {/* Sidebar */}
      
      <div  className={` z-[1000] absolute sm:relative  -left-[0%] lg:left-0  h-full lg:relative shadow-md   ${isOpen ? "w-[300px] sm:w-[400px] left-0" : "w-[7%] md:w-[10%] lg:w-[6%] sm:w-[10%]"} transition-all duration-300  `} >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */} 
      <div className={ ` w-[100%] lg:w-[100%]  bg-gray-100 ml-4 pl-2 md:ml-0  ${isOpen ? "w-[100%] sm:w-[100%] " : "w-[100%]"}} overflow-scroll`} >
   <div className="sticky top-0 z-[500]">
   <Header openMenu={openMenu}  setOpenMenu={setOpenMenu} />
   </div>
      <div className=" h-[90%] w-full rounded-xl ml-2  text-black text-xl pt-10 text-center overflow-y-scroll ">

        {children}
      </div >
       {/* footer  will be here*/}
      <div className="sticky bottom-0 z-[500] mr-3 mt-3">
      <Footer />
      </div>
      
      </div>
    </div>
  );
};

export default DashBoardLayout;
