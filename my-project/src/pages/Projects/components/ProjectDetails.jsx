import axios from 'axios';
import { IoArrowBack } from "react-icons/io5";

import React, { useMemo, useState, useEffect } from 'react';

import { MaterialReactTable } from 'material-react-table';
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import ReusableTable from '../../../components/Table/Table';
import { Stack } from '@mui/material';

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Sample data based on your provided input
  const sampleData = [
    {
      project_id: 20541,
      project_name: "Elzonris hcp website interim updates - QA sign off on staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Avinash Ranchagi",
      start_date: "09/18/2024",
      end_date: "09/18/2024"
    },
    {
      project_id: 20540,
      project_name: "Elzonris hcp website interim updates - Proofing sign off on staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Amita Byatnal",
      start_date: "09/18/2024",
      end_date: "09/18/2024"
    },
    {
      project_id: 20539,
      project_name: "Elzonris hcp website interim updates - Addressing proofing and QA comments to staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Stalin Blazy",
      start_date: "09/18/2024",
      end_date: "09/18/2024"
    },
    {
      project_id: 20538,
      project_name: "Elzonris hcp website interim updates - QA of staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Avinash Ranchagi",
      start_date: "09/18/2024",
      end_date: "09/18/2024"
    },
    {
      project_id: 20537,
      project_name: "Elzonris hcp website interim updates - Proofing of staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Amita Byatnal",
      start_date: "09/18/2024",
      end_date: "09/18/2024"
    },
    {
      project_id: 20536,
      project_name: "Elzonris hcp website interim updates - Medic sign off on staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Shuja Jacob",
      start_date: "09/17/2024",
      end_date: "09/17/2024"
    },
    {
      project_id: 20535,
      project_name: "Elzonris hcp website interim updates - Addressing medic feedback to Staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Stalin Blazy",
      start_date: "09/17/2024",
      end_date: "09/17/2024"
    },
    {
      project_id: 20534,
      project_name: "Elzonris hcp website interim updates - Medic review to staging link",
      description: "Elzonris hcp website interim updates",
      client_code: "0846",
      client: "Shuja Jacob",
      start_date: "09/16/2024",
      end_date: "09/16/2024"
    }
  ];

  useEffect(() => {
    // Set the data to the sample data instead of fetching from an API
    setData(sampleData);
    setLoading(false);
  }, []);

  const columns = [
    {
      header: "Actions",
      accessorKey: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-2 text-xl">
          <IoAddSharp
            className='cursor-pointer'
            onClick={() => alert(`Add task: ${row.original.project_id}`)}
          />
          <MdEdit className='cursor-pointer' onClick={() => alert(`Edit project: ${row.original.project_id}`)} />
          <MdDeleteOutline className='cursor-pointer' onClick={() => alert(`Delete project: ${row.original.project_id}`)} />
        </div>
      ),
    },
    {
      header: "Task ID",
      accessorKey: "project_id",
    },
    {
      header: "Task Title",
      accessorKey: "project_name",
    },
    {
      header: "Project Title",
      accessorKey: "description",
    },
    {
      header: "Project Code",
      accessorKey: "client_code",
    },
    {
      header: "Employee Name",
      accessorKey: "client",
    },
    {
      header: "Start Date",
      accessorKey: "start_date",
    },
    {
      header: "End Date",
      accessorKey: "end_date",
    },
  ];
// Memoize the data to prevent unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);
//loader component if loading
  if (loading) {
    return <Loader line={10} />;
  }

  return (
    <div className="p-4 bg-white rounded-sm overflow-hidden">
      <h2 onClick={() => navigate(-1)} className=" cursor-pointer text-xl border s mb-1 text-left flex  items-center  w-10 h-10 justify-center    rounded-full hover:bg-slate-200"> <IoArrowBack/>  </h2>
    
    // Render the ReusableTable component with the data and columns
     <ReusableTable columns={columns} data={memoizedData} />

    </div>
  );
};

export default Projects;
