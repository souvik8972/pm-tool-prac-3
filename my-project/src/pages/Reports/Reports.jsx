import React, { useState, Suspense, useCallback } from 'react';
import Loader from '../../components/Loader/Loader';
import DatePickerComponent from '../../components/DatePicker/DatePicker';

// Lazy load the components
const TaskList = React.lazy(() => import('./pages/TaskLists'));
const EmployeeList = React.lazy(() => import('./pages/EmployeeList'));
const AllTaskList = React.lazy(() => import('./pages/AllTaskList'));

const Reports = () => {
  const [activeComponent, setActiveComponent] = useState('Task_List');
  const [loading, setLoading] = useState(false);

  // Object to map activeComponent values to components
  const componentMap = {
    Task_List: <TaskList />,
    Employee_List: <EmployeeList />,
    All_Project_List: <AllTaskList />,
  };

  // Debounced handler for changing components
  const handleComponentChange = useCallback((component) => {
    setLoading(true);
    setActiveComponent(component);
    // Simulate loading time if needed (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulating a loading delay
  }, []);

  return (
    <div className="p-6 font-sans w-full h-full ">
      <div className="mb-4 flex text-base">
        <button
          className={`mr-2 px-4 py-2 rounded hover:text-white hover:bg-gradient-to-r from-[#747373] to-[#a8a8a8] ${
            activeComponent === 'Task_List' ? 'bg-[#333333] text-white' : 'bg-gray-200 text-black'
          } transition-colors   `}
          onClick={() => handleComponentChange('Task_List')}
          disabled={loading} // Disable while loading
        >
          Task List
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded  hover:text-white hover:bg-gradient-to-r from-[#747373] to-[#a8a8a8] ${
            activeComponent === 'Employee_List' ? 'bg-[#333333] text-white' : 'bg-gray-200 text-black'
          } transition-colors  `}
          onClick={() => handleComponentChange('Employee_List')}
          disabled={loading} // Disable while loading
        >
          Employee List
        </button>
        <button
          className={`px-4 py-2 rounded   hover:text-white hover:bg-gradient-to-r from-[#747373] to-[#a8a8a8] ${
            activeComponent === 'All_Project_List' ? 'bg-[#333333] text-white' : 'bg-gray-200 text-black'
          } transition-colors  `}
          onClick={() => handleComponentChange('All_Project_List')}
          disabled={loading} // Disable while loading
        >
          All Project List
        </button>
      </div>

      <div className="w-full mb-2 h-10 flex items-center justify-between overflow-y-visible gap-2">
        <DatePickerComponent />
      </div>

      <Suspense fallback={<Loader line={10} />}>
        {/* Render the active component using the componentMap */}
        {componentMap[activeComponent]}
      </Suspense>
    </div>
  );
};

export default Reports;
