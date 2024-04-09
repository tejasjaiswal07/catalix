// components/DashboardContent.js
import React from 'react';
import { FaClipboardCheck, FaRocket, FaMoneyBillAlt, FaChartLine } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardContent = () => {
  const data = [
    { name: 'Today', value: 315643 },
    { name: 'Yesterday', value: 302873 },
    { name: 'Week', value: 888473 },
    { name: 'Month', value: 3849123 },
    { name: 'Quarter', value: 15643012 },
    { name: 'Year', value: 19983 },
  ];

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
    <DashboardCard title="Efficiency" icon={FaClipboardCheck} value={1921} unit="+10.91%" />
    <DashboardCard title="Time to Market" icon={FaRocket} value={327176} unit="-27.84%" />
    <DashboardCard title="Tech Debt" icon={FaMoneyBillAlt} value={1.1763} unit="-0.00%" />
    <DashboardCard title="Predictability" icon={FaChartLine} value={0.00313010} unit="+0.00%" />
  </div>
  
  );
};

const DashboardCard = ({ title, icon: Icon, value, unit }) => (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4">
      <div className="bg-blue-500 text-white rounded-full p-4">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl md:text-3xl font-bold">{value}</span>
          <span className="text-gray-500">{unit}</span>
        </div>
      </div>
    </div>
  );
  

export default DashboardContent;