import React from 'react'
import ReusableTable from '../Table/Table'
import { IoCloseCircleOutline } from "react-icons/io5";


const Modal = ({modalData,columns,setModal}) => {
   
    
  return (
    <div className='w-screen h-screen top-0 left-0 absolute flex items-center justify-center bg-black  transition-transform duration-200 bg-opacity-35  z-[1000000000]'>
        <div className="w-[70%] h-[90%] flex flex-col relative bg-white rounded overflow-scroll">
        <div onClick={() => setModal(false)} className=" w-full h-10 flex justify-end p-4 ">
            <span className="cursor-pointer w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full text-xl hover:bg-gray-200 hover:text-gray-800 "><IoCloseCircleOutline /></span>
        </div>
        <div className="p-6">
            
            <ReusableTable data={modalData} columns={columns} />
        </div>
        </div>
       




    </div>
  )
}

export default Modal