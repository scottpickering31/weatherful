import { useSelector, useDispatch } from "react-redux";
import { fetchRandomCity } from "../state/reducers/weatherDataSlice";
import { getWeatherImages } from "../helpers/weatherImageHelper";
import { useEffect, useState } from "react";

function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const iconData = useSelector((state) => state.iconData.iconData);
  const [temperature, setTemperature] = useState("");
  const [windArrow, setWindArrow] = useState("");
  const [windDigit, setWindDigit] = useState("");

  useEffect(() => {
    dispatch(fetchRandomCity());
  }, [dispatch]);

  let weatherImage = "";

  if (weatherData && weatherData.currentConditions) {
    const icons = weatherData.currentConditions.icon;
    weatherImage = getWeatherImages(icons);
  }

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

  useEffect(() => {
    if (weatherData && weatherData.currentConditions) {
      let direction = weatherData.currentConditions.wdir;
      console.log(direction);
      switch (true) {
        case direction <= 20:
          setWindDigit("North");
          break;
        case direction <= 80:
          setWindDigit("Northeast");
          break;
        case direction <= 120:
          setWindDigit("East");
          break;
        case direction <= 160:
          setWindDigit("Southeast");
          break;
        case direction <= 200:
          setWindDigit("South");
          break;
        case direction <= 240:
          setWindDigit("Southwest");
          break;
        case direction <= 280:
          setWindDigit("West");
          break;
        case direction <= 320:
          setWindDigit("Northwest");
          break;
        default:
          setWindDigit("North");
      }
      setWindArrow(direction.toString());
    }
  }, [weatherData]);

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
              <div className="flex flex-col items-center text-center mb-10 text-xl">
                <img src={weatherImage} className="h-16 w-16" />
                <h2 className="font-bold">Current Weather:</h2>
                <h2 className="text-4xl font-bold text-orange-500">
                  {iconData}
                </h2>
              </div>
            )}
            {weatherData.currentConditions && (
              <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
                <img src="/images/gifs/temperature.gif" className="h-16 w-16" />
                <h2>Current Temperature:</h2>
                <h2 className="text-orange-500 fold-bold text-4xl">
                  {temperature}°C
                </h2>
              </div>
            )}
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/gifs/sunrise.gif" />
              <h3>
                Sunrise <span className="text-xl">↑</span>: <br />
                {/* <span className="text-orange-500 font-bold">
                  {formatTimeStamp(weatherData.currentConditions.sunrise)} AM
                </span> */}
              </h3>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/gifs/sunset.gif" />
              <h3>
                Sunset <span className="text-xl">↓</span>: <br />
                {/* <span className="text-orange-500 font-bold">
                  {formatTimeStamp(weatherData.currentConditions.sunset)} PM
                </span> */}
              </h3>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img
                src="/images/gifs/wind-arrow.gif"
                style={{ transform: `rotate(${windArrow}deg)` }}
              />
              <h3>
                Wind Direction:{" "}
                <span className="text-orange-500 font-bold">{windDigit}</span>
              </h3>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src="/images/gifs/wind.gif" />
              <h3>
                Wind Speed:{" "}
                {/* <span className="text-orange-500 font-bold">
                  {weatherData.currentConditions.wspd}
                  km/h
                </span>{" "} */}
              </h3>
            </div>
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
