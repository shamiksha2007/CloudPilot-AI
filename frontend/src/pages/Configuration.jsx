import { useState } from "react";

import ProjectComponents from "../components/forms/ProjectComponents";
import EnvironmentVariables from "../components/forms/EnvironmentVariables";

function Configuration({ analysisData }) {
  const [showDocker, setShowDocker] = useState(false);
  const [showJenkins, setShowJenkins] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Copy failed.");
    }
  };

  if (!analysisData) {
    return (
      <div className="rounded-2xl bg-[#161B22] p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold text-pink-500">
          ⚠ AI Analysis Required
        </h2>

        <p className="mt-4 text-gray-400">
          Complete the AI Analysis step before configuring deployment.
        </p>
      </div>
    );
  }

  const { analysis, recommendation, dockerfile, jenkinsfile } = analysisData;

  return (
    <div className="space-y-8">

      {/* AI Report */}
      <div className="rounded-2xl bg-[#161B22] p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-pink-500">
          🤖 AI Deployment Report
        </h2>

        <p className="mt-2 text-green-400">
          ✅ Repository analyzed successfully
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6">

          <div className="rounded-xl bg-[#0D1117] p-5">
            <h3 className="mb-4 text-lg font-semibold text-pink-400">
              📊 Project Summary
            </h3>

            <p><strong>Language:</strong> {analysis.language}</p>
            <p><strong>Framework:</strong> {analysis.framework}</p>
            <p><strong>Application:</strong> {analysis.application_type}</p>
            <p>
              <strong>Docker:</strong>{" "}
              {analysis.docker_present ? "Present" : "Missing"}
            </p>
            <p>
              <strong>Database:</strong>{" "}
              {analysis.database_detected ? "Detected" : "Not Detected"}
            </p>
          </div>

          <div className="rounded-xl bg-[#0D1117] p-5">
            <h3 className="mb-4 text-lg font-semibold text-pink-400">
              ☁ Deployment Recommendations
            </h3>

            <p>
              <strong>Cloud:</strong>{" "}
              {recommendation.cloud_provider}
            </p>

            <p>
              <strong>Container:</strong>{" "}
              {recommendation.containerization}
            </p>

            <p>
              <strong>CI/CD:</strong>{" "}
              {recommendation.ci_cd}
            </p>
          </div>

        </div>
      </div>

      {/* Dockerfile */}

      <div className="rounded-2xl bg-[#161B22] p-6 shadow-lg">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-pink-500">
            📄 Dockerfile
          </h2>

          <div className="space-x-3">

            <button
              onClick={() => setShowDocker(!showDocker)}
              className="rounded-lg bg-gray-700 px-4 py-2"
            >
              {showDocker ? "Hide" : "Show"}
            </button>

            <button
              onClick={() => copyToClipboard(dockerfile)}
              className="rounded-lg bg-pink-500 px-4 py-2 hover:bg-pink-600"
            >
              Copy
            </button>

          </div>

        </div>

        {showDocker && (
          <pre className="mt-5 overflow-x-auto rounded-lg bg-[#0D1117] p-5 text-green-400">
            <code>{dockerfile}</code>
          </pre>
        )}

      </div>

      {/* Jenkins */}

      <div className="rounded-2xl bg-[#161B22] p-6 shadow-lg">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-pink-500">
            📄 Jenkinsfile
          </h2>

          <div className="space-x-3">

            <button
              onClick={() => setShowJenkins(!showJenkins)}
              className="rounded-lg bg-gray-700 px-4 py-2"
            >
              {showJenkins ? "Hide" : "Show"}
            </button>

            <button
              onClick={() => copyToClipboard(jenkinsfile)}
              className="rounded-lg bg-pink-500 px-4 py-2 hover:bg-pink-600"
            >
              Copy
            </button>

          </div>

        </div>

        {showJenkins && (
          <pre className="mt-5 overflow-x-auto rounded-lg bg-[#0D1117] p-5 text-green-400">
            <code>{jenkinsfile}</code>
          </pre>
        )}

      </div>

      <ProjectComponents />

      <EnvironmentVariables />

    </div>
  );
}

export default Configuration;