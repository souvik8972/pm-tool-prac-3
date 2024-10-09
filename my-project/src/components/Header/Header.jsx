import { motion } from "framer-motion";
import React, { useState } from 'react';
import userLogo from "../../assets/avatars/User.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

const Header = ({ openMenu, setOpenMenu }) => {
    // State to manage the visibility of the user modal
    const [showModal, setShowModal] = useState(false);

    // Function to toggle the modal visibility
    const handleClick = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className='flex justify-between items-center rounded-lg p-7 pt-3 mt-3 pb-3 mr-3 bg-[#e8e7e7] font-bold text-[#58595B] relative'>
            {/* Hamburger menu for small screens (visible only on small devices) */}
            <span className='text-[3vw] md:text-[1.5rem] flex justify-start ml-3  items-center text-center gap-4'>
                {/* Clicking this toggles the sidebar */}
               
                MedTrix Project Management
            </span>

            {/* User profile icon */}
            <span>
                {/* Clicking the image will show/hide the modal */}
                <img onClick={handleClick} src={userLogo} alt="user Logo" className='w-[3vw] cursor-pointer md:w-[2.5vw]' />
            </span>

            {/* Animated user dropdown modal */}
            {showModal && (
                <motion.div
                    className="modal z-[1000]  shadow-xl absolute right-1 top-14 flex flex-col justify-between w-[200px] h-[100px] rounded-md bg-white"
                    // Initial animation state
                    initial={{ opacity: 0, y: -20 }}
                    // Animate to visible state
                    animate={{ opacity: 1, y: 0 }}
                    // Exit animation state
                    exit={{ opacity: 0, y: -20 }}
                    // Animation transition settings
                    transition={{ duration: 0.3 }}
                >
                    {/* Modal content: user information */}
                    <span className='flex justify-center items-center gap-4 p-2 border-b-2'>
                        <img src={userLogo} alt="user Logo" className='w-[3vw] md:w-[2.5vw]' />
                        <span>Souvik Das</span>
                    </span>

                    {/* Modal content: logout button */}
                    <span className='text-center flex justify-center items-center gap-4 p-4'>
                        <IoMdLogOut /> logout
                    </span>
                </motion.div>
            )}
        </div>
    );
};

export default Header;
