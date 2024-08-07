import SettingsChangeButton from "../../buttons/SettingsChangeButton";
import { useAppSelector } from "../../../hooks/useReduxState";
import { useState } from "react";
import SettingsUpdateButton from "../../buttons/SettingsUpdateButton";

function SettingsDetailSections({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) {
  const [inputValue, setInputValue] = useState(description);

  const settingsChange = useAppSelector(
    (state) => state.settingsChange.settingsChange
  );

  return (
    <div className="bg-slate-300 rounded-2xl p-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      {settingsChange === title ? (
        <div className="flex justify-between">
          <div className="flex flex-row gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SettingsUpdateButton inputValue={inputValue} field={value} />
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <SettingsChangeButton title={title} />
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-2 justify-between">
          <p>{description}</p>
          <SettingsChangeButton title={title} />
        </div>
      )}
    </div>
  );
}

export default SettingsDetailSections;
