import Sunset from "./weatherdata/Sunset";
import Sunrise from "./weatherdata/Sunrise";
import WindDirection from "./weatherdata/WindDirection";
import WindSpeed from "./weatherdata/WindSpeed";
import Temperature from "./weatherdata/Temperature";
import WeatherType from "./weatherdata/WeatherType";
import WeatherDate from "./weatherdata/WeatherDate";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";

function DailyWeatherCard({ weatherData }) {
  const [convertedTemp, setConvertedTemp] = useState(0);
  const [windDigit, setWindDigit] = useState("");
  const [windArrow, setWindArrow] = useState("");

  if (weatherData) {
    console.log(weatherData);
  }

  // Logic for WeatherDate Component

  const setDate = () => {
    const rawDate = weatherData.currentConditions.datetime;
    const formattedDate = format(new Date(rawDate), "eee d MMMM y");

    return formattedDate;
  };

  // Logic for Sunrise Component

  const setSunriseTime = () => {
    const sunriseTime = weatherData.currentConditions.sunrise;
    const sunriseTimeFormatted = sunriseTime.slice(0, 16);
    return sunriseTimeFormatted;
  };

  // Logic for Sunset Component

  const setSunsetTime = () => {
    const sunsetTime = weatherData.currentConditions.sunset;
    const sunsetTimeFormatted = sunsetTime.slice(0, 16);
    return sunsetTimeFormatted;
  };

  // Logic for Temperature Component

  useEffect(() => {
    if (weatherData) {
      const temperature = weatherData.currentConditions.temp;
      const fahrenheitToCelcius = ((Number(temperature) - 32) * 5) / 9;
      const celcius = fahrenheitToCelcius.toFixed(1);
      setConvertedTemp(celcius);
    }
  }, [weatherData]);

  // Logic for Weather Type Component

  // Logic for Wind Direction Component

  const direction = weatherData.currentConditions.wdir;
  useEffect(() => {
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
  }, [weatherData]);

  // Logic for Wind Speed Component

  const windSpeed = weatherData.currentConditions.wspd;

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center h-small w-5/6">
      {weatherData ? (
        <div className="flex flex-row items-center">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <WeatherDate setDate={setDate} />
            {/* <WeatherType weatherData={weatherData} /> */}
            <Temperature convertedTemp={convertedTemp} />
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <Sunrise setSunriseTime={setSunriseTime} />
            <Sunset setSunsetTime={setSunsetTime} />
            <WindDirection
              windArrow={windArrow}
              windDigit={windDigit}
              direction={direction}
            />
            <WindSpeed windSpeed={windSpeed} />
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

export default DailyWeatherCard;
