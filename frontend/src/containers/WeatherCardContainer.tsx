import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  const weatherLocation = weatherData
    ? Object.keys(weatherData.locations)[0]
    : null;

  return (
    <div className="flex justify-center items-center h-2/3 w-full flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {weatherLocation ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {weatherLocation}
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
