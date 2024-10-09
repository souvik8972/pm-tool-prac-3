import { useState } from "react";
import { FaFilePdf, FaFileExcel, FaFileCsv } from "react-icons/fa"; // Import icons from react-icons
import { CiExport } from "react-icons/ci";
import { motion } from "framer-motion"; // Import motion for animations
import { MdOutlineCancel } from "react-icons/md"; 
import { generatePDF } from "../utill/exportPDF";
import { exportToCsv } from "../utill/exportCsv";
import { exportToExcel } from "../utill/exportExcel";

export function DropDownMenu({ columns, data }) {
  const [options, setOptions] = useState(false);

  // Animation variants
  const dropdownVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="absolute z-50 flex"> {/* Ensure this wrapper has a higher z-index */}
      <button
        onClick={() => setOptions(!options)}
        className="relative hover:text-[#778464] py-2 px-6 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-300 z-20 flex items-center gap-1 "
      >
        {options ? (
          <>
            <span>Cancel</span>
            <MdOutlineCancel />
          </>
        ) : (
          <>
            <span>Export</span>
            <CiExport />
          </>
        )}
      </button>

      {options && (
        <motion.div
          className="rounded-md p-2 flex gap-2 top-10 right-0 bg-white  z-50" 
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropdownVariants}
          style={{ zIndex: 1000 }}
        >
          <div 
            className="flex items-center gap-2 cursor-pointer  hover:text-red-500"
            onClick={() => generatePDF(data, columns)}  
          >
            <FaFilePdf />
            <span>PDF</span>
          </div>
          <div onClick={() => exportToExcel(data, columns)} className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition-colors duration-200">
            <FaFileExcel />
            <span>Excel</span>
          </div>
          <div onClick={() => exportToCsv(data)} className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            <FaFileCsv />
            <span>CSV</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
