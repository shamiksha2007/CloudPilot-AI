function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#111827]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold text-pink-500">
            CloudPilot AI
          </h1>

          <p className="text-sm text-gray-400">
            AI Cloud Deployment Engineer
          </p>
        </div>

        <div className="rounded-full border border-pink-500 px-4 py-2 text-sm text-pink-400">
          Version 1.0
        </div>
      </div>
    </header>
  );
}

export default Header;