import { useState } from "react";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxState";
import WeatherType from "../weatherdata/WeatherType";
import weatherImages from "../../utils/formatWeatherImages";
import { setIconData } from "../../state/reducers/iconDataSlice";

function HourlyWeatherCard({ weatherData }) {
  const [counter, setCounter] = useState(0);
  const [hideCounter, setHideCounter] = useState("");
  const toggleTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  const dispatch = useAppDispatch();

  console.log(toggleTimeFrame);

  const hourlyData = weatherData ? weatherData.values : null;
  const iconData = useAppSelector((state) => state.iconData.iconData);
  const weatherType = weatherData.currentConditions.icon;

  console.log(hourlyData);

  const hourlyDataMap = hourlyData
    ? hourlyData.slice(counter, counter + 1)
    : null;

  console.log(hourlyDataMap);

  const getIcon = (weatherType) => {
    if (weatherType in weatherImages) {
      dispatch(setIconData(weatherImages[weatherType]));
    } else {
      dispatch(setIconData("/images/placeholder-image.webp"));
    }
  };

  function prevHour() {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      setHideCounter("hidden");
      setCounter(0);
      getIcon(weatherType);
    }
  }

  function nextHour() {
    setCounter((prevCounter) => prevCounter + 1);
    setHideCounter("");
    getIcon(weatherType);
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
    <div className="border-4 border-slate-300 rounded-xl flex flex-col items-center h-small w-small bg-white">
      {hourlyData &&
        toggleTimeFrame &&
        hourlyDataMap.map((data, index) => (
          <div
            className="flex flex-row items-center h-full w-full p-5"
            key={index}
          >
            <div
              onClick={prevHour}
              className="w-1/6 bg-slate-300 text-2xl font-bold rounded-full text-white p-2 cursor-pointer hover:bg-slate-500 hover:scale-110"
            >
              <button className={hideCounter}>-</button>
            </div>
            <div className="w-4/6 flex flex-col gap-2 justify-center items-center h-full">
              <div className="flex flex-row items-center gap-5 justify-around">
                <div className="text-center flex flex-row gap-2">
                  <h2 className="font-semibold text-xl underline-offset-4 underline">
                    {setDate(data.datetimeStr)}
                  </h2>
                  <h3 className="font-semibold text-xl">
                    {setTime(data.datetimeStr)}
                  </h3>
                </div>
                <div>
                  <WeatherType weatherType={weatherType} iconData={iconData} />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-5 h-full w-full">
                <div className="p-5 bg-slate-400 text-white rounded-2xl shadow-2xl">
                  <h2>Humidity</h2>
                  <p>{data.humidity}</p>
                </div>
                <div className="p-5 bg-slate-400 text-white rounded-2xl shadow-2xl">
                  <h2>Temperature</h2>
                  <p>{data.temp}</p>
                </div>
                <div className="p-5 bg-slate-400 text-white rounded-2xl shadow-2xl">
                  <h2>Chance of Rain</h2>
                  <p>{data.precip + "%"}</p>
                </div>
                <div className="p-5 bg-slate-400 text-white rounded-2xl shadow-2xl">
                  <h2>Cloud Cover</h2>
                  <p>{data.cloudcover}</p>
                </div>
              </div>
            </div>
            <div
              onClick={nextHour}
              className="w-1/6 bg-slate-300 rounded-full font-bold text-2xl text-white p-2 cursor-pointer hover:bg-slate-500 hover:scale-110"
            >
              <button>+</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HourlyWeatherCard;
