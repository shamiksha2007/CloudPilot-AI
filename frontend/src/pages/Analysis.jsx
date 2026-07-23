import { useState } from "react";

function Analysis({ repoUrl, analysisData, setAnalysisData }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const startAnalysis = async () => {
    if (!repoUrl.trim()) {
      alert("Please enter a GitHub repository URL first.");
      return;
    }

    setLoading(true);
    setAnalysisData(null);

    try {
      setStatus("🔗 Connecting to GitHub...");
      await sleep(700);

      setStatus("📥 Cloning repository...");
      await sleep(700);

      setStatus("🔍 Detecting project framework...");
      await sleep(700);

      setStatus("🤖 Running AI analysis...");

      const response = await fetch(
        "https://2xgp7p9rmj.ap-south-1.awsapprunner.com/analyze/github",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            repo_url: repoUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Backend request failed.");
      }

      const data = await response.json();

      console.log("BACKEND RESPONSE:", data);

      setStatus("🐳 Generating Dockerfile...");
      await sleep(600);

      setStatus("⚙ Generating Jenkins Pipeline...");
      await sleep(600);

      setStatus("☁ Preparing deployment recommendations...");
      await sleep(600);

      setAnalysisData(data.result);

      setStatus("✅ Analysis Complete!");

    } catch (err) {
      console.error(err);
      alert("Analysis failed. Please check the backend and try again.");
      setStatus("");

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="rounded-2xl bg-[#161B22] p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-pink-500">
        🤖 AI Repository Analysis
      </h2>


      <p className="mt-3 text-gray-400">
        CloudPilot AI will inspect your repository and generate deployment recommendations.
      </p>


      <button
        onClick={startAnalysis}
        disabled={loading}
        className="mt-8 rounded-xl bg-pink-500 px-6 py-3 font-semibold transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Start AI Analysis"}
      </button>


      {loading && (
        <div className="mt-6 rounded-xl border border-pink-500 bg-[#0D1117] p-4">
          <p className="text-pink-400">
            {status}
          </p>
        </div>
      )}



      {analysisData?.ai_analysis && !loading && (

        <div className="mt-8 space-y-4">


          <div className="rounded-xl border border-green-700 bg-green-900/20 p-4">
            <p className="font-semibold text-green-400">
              ✅ Repository analyzed successfully
            </p>
          </div>



          <div className="rounded-lg bg-[#0D1117] p-4">
            <strong>Application:</strong>{" "}
            {
              analysisData.ai_analysis?.application_overview?.name
              || "Not detected"
            }
          </div>



          <div className="rounded-lg bg-[#0D1117] p-4">
            <strong>Type:</strong>{" "}
            {
              analysisData.ai_analysis?.application_overview?.type
              || "Unknown"
            }
          </div>



          <div className="rounded-lg bg-[#0D1117] p-4">
            <strong>Description:</strong>{" "}
            {
              analysisData.ai_analysis?.application_overview?.description
              || "No description available"
            }
          </div>



          <div className="rounded-lg bg-[#0D1117] p-4">
            <strong>Raw AI Analysis:</strong>

            <pre className="mt-3 overflow-auto text-sm text-gray-300">
              {
                JSON.stringify(
                  analysisData.ai_analysis,
                  null,
                  2
                )
              }
            </pre>

          </div>


        </div>

      )}

    </div>
  );
}

export default Analysis;