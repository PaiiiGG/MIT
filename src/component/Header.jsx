// src/components/Header.js
import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCog,
  FaChartLine,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    // Navbar Container:
    // - bg-white: พื้นหลังสีขาว
    // - rounded-full: ขอบโค้งมนเต็มที่
    // - shadow-xl: เงาชัดเจน
    // - p-4 md:p-6: Padding ปรับตามขนาดหน้าจอ
    <nav className="bg-white rounded-full shadow-xl p-6  mb-8">
      {/* Flex Container หลัก: จัดเรียงองค์ประกอบทั้งหมดในแนวนอน */}
      <div className="flex justify-between items-center w-full relative mx-auto">
        {/* 1. ส่วนซ้าย: Search Bar และข้อความทักทาย */}
        <div className="flex items-center space-x-6 ">
          {/* Search Bar (เปลี่ยนการแสดงผลตามหน้าจอ) */}
          <div
            className="relative flex items-center bg-white border border-gray-300 rounded-full py-2 px-4 
                        w-40 sm:w-64 md:w-80 lg:w-96 transition-all duration-300"
          >
            <FaSearch className="text-gray-400 mr-3 h-4 w-4" />

            {/* ซ่อน Text Input บนมือถือเล็ก ๆ และแสดงบนจอใหญ่ */}
            <input
              type="text"
              placeholder="Search MyHealthApp"
              className="hidden sm:block text-sm text-gray-500 w-full focus:outline-none"
            />
            {/* แสดงชื่อแอปสั้น ๆ บนมือถือเล็ก ๆ */}
            <span className="sm:hidden text-sm text-gray-600">MyHealthApp</span>
          </div>

          {/* ข้อความทักทาย: ซ่อนบนมือถือเล็ก ๆ */}
          {/* <span className="hidden md:block text-gray-700 font-medium whitespace-nowrap">
            Good Morning User!
          </span> */}
        </div>
        <ul
          className={`${
            !toggle ? "hidden" : "flex top-2"
          } flex-col space-y-3 md:space-y-0  
                     md:flex md:flex-row md:space-x-6 
                     absolute md:static top-full right-0 
                     bg-white md:bg-transparent 
                     p-4 md:p-0 
                     shadow-lg md:shadow-none 
                     rounded-lg 
                     z-20`}
        >
          <li className="">
            <a href="#"></a>
            <FaBell size={25} color="#A2A3A4" />
          </li>
          <li className="">
            <a href="#"></a>
            <FaUserCircle size={25} color="#A2A3A4" />
          </li>
          <li className="">
            <a href="#"></a>
            <FaCog size={25} color="#A2A3A4" />
          </li>
        </ul>

        <FaBars
          onClick={updateToggle}
          size={25}
          color="#A2A3A4"
          className="cursor-pointer md:hidden"
        />
      </div>
    </nav>
  );
};

export default Header;
