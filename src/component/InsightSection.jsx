// src/components/InsightSection.js
import React from "react";

const InsightSection = () => {
  const insights = [
    { title: "7-Day Average", value: "99", unit: "mg/dL", color: "blue" },
    { title: "High Readings", value: "2", unit: "> 140 mg/dL", color: "red" },
    { title: "Low Readings", value: "2", unit: "< 70 mg/dL", color: "red" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Glucose Insight
      </h3>

      {/* Grid Layout สำหรับ Responsive
          - sm:grid-cols-3: บนหน้าจอขนาดเล็ก (sm) ขึ้นไป ให้เป็น 3 คอลัมน์
          - gap-4: ระยะห่างระหว่างกล่อง
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            // ใช้ border-r เพื่อสร้างเส้นแบ่งยกเว้นกล่องสุดท้ายบน Desktop
            className={`p-4 border border-gray-100 rounded-xl 
                        ${
                          index < insights.length - 1
                            ? "sm:border-r border-b sm:border-b-0"
                            : "border-b sm:border-b-0"
                        }`}
          >
            {/* ค่าหลัก */}
            <div
              className={`text-4xl font-extrabold text-${insight.color}-600`}
            >
              {insight.value}
            </div>

            {/* หน่วย */}
            <p className="text-sm text-gray-500 mt-1">{insight.unit}</p>

            {/* ชื่อข้อมูล */}
            <p className="text-sm font-medium text-gray-800 mt-2">
              {insight.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightSection;