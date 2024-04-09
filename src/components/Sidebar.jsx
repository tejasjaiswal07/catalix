// components/Sidebar.js
import React from "react";
import {
  FaHome,
  FaChartLine,
  FaWrench,
  FaBook,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-3xl lg:space-y-4">
        <div className="flex items-center space-x-2">
          <img src="./assets/image1.svg" alt="Catalix" className="h-8 w-8" />
          <span className="text-lg font-bold">Catalix</span>
        </div>
        <nav className="space-y-2">
          <SidebarLink href="/" icon={FaHome}>
            Home
          </SidebarLink>
          <SidebarLink href="/activities" icon={FaChartLine}>
            Activities
          </SidebarLink>
          <SidebarLink href="/analytics" icon={FaChartLine}>
            Analytics
          </SidebarLink>
          <SidebarLink href="/transformation" icon={FaWrench}>
            Transformation
          </SidebarLink>
          <SidebarLink href="/library" icon={FaBook}>
            Library
          </SidebarLink>
          <br />
          <br />
          <br />
          <hr className="border-gray-600 my-2 md:hidden" />
  
          <SidebarLink href="/settings" icon={FaCog}>
            Settings
          </SidebarLink>
          <SidebarLink href="/logout" icon={FaSignOutAlt}>
            Logout
          </SidebarLink>
        </nav>
      </div>
    );
  };
  
  const SidebarLink = ({ href, icon: Icon, children }) => (
    <a
      href={href}
      className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2 md:p-3"
    >
      <Icon className="h-6 w-6 md:h-8 md:w-8" />
      <span className="hidden md:block">{children}</span>
    </a>
  );
  

export default Sidebar;
