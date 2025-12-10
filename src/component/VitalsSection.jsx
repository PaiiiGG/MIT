// src/components/VitalsSection.js
import React from "react";
import { FaHeartbeat, FaTint, FaRedo, FaLungs } from "react-icons/fa"; // ตัวอย่าง Icon

const VitalsSection = () => {
  const vitals = [
    {
      icon: FaTint,
      title: "Blood Sugar",
      value: "80",
      unit: "mg/dL",
      status: "Normal",
      color: "red",
      chart: "...",
    },
    {
      icon: FaHeartbeat,
      title: "Heart Rate",
      value: "98",
      unit: "bpm",
      status: "Normal",
      color: "red",
      chart: "...",
    },
    {
      icon: FaLungs,
      title: "SpO2",
      value: "95",
      unit: "%",
      status: "Normal",
      color: "purple",
      chart: "...",
    },
    {
      icon: FaTint,
      title: "Blood Pressure",
      value: "102 / 72",
      unit: "mmHg",
      status: "Normal",
      color: "teal",
      chart: "...",
    },
  ];

  return (
    // grid-cols-2: บนมือถือให้มี 2 คอลัมน์
    // md:grid-cols-4: เมื่อเป็นขนาดกลางให้มี 4 คอลัมน์
    // gap-4: ระยะห่างระหว่าง Grid
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {vitals.map((vital) => (
        <div
          key={vital.title}
          className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
        >
          <div
            className={`flex items-center justify-start text-${vital.color}-500 mb-2`}
          >
            {/* จำลองการใส่ Icon/Chart */}
            <vital.icon className="h-6 w-6" />
          </div>
          <p className="text-sm text-gray-500">{vital.title}</p>
          <div className="text-3xl font-bold text-gray-800 mt-1">
            {vital.value}
          </div>
          <p className="text-sm text-gray-400">{vital.unit}</p>
          <div
            className={`mt-2 text-xs font-semibold px-2 py-0.5 rounded-full inline-block bg-green-100 text-green-700`}
          >
            {vital.status}
          </div>
          {/* ส่วนของกราฟ (ใส่ placeholder ไว้) */}
          <div className="h-10 mt-2 bg-gray-100 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default VitalsSection;
