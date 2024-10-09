import React from 'react';

const SearchSection = () => {
  return (
    <div className="max-w-sm">
      {/* SearchBox */}
      <div className="relative" 
           >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5">
            <svg className="shrink-0 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input 
            className="py-3 pl-10 pr-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            type="text"
            role="combobox"
            aria-expanded="false"
            placeholder="Type a name"
            data-hs-combo-box-input=""
          />
        </div>

        {/* SearchBox Dropdown */}
        <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg" style={{ display: 'none' }} data-hs-combo-box-output="">
          <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" data-hs-combo-box-output-items-wrapper=""></div>
        </div>
        {/* End SearchBox Dropdown */}
      </div>
      {/* End SearchBox */}
    </div>
  );
};

export default SearchSection;
