import DailyToggle from "./buttons/DailyToggle";
import HourlyToggle from "./buttons/HourlyToggle";

function ToggleTimeframe() {
  return (
    <div>
      <div className="mt-10 rounded-xl w-30 flex items-center gap-5 px-5 font-bold">
        <DailyToggle />
        <HourlyToggle />
      </div>
    </div>
  );
}

export default ToggleTimeframe;
