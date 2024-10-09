import React from 'react'

const EmployeeHeader = ({setShowModal}) => {
  return (
    <div className='w-full flex justify-between pb-2 '>
     <h2 className='text-lg text-left text-gray-800  pb-3'>Employee Details</h2>

<button onClick={() => setShowModal(true)} className='bg-black text-xs sm:py-1 sm:px-4 text-white py-2 px-4 rounded-md hover:bg-gradient-to-r from-[#fa2912] to-[#880e00] lg:text-base '> + Add Employee </button>

    </div>
  )
}

export default EmployeeHeader