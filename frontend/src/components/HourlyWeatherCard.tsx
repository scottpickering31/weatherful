import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";

function HourlyWeatherCard() {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  const hourlyData = weatherData
    ? weatherData.locations[Object.keys(weatherData.locations)[0]].values
    : null;

  const hourlyDataMap = hourlyData
    ? hourlyData.slice(0 + counter, 1 + counter)
    : null;

  console.log(hourlyDataMap);

  function prevHour() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function nextHour() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  const setDate = () => {
    const rawDate = weatherData
      ? weatherData.locations[Object.keys(weatherData.locations)[0]]
          .currentConditions.datetime
      : null;

    if (rawDate) {
      const formattedDate = format(new Date(rawDate), "eee d MMMM y");
      return formattedDate;
    }

    return "No Date";
  };

  return (
    <div className="border-4 border-slate-300 rounded-xl flex flex-col items-center h-small w-full">
      {hourlyData ? (
        hourlyDataMap.map((data, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="text-center">
              <h2 className="font-semibold text-xl">{setDate()}</h2>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl">{data.datetimeStr}</h3>
            </div>
            <div className="p-5 flex flex-row gap-5 w-1/2">
              <div>
                <p>Gerrofff</p>
              </div>
            </div>
            <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
              <p>Data</p>
            </div>
            <button onClick={nextHour}>+</button>
            <button onClick={prevHour}>-</button>
          </div>
        ))
      ) : (
        <div className="flex flex-row items-center m-12">
          <div className="p-5 flex flex-col gap-10 w-1/2">
            <Skeleton height={80} width={160} />
            <Skeleton height={80} width={160} />
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-8">
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HourlyWeatherCard;
