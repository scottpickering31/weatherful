import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const location = useSelector((state) => state.weatherData.weatherData);
  return (
    <div className="flex justify-center items-center h-2/3 w-full mb-20 flex-col">
      {location === null ? (
        <></>
      ) : (
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {location.name[0].toUpperCase() + location.name.slice(1)}
          </h1>
        </div>
      )}
      <div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default WeatherCardContainer;
