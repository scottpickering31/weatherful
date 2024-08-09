import SettingsChangeButton from "../../buttons/SettingsChangeButton";
import { useAppSelector } from "../../../hooks/useReduxState";
import { useState } from "react";
import SettingsUpdateButton from "../../buttons/SettingsUpdateButton";
import bcrypt from "bcryptjs";
import toast, { Toaster } from "react-hot-toast";

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
  const [isUpdating, setIsUpdating] = useState(false);
  const settingsChange = useAppSelector(
    (state) => state.settingsChange.settingsChange
  );

  const email = useAppSelector((state) => state.userData.userData.email);

  const handleUpdate = async () => {
    setIsUpdating(true);
    let newValue = inputValue;

    // Hash the password if the field is 'password'
    if (value === "password") {
      const salt = await bcrypt.genSalt(10);
      newValue = await bcrypt.hash(inputValue, salt);
    }

    try {
      // const response = await fetch("http://localhost:3000/update-settings", {
        const response = await fetch(
          "https://xsjs2s-3000.csb.app/update-settings",
          {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          value,
          newValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update settings");
      }
      const data = await response.json();
      console.log("Update successful", data);
      toast.success("Update successful");
    } catch (error) {
      console.error(error);
      toast.error("Error updating settings");
    } finally {
      setIsUpdating(false);
    }
  };

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
            <Toaster />
            <SettingsUpdateButton
              inputValue={inputValue}
              handleUpdate={handleUpdate}
              isUpdating={isUpdating}
            />
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
