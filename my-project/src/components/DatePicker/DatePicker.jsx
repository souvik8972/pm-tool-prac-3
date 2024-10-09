import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./custom-datepicker.css"
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

const DatePicker = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="relative w-full">
      {/* Display selected date range */}
     <div className="w-full  flex justify-end ">
     <div
        onClick={() => setShowCalender(!showCalender)}
        className="cursor-pointer bg-gradient-to-tr  sticky from-red-600 to-red-900 text-white px-6 py-2 rounded-lg flex items-center space-x-2 w-fit text-sm"
      >
        <IoCalendarNumberOutline className="text-xl" />
        <span>
          {`${format(state[0].startDate, 'MMM/dd/yyyy')} - ${format(
            state[0].endDate,
            'MMM/dd/yyyy'
          )}`}
        </span>
        <FaAngleDown
          className={`transition-transform duration-300 ${
            showCalender ? 'rotate-180' : ''
          }`}
        />
      </div>
     </div>

      {/* Conditionally render DateRangePicker */}
      {showCalender && (
        <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2  p-4">
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            className="rounded-lg" // Ensure the date picker also has rounded corners
          />
          {/* Adding custom styles */}
         
        </div>
      )}
    </div>
  );
};

export default DatePicker;
