function SettingsModal({ handleSettingsClick }) {
  return (
    <div className="absolute h-1/4 w-1/4 bg-white rounded-2xl border-2 border-gray-300">
      <p
        className="absolute left-1 font-bold rounded-full text-xl cursor-pointer"
        onClick={handleSettingsClick}
      >
        X
      </p>
      <p>Log Out</p>
      <p>Favorite Location</p>
    </div>
  );
}

export default SettingsModal;
