// src/components/Sidebar.js
import React from "react";
import {
  FaHeart,
  FaAppleAlt,
  FaDumbbell,
  FaBalanceScale,
  FaNotesMedical,
} from "react-icons/fa";

const Sidebar = () => {
  const tips = [
    {
      icon: FaAppleAlt,
      text: "Maintain a healthy diet rich in whole grains, fruits, and vegetables",
    },
    {
      icon: FaDumbbell,
      text: "Exercise regularly - at least 150 minutes per week",
    },
    { icon: FaBalanceScale, text: "Maintain a healthy weight and BMI" },
    {
      icon: FaNotesMedical,
      text: "Get regular health screenings and check-ups",
    },
  ];

  return (
    <div className="space-y-6">
      {/* BMI Card */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Body Mass Index (BMI)
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-5xl font-extrabold text-green-600">24.9</span>
          <span className="text-xs font-bold text-green-700 bg-green-200 px-3 py-1 rounded-full">
            You're Healthy
          </span>
        </div>
        {/* จำลองแถบ BMI */}
        <div className="h-2 bg-gray-200 rounded-full mt-4">
          <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>15</span>
          <span>25</span>
          <span>40</span>
        </div>
      </div>

      {/* Prevention Tips Card */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaHeart className="mr-2 text-green-500" /> Prevention Tips
        </h3>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <tip.icon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>{tip.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
