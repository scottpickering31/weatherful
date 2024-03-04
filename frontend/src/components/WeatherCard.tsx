import { useDispatch, useSelector } from "react-redux";
import Sunset from "./weatherdata/Sunset";
import Sunrise from "./weatherdata/Sunrise";
import WindDirection from "./weatherdata/WindDirection";
import WindSpeed from "./weatherdata/WindSpeed";
import Temperature from "./weatherdata/Temperature";
import WeatherType from "./weatherdata/WeatherType";
import { useEffect } from "react";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center">
      {weatherData && (
        <div className="flex flex-row items-center w-full">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
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
      )}
    </div>
  );
}

export default WeatherCard;
