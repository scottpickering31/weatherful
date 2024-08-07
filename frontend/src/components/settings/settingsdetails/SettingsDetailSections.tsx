function SettingsDetailSections({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-300 rounded-2xl p-5 w-1/2  ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-row gap-2 justify-between">
        <p>{description}</p>
        <button className="text-blue-500">Update</button>
      </div>
    </div>
  );
}

export default SettingsDetailSections;
