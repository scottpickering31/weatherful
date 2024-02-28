import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const location = useSelector((state) => state.weatherData.location);

  return (
    <div className="flex justify-center items-center h-2/3 w-full mb-20 flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {location ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {location.toUpperCase().slice(0, 1) + location.slice(1)}
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
