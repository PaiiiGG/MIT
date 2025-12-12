// src/components/TrendsSection.js
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TrendsSection = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Glucose Trends (Last 7 Days)
        </h3>
        
        {/* Dropdown สำหรับเลือกช่วงเวลา */}
        <button className="flex items-center text-sm font-medium text-gray-600 border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-50">
          Dec 2025
          <FaChevronDown className="ml-2 h-3 w-3" />
        </button>
      </div>

      {/* Placeholder สำหรับกราฟจริงๆ */}
      <div className="relative w-full h-80">
        
        {/* *** ส่วนจำลองแกน Y และ X *** */}
        
        {/* 1. เส้นหลัก */}
        <div className="absolute top-0 left-0 w-full h-full border-b border-l border-gray-300">
          
          {/* 2. เส้น Grid แนวนอน (จำลอง) */}
          <div className="h-1/4 border-t border-dashed border-gray-200 mt-[25%]"></div>
          <div className="h-1/4 border-t border-dashed border-gray-200"></div>
          <div className="h-1/4 border-t border-dashed border-gray-200"></div>
        </div>

        {/* 3. ส่วนของเส้นกราฟโค้ง (จำลองด้วย Flex) */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-around items-end p-4">
          <div className="absolute w-full h-full text-blue-500 opacity-70">
            {/* แทนที่ด้วย SVG หรือ Component กราฟจริง */}
            <div className="h-full bg-blue-100 rounded opacity-30">
              {/* แสดงตัวอย่างเส้นโค้ง (ใช้โค้ดจริงจาก Library กราฟ) */}
            </div>
          </div>
          
          {/* 4. จุดข้อมูลสำคัญ (Oct 17) */}
          <div className="absolute left-[30%] top-[40%] text-center">
            <div className="text-xs bg-white border border-gray-300 rounded-lg p-1 shadow-md">
              Oct 18 <br /> Glucose Level: 118
            </div>
          </div>
        </div>
        
        {/* *** ส่วนจำลองแกน X (วันที่) *** */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between pt-2 text-xs text-gray-500">
          <span className="w-1/8 text-left">Oct 15</span>
          <span className="w-1/8 text-center">Oct 16</span>
          <span className="w-1/8 text-center">Oct 17</span>
          <span className="w-1/8 text-center">Oct 18</span>
          <span className="w-1/8 text-center">Oct 19</span>
          <span className="w-1/8 text-center">Oct 20</span>
          <span className="w-1/8 text-center">Oct 21</span>
          <span className="w-1/8 text-right">Oct 22</span>
        </div>
        
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex justify-center items-center text-sm text-gray-600">
        <div className="w-3 h-0.5 bg-blue-500 mr-2"></div>
        Glucose Level
      </div>

    </div>
  );
};

export default TrendsSection;