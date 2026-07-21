import { useState } from "react";

import Header from "../components/layout/Header";
import Stepper from "../components/navigation/Stepper";
import ProjectInformation from "../components/forms/ProjectInformation";
import Analysis from "./Analysis";
import Configuration from "./Configuration";
import Deploy from "./Deploy";

function Dashboard() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header />

      <div className="mx-auto max-w-6xl p-8">
        <Stepper currentStep={currentStep} />

        {currentStep === 0 && <ProjectInformation />}
        {currentStep === 1 && <Analysis />}
        {currentStep === 2 && <Configuration />}
        {currentStep === 3 && <Deploy />}

        <div className="mt-10 flex justify-between">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
            className="rounded-lg bg-gray-700 px-6 py-3 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={currentStep === 3}
            onClick={() => setCurrentStep(currentStep + 1)}
            className="rounded-lg bg-pink-500 px-6 py-3 hover:bg-pink-600 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;