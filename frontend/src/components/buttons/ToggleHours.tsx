import { useAppDispatch, useAppSelector } from "../../hooks/useReduxState";
import { useEffect } from "react";
import { setActiveTimeFrame } from "../../state/reducers/toggleTimeframeSlice";
import { fetchWeatherData } from "../../state/reducers/weatherDataSlice";

function ToggleHours() {
  const dispatch = useAppDispatch();
  const activeTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [activeTimeFrame]);

  const dailyClassName =
    activeTimeFrame === "daily"
      ? "bg-orange-500 h-full w-1/2 overflow-hidden"
      : "w-1/2";
  const hourlyClassName =
    activeTimeFrame === "hourly"
      ? "bg-orange-500 h-full w-1/2 overflow-hidden"
      : "w-1/2";

  function dailyClick() {
    dispatch(setActiveTimeFrame("daily"));
  }

  function hourlyClick() {
    dispatch(setActiveTimeFrame("hourly"));
  }

  return (
    <div className="border-2 my-5 w-48 rounded-2xl h-12 flex items-center justify-around text-xl font-bold overflow-hidden">
      <button className={dailyClassName} onClick={dailyClick}>
        Daily
      </button>
      <button className={hourlyClassName} onClick={hourlyClick}>
        Hourly
      </button>
    </div>
  );
}

export default ToggleHours;
