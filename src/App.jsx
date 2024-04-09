// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";
import TabSlider from "./components/Tabslider";

const tabs = [
  "Coding",
  "JavaScript",
  "Podcasts",
  "Databases",
  "Web Development",
  "Unboxing",
  "History",
  "Programming",
  "Gadgets",
  "Algorithms",
  "Comedy",
  "Gaming",
  "Share Market",
  "Smartphones",
  "Data Structure",
];

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header /> 
        <TabSlider tabs={tabs} />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;
