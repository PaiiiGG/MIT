import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Sidebar from "./component/Sidebar";
import VitalsSection from "./component/VitalsSection";
import InsightSection from "./component/InsightSection";
import TrendsSection from "./component/TrendsSection";
import Header from "./component/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row mt-6 lg:space-x-8">
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Good Morning User!
          </h1>
          <p className="text-gray-500 text-sm">
            Patient ID: XX-XXXX | Type 2 Diabetes
          </p>

          <VitalsSection />
          <InsightSection />
          <TrendsSection />
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
