// src/component/Sidebar.jsx
import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaBalanceScale,
} from "react-icons/fa";
import { RiPulseLine, RiHealthBookFill, RiAlertFill } from "react-icons/ri";
import { FaHeartPulse } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";

const Sidebar = () => {
  const tips = [
    {
      icon:  GiFruitBowl,
      text: "Maintain a healthy diet rich in whole grains, fruits, and vegetables",
    },
    {
      icon: RiPulseLine ,
      text: "Exercise regularly - at least 150 minutes per week",
    },
    { icon: FaBalanceScale, 
      text: "Maintain a healthy weight and BMI" },
    {
      icon: RiHealthBookFill ,
      text: "Get regular health screenings and check-ups",
    },
  ];

  const risk = 40; // example value
  const [injecting, setInjecting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [injected, setInjected] = useState(false);
  const [allowed, setAllowed] = useState(false);

  const getBarColor = (value) => {
    // 0-52%: #B5D4F1, 52-65%: #81E5DB, 65-80%: #E8D284, 80-100%: #E2798E
    if (value <= 52) {
      return "#B5D4F1";
    } else if (value <= 65) {
      return "#81E5DB";
    } else if (value <= 75) {
      return "#E8D284";
    } else {
      return "#E2798E";
    }
  };

  useEffect(() => {
    if (!injecting) return;
    setCountdown(10);
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(id);
          setInjecting(false);
          setInjected(true);
          setAllowed(true);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [injecting]);

  return (
    <aside className="w-full max-w-sm">
      <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
        <div className="space-y-6">
      {/* Risk Level Card */}
      <div style={{ backgroundColor: "#646464" }} className="text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-sm font-semibold mb-2">Risk Level</h3>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">{risk}%</span>
          <span className="text-xs text-[#646464] bg-white px-2 py-1 rounded">Hypoglycemia Risk AI Prediction</span>
        </div>
        <div className="mt-4">
          <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${risk}%`,
                backgroundColor: getBarColor(risk)
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0</span>
            <span>20</span>
            <span>40</span>
            <span>60</span>
            <span>80</span>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Patch Status Card */}
      <div style={{ backgroundColor: "#646464" }} className="text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-sm font-semibold mb-2">Patch Status</h3>
        <p className="text-sm text-gray-200">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 align-middle" />
          Status: Active
        </p>
        <p className="text-xs text-gray-200 mt-2">Glucagon 1 milligram</p>
      </div>

      {/* Critical Alert Card */}
      <div className="bg-pink-50 p-6 rounded-2xl shadow-xl border border-pink-100">
        <h3 className="text-sm font-semibold text-pink-700 mb-2 flex items-center">
          <RiAlertFill className="mr-2" /> Critical Alert
        </h3>
        <p className="text-sm text-black">Possible Hypoglycemia-Episode Detected, click allow for system will inject micro-dose in 10s.</p>
        <div className="mt-4">
          <button
            onClick={() => {
              if (injecting || allowed) return;
              setInjecting(true);
            }}
            disabled={injecting || allowed}
            className={`px-4 py-2 rounded-full shadow text-white ${injecting || allowed ? "bg-gray-300" : "bg-green-400 hover:opacity-90"}`}
          >
            {injecting ? `ALLOWING... ${countdown}s` : allowed ? "ALLOW" : "ALLOW"}
          </button>
          {injected && <p className="mt-2 text-xs text-gray-500">Micro-dose injected.</p>}
          {allowed && <p className="mt-2 text-xs text-green-600 font-medium">Allowed</p>}
        </div>
      </div>

      {/* Prevention Tips Card */}
      <div className="shadow-xl rounded-2xl overflow-hidden">
        {/* Header Box */}
        <div className="bg-[#CA6B6E] p-6 rounded-t-2xl">
          <h3 className="text-lg font-semibold text-[#FFFFFF] flex items-center">
            <FaHeartPulse className="mr-3 text-[#FFFFFF]" /> Prevention Tips
          </h3>
        </div>
        {/* Content Box */}
        <div style={{ backgroundColor: "#FDFAF6" }} className="p-6 rounded-b-2xl">
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start text-sm text-[#646464]">
                <tip.icon className="h-5 w-5 text-[#646464] mr-3 mt-1 shrink-0" />
                <span>{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
