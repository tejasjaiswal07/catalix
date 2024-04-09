import React, { useState, useRef } from "react";
import { useEffect } from "react";



const TabSlider = ({ tabs }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    setContainerWidth(tabsContainerRef.current.clientWidth);
  }, []);

  const handleIconClick = (direction) => {
    const scrollAmount = direction === "left" ? -340 : 340;
    tabsContainerRef.current.scrollLeft += scrollAmount;
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    tabsContainerRef.current.style.scrollBehavior = "auto";
    tabsContainerRef.current.scrollLeft -= e.movementX;
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    tabsContainerRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <div className="wrapper relative overflow-hidden bg-white rounded-lg">
      <div
        className="icon absolute top-0 h-full flex items-center"
        style={{ left: 0, display: scrollLeft === 0 ? "none" : "flex" }}
        onClick={() => handleIconClick("left")}
      >
        <i className="fas fa-angle-left w-14 h-14 cursor-pointer text-xl flex items-center justify-center rounded-full hover:bg-gray-100"></i>
      </div>
      <div
        className="icon absolute top-0 h-full flex items-center"
        style={{
          right: 0,
          display: containerWidth - scrollLeft <= 1 ? "none" : "flex",
        }}
        onClick={() => handleIconClick("right")}
      >
        <i className="fas fa-angle-right w-14 h-14 cursor-pointer text-xl flex items-center justify-center rounded-full hover:bg-gray-100"></i>
      </div>
      <ul
        ref={tabsContainerRef}
        className="tabs-box flex gap-4 list-none overflow-x-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${
              index === 0 ? "active" : ""
            } cursor-pointer whitespace-nowrap px-5 py-3 bg-gray-100 rounded-full border border-gray-300 hover:bg-gray-200`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSlider;
