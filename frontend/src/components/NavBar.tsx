import { useState } from "react";
import SidebarButton from "./buttons/SidebarButton";
import weatherByClothes from "/public/images/icons/weather-by-clothes.svg";
import weatherByDay from "/public/images/icons/weather-by-day.svg";
import weatherByHour from "/public/images/icons/weather-by-hour.svg";
import weatherByFortnight from "/public/images/icons/weather-by-fortnight.svg";
import weatherByHistory from "/public/images/icons/weather-by-history.svg";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { setActiveTimeFrame } from "../state/reducers/toggleTimeframeSlice";
import AvatarList from "./modals/AvatarListModal";
import SettingsIcon from "/public/images/icons/SettingsIcon.png";
import SettingsModal from "./modals/SettingsModal";

type TimeFrame = "clothes" | "hourly" | "daily" | "fortnightly" | "historical";

export const sidebarButtonsObj = [
  {
    text: "Weather By Day",
    image: weatherByDay,
    stateText: "daily",
  },
  {
    text: "Weather By Hour",
    image: weatherByHour,
    stateText: "hourly",
  },
  {
    text: "14 Day Weather Forecast",
    image: weatherByFortnight,
    stateText: "fortnight",
  },
  {
    text: "Historic Weather Forecasts",
    image: weatherByHistory,
    stateText: "historic",
  },
  {
    text: "*NEW* AI Outfit Recommendations",
    image: weatherByClothes,
    stateText: "clothes",
    AIOutline: true,
  },
];

function NavBar() {
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userData.userData);
  const timeFrame = useAppSelector((state) => state.timeFrame.activeTimeFrame);

  const handleClick = (stateText: TimeFrame) => {
    dispatch(setActiveTimeFrame(stateText));
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="border-t-2 border-r-2 border-b-2 border-slate-700 bg-slate-500 rounded-br-lg rounded-tr-lg h-full">
      <div className="text-center h-full">
        <div className="rounded-2xl flex flex-row items-center justify-center h-1/5 gap-2 px-3">
          <AvatarList />
          <div className="w-3/4 flex flex-row items-center justify-center bg-slate-50 rounded-full p-2">
            <div className="w-3/5">
              <p className="text-gray-500 opacity-90">Logged in as:</p>
              <p className="font-bold text-xl">{user?.name}</p>
            </div>
            <div className="w-1/4">
              <img
                onClick={handleSettingsClick}
                src={SettingsIcon}
                alt="Settings Icon"
                className="transition-transform duration-300 ease-in-out transform hover:rotate-90 cursor-pointer"
              />
              {showSettings && <SettingsModal handleSettingsClick={handleSettingsClick}/>}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly h-4/5 items-center">
          {sidebarButtonsObj.map((button, index) => (
            <SidebarButton
              key={index}
              image={button.image}
              text={button.text}
              onClick={() => handleClick(button.stateText as TimeFrame)}
              AIOutline={button.AIOutline}
              CurrentTimeFrame={timeFrame}
              stateText={button.stateText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
