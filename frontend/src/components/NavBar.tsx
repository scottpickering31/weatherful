import SidebarButton from "./buttons/SidebarButton";
import weatherByClothes from "/public/images/icons/weather-by-clothes.svg";
import weatherByDay from "/public/images/icons/weather-by-day.svg";
import weatherByHour from "/public/images/icons/weather-by-hour.svg";
import weatherByFortnight from "/public/images/icons/weather-by-fortnight.svg";
import weatherByHistory from "/public/images/icons/weather-by-history.svg";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { setActiveTimeFrame } from "../state/reducers/toggleTimeframeSlice";
import AvatarList from "./AvatarList";

type TimeFrame = "clothes" | "hourly" | "daily" | "fortnightly" | "historical";

export const sidebarButtonsObj = [
  {
    text: "Outfit Recommendations",
    image: weatherByClothes,
    stateText: "clothes",
  },
  {
    text: "Weather By Hour",
    image: weatherByHour,
    stateText: "hourly",
  },
  {
    text: "Weather By Day",
    image: weatherByDay,
    stateText: "daily",
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
];

function NavBar() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userData.userData);

  const handleClick = (stateText: TimeFrame) => {
    dispatch(setActiveTimeFrame(stateText));
  };

  return (
    <div className="border-t-2 border-r-2 border-b-2 border-slate-700 bg-slate-500 rounded-br-lg h-full">
      <div className="text-center h-full">
        <div className="rounded-full flex flex-row items-center justify-center h-1/5 gap-2 px-3">
          <AvatarList />
          <div className="bg-slate-50 rounded-full py-3 w-3/4">
            <p className="text-gray-500 opacity-90">Logged in as:</p>
            <p className="font-bold text-xl">{user?.name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-2 h-4/5 items-center">
          {sidebarButtonsObj.map((button, index) => (
            <SidebarButton
              key={index}
              image={button.image}
              text={button.text}
              onClick={() => handleClick(button.stateText)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
