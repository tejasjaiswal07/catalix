// components/Header.js
import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-white shadow-md ml-14 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="bg-gray-100 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by profile, setting, artifact etc."
          />
        </div>
        {/*<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <FaPlus className="h-5 w-5" />
          <span>Create Report</span>
  </button>*/}
      </div>
      <div className="flex items-center space-x-4">
        {/* Add other header actions here */}
      </div>
    </div>
  );
};

export default Header;