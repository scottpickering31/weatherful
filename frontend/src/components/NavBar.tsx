import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { setShowSettings } from "../state/reducers/setShowSettingsSlice";
import { setActiveTimeFrame } from "../state/reducers/toggleTimeframeSlice";
import { sidebarButtonsObj } from "../utils/sidebarButtonsObj";
import SidebarButton from "./buttons/SidebarButton";
import AvatarList from "./modals/AvatarListModal";
import SettingsIcon from "/public/images/icons/SettingsIcon.png";
import {
  makeSelectShowSettings,
  makeSelectUserData,
  makeSelectTimeFrame,
} from "../utils/selectors";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";

type TimeFrame =
  | "predictor"
  | "hourly"
  | "daily"
  | "fortnightly"
  | "historical";

const NavBar = memo(() => {
  const dispatch = useAppDispatch();
  const showSettings = useAppSelector(makeSelectShowSettings());
  const user = useAppSelector(makeSelectUserData());
  const timeFrame = useAppSelector(makeSelectTimeFrame());

  const handleClick = async (stateText: TimeFrame) => {
    dispatch(setActiveTimeFrame(stateText));
    await dispatch(fetchWeatherData(stateText));
  };

  const handleSettingsClick = () => {
    dispatch(setShowSettings(!showSettings));
  };

  return (
    <div className="border-t-2 border-r-2 border-b-2 border-slate-700 bg-slate-500 rounded-br-lg rounded-tr-lg h-full">
      <div className="text-center h-full">
        <div className="rounded-2xl flex flex-row items-center justify-center h-1/5 gap-2 px-3">
          <AvatarList />
          <div className="w-3/4 flex flex-row items-center justify-center bg-slate-50 rounded-full p-2">
            <div className="w-3/5">
              <p className="text-gray-500 opacity-90 text-sm">Logged in as:</p>
              <p className="font-bold text-lg">
                {user?.name.slice(0, 1).toUpperCase() + user?.name.slice(1)}
              </p>
            </div>
            <div className="w-1/4">
              <img
                onClick={handleSettingsClick}
                src={SettingsIcon}
                alt="Settings Icon"
                className="transition-transform duration-300 ease-in-out transform hover:rotate-90 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly h-4/5 items-center">
          {sidebarButtonsObj.map((button, index) => (
            <SidebarButton
              key={index}
              image={button.image}
              text={button.text}
              handleClick={handleClick}
              AIOutline={button.AIOutline}
              CurrentTimeFrame={timeFrame}
              stateText={button.stateText}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default NavBar;
