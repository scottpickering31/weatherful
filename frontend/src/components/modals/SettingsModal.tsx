import { useAppDispatch, useAppSelector } from "../../hooks/useReduxState";
import { setShowSettings } from "../../state/reducers/setShowSettingsSlice";
import { makeSelectShowSettings } from "../../utils/selectors";
import { useNavigate } from "react-router-dom";

function SettingsModal() {
  const dispatch = useAppDispatch();
  const showSettings = useAppSelector(makeSelectShowSettings());
  const navigation = useNavigate();

  const handleSettingsClick = () => {
    dispatch(setShowSettings(!showSettings));
  };

  const handleLogout = () => {
    navigation("/login");
    dispatch(setShowSettings(false));
  };

  if (!showSettings) return null;

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-300 h-full w-full flex">
      <div className="w-1/4 border-r-2 h-full">
        <div className="flex flex-row justify-between border-b-2 p-5 w-full items-center">
          <p
            className="font-bold rounded-full text-xl cursor-pointer bg-slate-200 h-8 w-8 text-center hover:scale-110"
            onClick={handleSettingsClick}
          >
            X
          </p>
          <p className="font-bold text-2xl">User Settings</p>
          <div onClick={handleLogout} className="cursor-pointer">
            <p className="bg-slate-200 rounded-lg px-3 py-1 hover:scale-110">
              Log Out
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-5/6 justify-around items-center">
          <div className="p-5">
            <div className="flex flex-row gap-2">
              <h1>Change Default Location</h1>
              <p className="bg-slate-200 rounded-full px-1 cursor-pointer">?</p>
            </div>
            <h1></h1>
          </div>
          <div className="p-5">
            <div className="flex flex-row gap-2">
              <h1>Change Default Location</h1>
              <p className="bg-slate-200 rounded-full px-1 cursor-pointer">?</p>
            </div>
            <h1></h1>
          </div>
          <div className="p-5">
            <div className="flex flex-row gap-2">
              <h1>Change Default Location</h1>
              <p className="bg-slate-200 rounded-full px-1 cursor-pointer">?</p>
            </div>
            <h1></h1>
          </div>
          <div className="p-5">
            <div className="flex flex-row gap-2">
              <h1>Change Default Location</h1>
              <p className="bg-slate-200 rounded-full px-1 cursor-pointer">?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
