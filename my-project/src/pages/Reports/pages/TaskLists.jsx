import React, { Suspense } from 'react';
import Loader from '../../../components/Loader/Loader';
import data from "./data/taskData.json"
// import ReusableTable from '../../../components/Table/Table';
const ReusableTable = React.lazy(() => import('../../../components/Table/Table')); // Ensure this component is set up to handle props correctly

const TaskLists = () => {
  // Sample data for the table


  // Define the columns for the table
  const columns = [
    { accessorKey: 'id', header: 'Project Code', size: 100, enableColumnPinning: true },
    { accessorKey: 'task', header: 'Project Title', size: 200, enableColumnPinning: true },
    { accessorKey: 'type', header: 'Client', size: 150, enableColumnPinning: true },
    { accessorKey: 'code', header: 'Task ID', size: 100 },
    { accessorKey: 'description', header: 'Task Title', size: 300 },
    { accessorKey: 'assignee', header: 'Employee Name', size: 150 },
    { accessorKey: 'team', header: 'Function', size: 150 },
    { accessorKey: 'hours', header: 'Planned Hours', size: 100 },
    { accessorKey: 'extras', header: 'Actual Hours', size: 100 },
    { accessorKey: 'extra_hours', header: 'Unit Cost', size: 100 },
    { accessorKey: 'extra_minutes', header: 'Planned Cost', size: 100 },
    { accessorKey: 'actualCost', header: 'Actual Cost', size: 100 },
    { accessorKey: 'difference', header: 'Difference', size: 100 },
  ];

  return (
    <div>
   
      
     <Suspense fallback={<Loader line={10} />}>
     <ReusableTable columns={columns} data={data} />
     </Suspense>
    </div>
  );
};

export default TaskLists;
