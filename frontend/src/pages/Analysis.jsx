import { useState } from "react";

function Analysis() {
  const [results, setResults] = useState([]);

  const startAnalysis = () => {
    const messages = [
      "✅ Repository Connected",
      "✅ Git Access Verified",
      "✅ React detected",
      "✅ FastAPI detected",
      "⚠ Dockerfile Missing",
      "⚠ Jenkinsfile Missing",
      "✅ Deployment Strategy Generated",
    ];

    setResults([]);

    messages.forEach((message, index) => {
      setTimeout(() => {
        setResults((prev) => [...prev, message]);
      }, index * 1000);
    });
  };

  return (
    <div className="rounded-2xl bg-[#161B22] p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-pink-500">
        🤖 AI Repository Analysis
      </h2>

      <p className="mt-3 text-gray-400">
        Let CloudPilot AI inspect your repository before deployment.
      </p>

      <button
        onClick={startAnalysis}
        className="mt-8 rounded-xl bg-pink-500 px-6 py-3 font-semibold hover:bg-pink-600"
      >
        Start AI Analysis
      </button>

      <div className="mt-8 space-y-3">
        {results.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-700 bg-[#0D1117] p-3"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;