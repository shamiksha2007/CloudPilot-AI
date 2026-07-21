function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-pink-500">
          CloudPilot AI
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          AI Cloud Deployment Engineer
        </p>

        <button className="mt-8 rounded-xl bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600">
          New Deployment
        </button>
      </div>
    </div>
  );
}

export default Dashboard;