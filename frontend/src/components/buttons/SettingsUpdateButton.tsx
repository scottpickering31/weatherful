function SettingsUpdateButton({
  handleUpdate,
  isUpdating,
}: {
  handleUpdate: () => void;
  isUpdating: boolean;
}) {
  

  return (
    <button
      className="text-blue-500"
      onClick={handleUpdate}
      disabled={isUpdating}
    >
      {isUpdating ? "Updating..." : "Update"}
    </button>
  );
}

export default SettingsUpdateButton;
