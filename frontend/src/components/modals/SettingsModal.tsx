import { useAppDispatch, useAppSelector } from "../../hooks/useReduxState";
import { setShowSettings } from "../../state/reducers/setShowSettingsSlice";

function SettingsModal() {
  const dispatch = useAppDispatch();

  const showSettings = useAppSelector(
    (state) => state.showSettings.showSettings
  );
  const handleSettingsClick = () => {
    dispatch(setShowSettings(!showSettings));
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-300 h-full w-full">
      <div className="w-1/4 border-r-2 h-full p-5 flex flex-row justify-between">
        <p
          className="left-1 font-bold rounded-full text-xl cursor-pointer bg-slate-200"
          onClick={handleSettingsClick}
        >
          X
        </p>
        <p>Log Out</p>
      </div>
      <div className="w-3/4">
        <p>Favorite Location</p>
      </div>
    </div>
  );
}

export default SettingsModal;
