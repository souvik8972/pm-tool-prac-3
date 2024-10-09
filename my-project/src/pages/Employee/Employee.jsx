import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import AddEmployee from "./components/AddEmployee";
import EmployeeHeader from "./components/EmployeeHeader";
import { motion } from "framer-motion";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ReusableTable from "../../components/Table/Table";

const Employee = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null); // Set initial data to `null` to check if it's loaded
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      header: "Avatar Initial",
      accessorKey: "avatar_initial",
      Cell: ({ cell }) => (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F9D2D3]">
          <span className="text-sm text-red-600">{cell.getValue()}</span>
        </div>
      ),
    },
    {
      header: "Name",
      accessorKey: "text_body",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
    },
    {
      header: "Team",
      accessorKey: "team",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Joining Date",
      accessorKey: "joining_date",
    },
    {
      header: "Status",
      accessorKey: "status",
      Cell: ({ cell }) => {
        const status = cell.getValue();
        return (
          <span
            className={`px-2 py-1 rounded-full text-white ${
              status.toLowerCase() === "active"
                ? "bg-gradient-to-tr from-green-400 to-black"
                : "bg-gradient-to-tr from-gray-400 to-black"
            }`}
          >
            {status.toLowerCase() === "active" ? "Active" : "Inactive"}
          </span>
        );
      },
    },
  ];

  // Fetch data only once and memoize it
  useEffect(() => {
    if (!data) { 
      console.log("Fetching data...",data);
      featchData();
    } else {
      setLoading(false); // Stop loading if data already exists
    }
  }, [data]);

  const featchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile");
      setData(response.data); // Store the fetched data
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Stop loading in case of error
    }
  };

  // Memoize the data to prevent re-fetching
  const memoizedData = useMemo(() => data, [data]);

  // Add Employee
  const addEmployee = (newEmployee) => {
    setData([...data, newEmployee]);
    setShowModal(false);
  };

  // Show loading spinner or message until data is fetched
  if (loading) {
    return <div><Loader line={10} /></div>;
  }

  return (
    <div className="p-4 w-full bg-white rounded-sm overflow-hidden">
      <EmployeeHeader setShowModal={setShowModal} />
    <ReusableTable columns={columns} data={memoizedData} />

      {/* Add employee modal */}
      {showModal && (
        <div className="absolute z-50 bottom-0 w-screen h-screen right-0 top-0">
          <div
            onClick={() => setShowModal(false)}
            className="absolute z-30 bg-gray-500 opacity-45 w-screen h-screen"
          ></div>

          <motion.div
            initial={{ x: "-100%" }} // Slide in from left
            animate={{ x: 0 }} // Slide to its original position
            exit={{ x: "100%" }} // Slide out to the right
            transition={{ stiffness: 300 }}
            className="absolute bg-white top-0 z-50 w-[70%] md:w-[40%] lg:w-[30%] h-full"
          >
            <AddEmployee setShowModal={setShowModal} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Employee;
