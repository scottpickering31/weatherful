import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const locations = useSelector((state) => state.weatherData.locations);

  return (
    <div className="flex justify-center items-center h-2/3 w-full mb-20 flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {locations ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {locations.toUpperCase().slice(0, 1) + locations.slice(1)}
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
