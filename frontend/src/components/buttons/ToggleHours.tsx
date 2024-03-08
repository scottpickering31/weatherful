import { useSelector, useDispatch } from "react-redux";
import { setActiveTimeFrame } from "../../state/reducers/toggleTimeframeSlice";
import { useState, useEffect } from "react";

function ToggleHours() {
  const [dailyStyle, setDailyStyle] = useState("w-1/2");
  const [hourlyStyle, setHourlyStyle] = useState("w-1/2");

  const dispatch = useDispatch();
  const activeTimeFrame = useSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  useEffect(() => {
    if (activeTimeFrame === "daily") {
      setDailyStyle("bg-orange-500 h-full w-1/2 overflow-hidden");
      setHourlyStyle("w-1/2");
    } else {
      setHourlyStyle("bg-orange-500 h-full w-1/2 overflow-hidden");
      setDailyStyle("w-1/2");
    }
  }, [activeTimeFrame]);

  function dailyClick() {
    dispatch(setActiveTimeFrame("daily"));
  }

  function hourlyClick() {
    dispatch(setActiveTimeFrame("hourly"));
  }

  return (
    <div className="border-2 my-5 w-48 rounded-2xl h-12 flex items-center justify-around text-xl font-bold overflow-hidden">
      <button className={dailyStyle} onClick={dailyClick}>
        Daily
      </button>
      <button className={hourlyStyle} onClick={hourlyClick}>
        Hourly
      </button>
    </div>
  );
}

export default ToggleHours;
