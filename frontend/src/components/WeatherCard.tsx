import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import { useEffect } from "react";import Sunset from "./weatherdata/Sunset";
}


function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const iconData = useSelector((state) => state.iconData.iconData);

useEffect(() => {
  dispatch(fetchWeatherData())
}, [dispatch])

useEffect(() => {
  if (weatherData && weatherData.currentConditions) {
    const { sunrise, sunset, temp } = weatherData.currentConditions;
    const fahrenheitToCelcius = ((temp - 32) * 5) / 9;
    const celcius = fahrenheitToCelcius.toFixed(1);
    if (temperature !== celcius) {
      setTemperature(celcius);
    }
    if (sunrise) {
      console.log(`Sunrise: ${formatTimeStamp(sunrise)} AM`);
    }
    if (sunset) {
      console.log(`Sunset: ${formatTimeStamp(sunset)} PM`);
    }
  }
}, [weatherData, temperature]);

function formatTimeStamp(timeStamp: string) {
  const date = new Date(timeStamp);
  return date.toLocaleTimeString();
}

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center">
      {weatherData === null ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row items-center w-full">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            {iconData === null ? (
              <p>Loading...</p>
            ) : (
              <WeatherType />
            )}
            {weatherData.currentConditions && (
              <Temperature />
            )}
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
<Sunrise />
<Sunset />
<WindDirection />
<WindSpeed />
          </div>
        </div>
      )}
    </div>
  );
}


export default WeatherCard;