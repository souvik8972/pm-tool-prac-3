import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ReusableTable from '../../components/Table/Table';

const Projects = () => {
  // State variables for managing modal visibility, data, and loading status
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]); // Holds the project data
  const [loading, setLoading] = useState(true); // Loading state for when data is being fetched
  const navigate = useNavigate(); // Used for navigating to other routes

  // Define table columns
  const columns = [
    {
      header: "Status",
      accessorKey: "status", // Accessor key for the "status" field in data
      Cell: ({ row }) => ( // Custom cell rendering for the "Status" column
        <div className="flex items-center gap-2 text-xl">
          <MdDeleteOutline 
            className='cursor-pointer' 
            onClick={() => handleDelete(row.original.project_id)} // Call delete handler on icon click
          />
          {/* Dynamic styling based on the project's status */}
          <p className={`text-sm pr-2 pl-2 rounded-xl ${row.original.status === "Active" ? "bg-[#D7F5FC] text-[#37d4ff]" : "bg-gradient-to-r from-[#36AF46] to-[#023A04] text-white"}`}>
            {row.original.status}
          </p>
        </div>
      ),
    },
    {
      header: "Project Details",
      accessorKey: "project_name", // Accessor key for the "project_name" field
      Cell: ({ row }) => ( // Custom rendering for project details
        <div className="flex items-center">
          {/* Clicking the circle navigates to project-specific details */}
          <div 
            onClick={() => navigate(`/project-wise/${row.original.project_id}`)} 
            className="cursor-pointer p-5 text-center w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mr-2"
          >
            {row.original.client_code}
          </div>
          <div>
            <p className='text-base'>{row.original.project_name}</p>
            <p className='text-sm text-gray-400'>Client: {row.original.client}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Start Date",
      accessorKey: "start_date", // Start date of the project
    },
    {
      header: "End Date",
      accessorKey: "end_date", // End date of the project
    },
    {
      header: "Outsource Value",
      accessorKey: "cost", // Outsource cost for the project
    },
    {
      header: "Total Value",
      accessorKey: "billing_amount", // Total billing amount
    },
    {
      header: "Last Updated",
      accessorKey: "last_updated", // Last updated timestamp
    },
  ];

  // Fetch project data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projects'); // Make API call
      setData(response.data); // Set the data fetched from the API
    } catch (error) {
      console.error('Error fetching data:', error); // Handle error
      // Show error notification here (if needed)
    } finally {
      setLoading(false); // Set loading to false once data is fetched or an error occurs
    }
  };

  // Function to handle project deletion
  const handleDelete = async (projectId) => {
    alert('Delete project: ' + projectId); // Show alert when a project is deleted
    // You can add logic to call an API to delete the project here
  };

  // Memoize the data to avoid unnecessary re-renders
  const memoizedData = useMemo(() => data, [data]);

  // Show a loader while the data is being fetched
  if (loading) {
    return <Loader line={10} />;
  }

  return (
    <div className="p-4 bg-white rounded-sm overflow-hidden">
      <h2 className="mb-4 text-xl border-b pb-2 text-left">Projects List</h2>
      {/* Use ReusableTable to display the data */}
      <ReusableTable columns={columns} data={memoizedData} />
    </div>
  );
};

export default Projects;
