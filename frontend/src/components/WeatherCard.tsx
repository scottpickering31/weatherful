import { useDispatch, useSelector } from "react-redux";
import Sunset from "./weatherdata/Sunset";
import Sunrise from "./weatherdata/Sunrise";
import WindDirection from "./weatherdata/WindDirection";
import WindSpeed from "./weatherdata/WindSpeed";
import Temperature from "./weatherdata/Temperature";
import WeatherType from "./weatherdata/WeatherType";
import { useEffect } from "react";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  const setDate = () => {
    const rawDate =
      weatherData.locations[Object.keys(weatherData.locations)[0]]
        .currentConditions.datetime;
    const formattedDate = format(new Date(rawDate), "eee d MMMM y");

    return formattedDate;
  };

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center h-small w-5/6">
      {weatherData ? (
        <div className="flex flex-row items-center">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <div className="text-center">
              <h2 className="font-semibold text-xl">{setDate()}</h2>
            </div>
            <WeatherType weatherData={weatherData} />
            <Temperature weatherData={weatherData} />
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <Sunrise weatherData={weatherData} />
            <Sunset weatherData={weatherData} />
            <WindDirection weatherData={weatherData} />
            <WindSpeed weatherData={weatherData} />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center m-12">
          <div className="p-5 flex flex-col gap-10 w-1/2">
            <Skeleton height={80} width={160} />
            <Skeleton height={80} width={160} />
          </div>
          <div className="p-5 text-center flex justify-around font-bold items-start flex-col gap-8">
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

export default WeatherCard;
