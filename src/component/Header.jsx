// src/components/Header.js
import React from 'react';
import { 
  FaSearch, 
  FaBell, 
  FaUserCircle, 
  FaCog, 
  FaChartLine, 
  FaBars 
} from 'react-icons/fa';

const Header = () => {
  return (
    // Navbar Container:
    // - bg-white: พื้นหลังสีขาว
    // - rounded-full: ขอบโค้งมนเต็มที่
    // - shadow-xl: เงาชัดเจน
    // - p-4 md:p-6: Padding ปรับตามขนาดหน้าจอ
    <nav className="bg-white rounded-full shadow-xl p-4 md:p-6 mb-8">
      
      {/* Flex Container หลัก: จัดเรียงองค์ประกอบทั้งหมดในแนวนอน */}
      <div className="flex justify-between items-center w-full">
        
        {/* 1. ส่วนซ้าย: Search Bar และข้อความทักทาย */}
        <div className="flex items-center space-x-6">
          
          {/* Search Bar (เปลี่ยนการแสดงผลตามหน้าจอ) */}
          <div className="relative flex items-center bg-white border border-gray-300 rounded-full py-2 px-4 
                        w-40 sm:w-64 md:w-80 lg:w-96 transition-all duration-300">
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
          <span className="hidden md:block text-gray-700 font-medium whitespace-nowrap">
            Good Morning User!
          </span>
          
        </div>

        {/* 2. ส่วนขวา: Menu Links และ Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          
          {/* Link: Trends (แสดงบนหน้าจอขนาดกลางขึ้นไป) */}
          <div className="hidden md:flex items-center text-teal-500 font-medium cursor-pointer">
            <FaChartLine className="h-5 w-5 mr-2 p-1 border border-teal-500 rounded-lg bg-teal-50" />
            Trends
          </div>
          
          {/* Link: Profile (แสดงบนหน้าจอขนาดกลางขึ้นไป) */}
          <span className="hidden md:block text-gray-700 font-medium cursor-pointer">
            Profile
          </span>
          
          {/* Icon: Menu Hamburger (แสดงเฉพาะบนมือถือ) */}
          <FaBars className="md:hidden text-gray-500 h-5 w-5 cursor-pointer" />
          
          {/* Icon: Notifications */}
          <div className="relative cursor-pointer">
            <FaBell className="text-gray-500 h-6 w-6" />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
          </div>
          
          {/* Icon: User/Profile */}
          <FaUserCircle className="text-gray-500 h-6 w-6 cursor-pointer" />
          
          {/* Icon: Settings */}
          <FaCog className="text-gray-500 h-6 w-6 cursor-pointer" />
          
        </div>
      </div>
    </nav>
  );
};

export default Header;