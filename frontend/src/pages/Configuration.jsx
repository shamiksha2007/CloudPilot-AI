import ProjectComponents from "../components/forms/ProjectComponents";
import EnvironmentVariables from "../components/forms/EnvironmentVariables";

function Configuration() {
  return (
    <div className="space-y-8">
      <ProjectComponents />
      <EnvironmentVariables />
    </div>
  );
}

export default Configuration;