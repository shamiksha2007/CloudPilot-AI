function ProjectInformation({ projectData, setProjectData }) {
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-2xl bg-[#161B22] p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-pink-500">
        📦 Project Information
      </h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Project Name *
          </label>

          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
            placeholder="CloudPilot AI"
            className="w-full rounded-lg border border-gray-700 bg-[#0D1117] p-3 text-white outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Repository URL *
          </label>

          <input
            type="text"
            name="repoUrl"
            value={projectData.repoUrl}
            onChange={handleChange}
            placeholder="https://github.com/username/repository"
            className="w-full rounded-lg border border-gray-700 bg-[#0D1117] p-3 text-white outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            GitHub Username
          </label>

          <input
            type="text"
            name="githubUsername"
            value={projectData.githubUsername}
            onChange={handleChange}
            placeholder="shamiksha2007"
            className="w-full rounded-lg border border-gray-700 bg-[#0D1117] p-3 text-white outline-none focus:border-pink-500"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectInformation;