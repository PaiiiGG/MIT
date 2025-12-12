// src/component/InsightSection.jsx
import React from "react";

const InsightSection = () => {
  const insights = [
    { title: "7-Day Average", value: "99", unit: "mg/dL", color: "#000000" }, 
    { title: "High Readings", value: "2", unit: "> 140 mg/dL", color: "#B35151" },
    { title: "Low Readings", value: "2", unit: "< 70 mg/dL", color: "#B35151" },
  ];

  const colorMap = (hexColor) => {
    if (hexColor === '#B35151') return { color: '#B35151' };
    if (hexColor === '#000000') return { color: '#000000' };
    return { color: '#1f2937' }; 
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Glucose Insight
      </h3>

      {/* Grid Layout: สร้าง Card ย่อยๆ 3 ใบแยกกัน */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm transition-shadow hover:shadow-md h-full flex flex-col justify-between"
          >
            
            {/* 1. ชื่อข้อมูล*/}
            <p className="text-sm font-medium text-gray-800 order-3 sm:order-1 mb-2">
              {insight.title}
            </p>

            {/* 2. ค่าหลัก + หน่วย*/}
            <div className="order-1 sm:order-2">
              {/* ค่าหลัก (ใหญ่)*/}
              <div
                className="text-4xl font-bold" 
                // ใช้ Inline Style ในการใส่โค้ดสี Hex
                style={colorMap(insight.color)}
              >
                {insight.value}
              </div>

              {/* หน่วย */}
              <p className="text-sm text-gray-500 mt-1">
                {insight.unit}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightSection;