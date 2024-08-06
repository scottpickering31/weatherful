function SettingsSelections() {
  const SettingsData = [
    "Profile Settings",
    "Account Defaults",
    "Uploads",
    "Appearance",
  ];

  return (
    <div className="flex flex-col h-5/6 items-center">
      <div className="flex flex-col justify-around w-full h-full">
        {SettingsData.map((data) => (
          <div className="flex flex-row gap-2 justify-around h-1/4 w-full items-center cursor-pointer hover:bg-slate-200">
            <h1 className="w-5/6 text-center">{data}</h1>
            <p className="bg-slate-100 rounded-full cursor-pointer px-2 text-center">
              ?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsSelections;
