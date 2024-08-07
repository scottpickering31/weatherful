import { useState } from "react";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "../../hooks/useReduxState";

function HourlyWeatherCard({ weatherData }) {
  const [counter, setCounter] = useState(0);
  const [hideCounter, setHideCounter] = useState("");
  const toggleTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  const hourlyData = weatherData ? weatherData.values : null;

  console.log(hourlyData);

  const hourlyDataMap = hourlyData
    ? hourlyData.slice(counter, counter + 1)
    : null;

  console.log(hourlyDataMap);

  function prevHour() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setHideCounter("hidden");
      setCounter(0);
    }
  }

  function nextHour() {
    setCounter((prevCounter) => prevCounter + 1);
    setHideCounter("");
  }

  const setDate = (date) => {
    const formattedDate = format(new Date(date), "eee d MMMM y");
    return formattedDate;
  };

  const setTime = (time) => {
    const hours = format(new Date(time), `HH:mm`);
    return hours;
  };

  return (
    <div className="border-4 border-slate-300 rounded-xl flex flex-col items-center h-small w-small">
      {hourlyData &&
        toggleTimeFrame &&
        hourlyDataMap.map((data, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="text-center">
              <h2 className="font-semibold text-xl">
                {setDate(data.datetimeStr)}
              </h2>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl">
                {setTime(data.datetimeStr)}
              </h3>
            </div>
            <div className="p-5 flex flex-row gap-5 w-1/2">
              <div>
                <p></p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
              <p>Data</p>
            </div>
            <button onClick={nextHour}>+</button>
            <button onClick={prevHour} className={hideCounter}>
              -
            </button>
          </div>
        ))}
    </div>
  );
}

export default HourlyWeatherCard;
