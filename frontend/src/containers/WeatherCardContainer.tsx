import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const [cityName, setCityName] = useState<string>("");

  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    if (weatherData) {
      const cityKey = Object.keys(weatherData.locations)[0];
      setCityName(weatherData.locations[cityKey].name);
    }
  }, [weatherData]);

  return (
    <div className="flex justify-center items-center h-2/3 w-full mb-20 flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {cityName ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {cityName.toUpperCase().slice(0, 1) + cityName.slice(1)}
          </h1>
        ) : (
          <p>No city name available</p>
        )}
      </div>
      <div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default WeatherCardContainer;
