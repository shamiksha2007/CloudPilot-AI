import { useState } from "react";

function ProjectComponents() {
  const [components, setComponents] = useState([
    { type: "Frontend", path: "" },
  ]);

  const addComponent = () => {
    setComponents([
      ...components,
      {
        type: "Frontend",
        path: "",
      },
    ]);
  };

  const updateComponent = (index, field, value) => {
    const updated = [...components];
    updated[index][field] = value;
    setComponents(updated);
  };

  const removeComponent = (index) => {
    const updated = components.filter((_, i) => i !== index);
    setComponents(updated);
  };

  return (
    <div className="rounded-2xl bg-[#161B22] p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-pink-500">
        📦 Project Components
      </h2>

      {components.map((component, index) => (
        <div
          key={index}
          className="mb-6 rounded-xl border border-gray-700 p-5"
        >
          <label className="block text-sm mb-2">
            Component Type
          </label>

          <select
            value={component.type}
            onChange={(e) =>
              updateComponent(index, "type", e.target.value)
            }
            className="mb-4 w-full rounded-lg bg-[#0D1117] p-3"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>Worker</option>
            <option>API Gateway</option>
            <option>Database</option>
          </select>

          <label className="block text-sm mb-2">
            Path
          </label>

          <input
            value={component.path}
            onChange={(e) =>
              updateComponent(index, "path", e.target.value)
            }
            placeholder="/frontend"
            className="w-full rounded-lg bg-[#0D1117] p-3"
          />

          {components.length > 1 && (
            <button
              onClick={() => removeComponent(index)}
              className="mt-4 text-red-400"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addComponent}
        className="rounded-xl bg-pink-500 px-6 py-3 hover:bg-pink-600"
      >
        + Add Component
      </button>
    </div>
  );
}

export default ProjectComponents;