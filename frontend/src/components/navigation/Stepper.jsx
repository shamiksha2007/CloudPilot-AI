const steps = [
  "Repository",
  "Analysis",
  "Configuration",
  "Deploy",
];

function Stepper({ currentStep }) {
  return (
    <div className="my-10 flex justify-center gap-6">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`rounded-full px-5 py-2 text-sm font-medium transition
          ${
            currentStep === index
              ? "bg-pink-500 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          {index + 1}. {step}
        </div>
      ))}
    </div>
  );
}

export default Stepper;