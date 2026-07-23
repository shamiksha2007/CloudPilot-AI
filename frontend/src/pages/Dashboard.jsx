import { useState } from "react";

import Header from "../components/layout/Header";
import Stepper from "../components/navigation/Stepper";
import ProjectInformation from "../components/forms/ProjectInformation";
import Analysis from "./Analysis";
import Configuration from "./Configuration";
import Deploy from "./Deploy";

function Dashboard() {
  const [currentStep, setCurrentStep] = useState(0);

  const [projectData, setProjectData] = useState({
    projectName: "",
    repoUrl: "",
    githubUsername: "",
  });

  const [analysisData, setAnalysisData] = useState(null);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header />

      <div className="mx-auto max-w-6xl p-8">
        <Stepper currentStep={currentStep} />

        {currentStep === 0 && (
          <ProjectInformation
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}

        {currentStep === 1 && (
          <Analysis
            repoUrl={projectData.repoUrl}
            analysisData={analysisData}
            setAnalysisData={setAnalysisData}
          />
        )}

        {currentStep === 2 && (
          <Configuration analysisData={analysisData} />
        )}

        {currentStep === 3 && (
          <Deploy analysisData={analysisData} />
        )}

        <div className="mt-10 flex justify-between">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
            className="rounded-lg bg-gray-700 px-6 py-3 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={
              currentStep === 3 ||
              (currentStep === 0 && !projectData.repoUrl.trim()) ||
              (currentStep === 1 && !analysisData)
            }
            onClick={() => setCurrentStep(currentStep + 1)}
            className="rounded-lg bg-pink-500 px-6 py-3 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;