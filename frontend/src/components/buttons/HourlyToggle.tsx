import { useDispatch, useSelector } from "react-redux";
import { setActiveTimeFrame } from "../../state/reducers/toggleTimeframeSlice";

function HourlyToggle() {
  const dispatch = useDispatch();
  const activeTimeFrame = useSelector(
    (state) => state.timeFrame.activeTimeFrame,
  );

  return (
    <div>
      <button
        className={`${
          activeTimeFrame === "hourly"
            ? "bg-orange-500 text-white"
            : "bg-gray-300 text-gray-700"
        } px-4 py-2 rounded focus:outline-none focus:shadow-outline`}
        onClick={() => dispatch(setActiveTimeFrame("hourly"))}
      >
        Hourly Forecast
      </button>
    </div>
  );
}

export default HourlyToggle;
