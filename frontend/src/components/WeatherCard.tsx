import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../state/reducers/weatherDataSlice";
import { getWeatherImages } from "../helpers/weatherImageHelper";
import { useEffect, useState } from "react";
import "./WeatherCard.css";

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const iconData = useSelector((state) => state.iconData.iconData);
  const [temperature, setTemperature] = useState("");
  const [windDirection, setWindDirection] = useState("");

  useEffect(() => {
    const getRandomCityWeather = async () => {
      const randomLocation = [
        "London",
        "York",
        "Liverpool",
        "Manchester",
        "Brighton",
      ];
      const randomLocationMath = Math.floor(
        Math.random() * randomLocation.length
      );
      const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?iconSet=icons2&aggregateHours=24&location=${randomLocation[randomLocationMath]}&contentType=json&shortColumnNames=0`;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_BASE_URL,
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (response.ok) {
          dispatch(
            setWeatherData(result.locations[Object.keys(result.locations)[0]])
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    getRandomCityWeather();
  }, []);

  let weatherImage = "";

  if (weatherData && weatherData.currentConditions) {
    const icons = weatherData.currentConditions.icon;
    weatherImage = getWeatherImages(icons);
  }

  if (weatherData && weatherData.currentConditions) {
    const fahrenheitToCelcius =
      ((weatherData.currentConditions.temp - 32) * 5) / 9;
    const celcius = fahrenheitToCelcius.toFixed(1);
    if (temperature !== celcius) {
      setTemperature(celcius);
    }
  }

  useEffect(() => {
    if (weatherData && weatherData.currentConditions) {
      let direction = weatherData.currentConditions.wdir;
      direction.toString();
      setWindDirection(direction);
    }
  }, [weatherData]);

  return (
    <div className="border-4 border-slate-300 w-11/12 rounded-xl flex items-center">
      {weatherData === null ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row items-center w-full">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            {iconData === null ? (
              <p>Loading...</p>
            ) : (
              <div className="flex flex-row items-center gap-5 text-3xl">
                <img src={weatherImage} className="h-20 w-20" />
                <h2>{iconData}</h2>
              </div>
            )}
            {weatherData.currentConditions && (
              <div className="flex flex-row items-center gap-2">
                <img src="/images/gifs/temperature.gif" className="h-20 w-20" />
                <h3 className="text-3xl text-center">Current Temperature:</h3>
                <h3 className="text-3xl text-center">{temperature}°C</h3>
              </div>
            )}
          </div>
          <div className="p-5 w-1/2 text-center">
            <h3>
              Sunrise: {formatTimeStamp(weatherData.currentConditions.sunrise)}
              AM
            </h3>
            <h3>
              Sunset: {formatTimeStamp(weatherData.currentConditions.sunset)} PM
            </h3>
            <div className="flex flex-row gap-2 items-center justify-center">
              <img
                src="/images/gifs/wind-arrow.gif"
                style={{ transform: `rotate(${windDirection}deg)` }}
              />
              <h3>Wind Direction: {weatherData.currentConditions.wdir}</h3>
            </div>
            <h3>Wind Speed: {weatherData.currentConditions.wspd} km/h</h3>
          </div>
        </div>
      )}
    </div>
  );
}

function formatTimeStamp(timeStamp: string) {
  const date = new Date(timeStamp);
  return date.toLocaleTimeString();
}

export default WeatherCard;
