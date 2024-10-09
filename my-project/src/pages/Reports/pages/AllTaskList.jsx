import React, { useMemo, Suspense, useState } from 'react';
import data from "./data/allTask.json"
import modaldatajson from "./data/modalData.json"

// Lazy load the ReusableTable component
const ReusableTable = React.lazy(() => import('../../../components/Table/Table'));
import { GoLinkExternal } from "react-icons/go";
import Modal from '../../../components/Modal/Modal';

const AllTaskList = () => {
  // Sample data for the table
  const[modal, setModal] = useState(false);
  const modalData = useMemo(() => modaldatajson, []);
 const handleClick = (projectCode) => {
   console.log(projectCode);
  //  setModalData(modaldatajson);
   setModal(true);
 }
const modalColums= [
  {
    header: 'Task ID',
    accessor: 'taskId',
  },
  {
    header: 'Task Title',
    accessor: 'taskTitle',
  },
  {
    header: 'Planned Hours',
    accessor: 'plannedHours',
  },
  {
    header: 'Actual Hours',
    accessor: 'actualHours',
  },
  {
    header: 'Difference Log',
    accessor: 'differenceLog',
  },
  {
    header: 'Client Title',
    accessor: 'clientTitle',
  },
];

  // Define the columns for the table
  const columns = [
    { accessorKey: 'action', header: 'Action' , Cell: ({ row }) => (
      <div onClick={()=>{handleClick(row.original.projectCode)}} className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full border hover:bg-gray-400 hover:text-white">


        <GoLinkExternal/>
      </div>
    )},
    { accessorKey: 'projectTitle', header: 'Project Title'},
    { accessorKey: 'projectCode', header: 'Project Code' },
    
  ];
console.log(modalData,"modalData")
  return (
    <div>
      {modal && <Modal modalData={modalData} setModal={setModal}  columns={modalColums} />}
      <Suspense fallback={<div>Loading...</div>}>
        <ReusableTable columns={columns} data={data} /> 
      </Suspense>
    </div>
  );
};

export default AllTaskList;

