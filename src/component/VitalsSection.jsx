import React from "react";
import { Activity, Droplets, Wind, Waves } from "lucide-react"; // Icons from lucide-react

const VitalsSection = () => {
  // Mock SVG Path data for the chart line
  const mockChartData = "M0 25 Q 10 25 20 20 T 40 25 T 60 15 T 80 20 T 100 25";

  const vitals = [
    {
      icon: Droplets,
      title: "Blood Sugar",
      value: "80",
      unit: "mg/dL",
      status: "Normal",
      theme: "pink",
    },
    {
      icon: Activity,
      title: "Heart Rate",
      value: "98",
      unit: "bpm",
      status: "Normal",
      theme: "red",
    },
    {
      icon: Wind, 
      title: "SpO2",
      value: "95",
      unit: "%",
      status: "Normal",
      theme: "blue",
    },
    {
      icon: Waves, 
      title: "Blood Pressure",
      value: "102/72",
      unit: "mmHg",
      status: "Normal",
      theme: "green",
    },
  ];

  // Map theme name to full Tailwind classes and hex chart color
  const colorMap = {
    pink:  { text: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100", chart: "#ec4899" },
    red:   { text: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100", chart: "#f43f5e" },
    blue:  { text: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100", chart: "#3b82f6" },
    green: { text: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100", chart: "#10b981" },
  };

  return (
    // Grid: Mobile 2 columns, Medium screen 4 columns
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {vitals.map((vital, index) => {
        const theme = colorMap[vital.theme];
        // Must rename the icon component to a Capitalized variable for React to render it
        const Icon = vital.icon;
        
        return (
          <div
            key={index}
            // Shadcn-like Card Style
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              {/* Icon Circle */}
              <div className={`p-2 rounded-xl ${theme.bg} ${theme.text}`}>
                <Icon size={20} />
              </div>
              {/* Status Badge */}
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${theme.bg} ${theme.text}`}>
                {vital.status}
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-xs font-medium mb-1">{vital.title}</p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-2xl font-bold text-gray-800">{vital.value}</h3>
                <span className="text-xs text-gray-400">{vital.unit}</span>
              </div>
            </div>

            {/* Mock Chart Area (SVG) */}
            <div className="h-12 mt-3 w-full opacity-60">
               <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path 
                    d={mockChartData} 
                    fill="none" 
                    stroke={theme.chart} 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    // Add a subtle animation to simulate live data
                    className="animate-[pulse_3s_ease-in-out_infinite]" 
                 />
                 {/* Area under curve (Light color fill) */}
                 <path 
                    d={`${mockChartData} L 100 50 L 0 50 Z`} 
                    fill={theme.chart} 
                    fillOpacity="0.1" 
                    stroke="none"
                 />
               </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VitalsSection;