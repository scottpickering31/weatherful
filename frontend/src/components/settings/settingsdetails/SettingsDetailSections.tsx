import SettingsChangeButton from "../../buttons/SettingsChangeButton";
import { useAppSelector, useAppDispatch } from "../../../hooks/useReduxState";
import { useState } from "react";
import SettingsUpdateButton from "../../buttons/SettingsUpdateButton";
import bcrypt from "bcryptjs";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { updateUserField } from "../../../state/reducers/setUserDataSlice";

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

  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.userData.userData.email);

  const handleUpdate = async () => {
    setIsUpdating(true);
    let newValue = inputValue;

    // Hash the password if the field is 'password'
    if (value === "password") {
      const salt = await bcrypt.genSalt(10);
      newValue = await bcrypt.hash(inputValue, salt);
    }

    axios
      // .patch(`http://localhost:3000/api/update-settings`, {
      .patch(`https://xsjs2s-3000.csb.app/api/update-settings`, {
        email,
        value,
        newValue,
      })
      .then((response) => {
        console.log("Update successful", response.data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error updating settings");
      })
      .finally(() => {
        setIsUpdating(false);
        toast.success("Update successful");
        dispatch(updateUserField({ field: value, newValue }));
      });
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
