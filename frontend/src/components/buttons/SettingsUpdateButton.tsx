import { useState } from "react";
import { useAppSelector } from "../../hooks/useReduxState";
import bcrypt from "bcryptjs";
import toast, { Toaster } from "react-hot-toast";

function SettingsUpdateButton({
  inputValue,
  field,
}: {
  inputValue: string;
  field: string;
}) {
  const [isUpdating, setIsUpdating] = useState(false);

  const email = useAppSelector((state) => state.userData.userData.email);

  const handleUpdate = async () => {
    setIsUpdating(true);
    let newValue = inputValue;

    // Hash the password if the field is 'password'
    if (field === "password") {
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
            field,
            newValue,
          }),
        }
      );

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
    <button
      className="text-blue-500"
      onClick={handleUpdate}
      disabled={isUpdating}
    >
      <Toaster />
      {isUpdating ? "Updating..." : "Update"}
    </button>
  );
}

export default SettingsUpdateButton;
