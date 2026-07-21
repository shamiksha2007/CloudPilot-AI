import { useState } from "react";

function EnvironmentVariables() {
  const [variables, setVariables] = useState([
    { key: "", value: "" },
  ]);

  const addVariable = () => {
    setVariables([...variables, { key: "", value: "" }]);
  };

  const updateVariable = (index, field, value) => {
    const updated = [...variables];
    updated[index][field] = value;
    setVariables(updated);
  };

  const removeVariable = (index) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-2xl bg-[#161B22] p-6 shadow-lg mt-8">
      <h2 className="mb-6 text-2xl font-bold text-pink-500">
        🔑 Environment Variables
      </h2>

      {variables.map((variable, index) => (
        <div
          key={index}
          className="mb-4 grid grid-cols-2 gap-4"
        >
          <input
            placeholder="KEY"
            value={variable.key}
            onChange={(e) =>
              updateVariable(index, "key", e.target.value)
            }
            className="rounded-lg bg-[#0D1117] p-3"
          />

          <input
            placeholder="VALUE"
            value={variable.value}
            onChange={(e) =>
              updateVariable(index, "value", e.target.value)
            }
            className="rounded-lg bg-[#0D1117] p-3"
          />

          {variables.length > 1 && (
            <button
              onClick={() => removeVariable(index)}
              className="text-red-400"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addVariable}
        className="mt-4 rounded-xl bg-pink-500 px-5 py-3 hover:bg-pink-600"
      >
        + Add Variable
      </button>
    </div>
  );
}

export default EnvironmentVariables;