import WeatherCard from "../components/WeatherCard";
import { useSelector } from "react-redux";

function WeatherCardContainer() {
  const location = useSelector((state) => state.weatherData.weatherData);
  return (
    <div className="flex justify-center items-center h-2/3 w-full mb-20 flex-col">
      {location === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="mb-5 text-3xl">
            Current Forecast in {""}
            <span className="text-orange-500 underline underline-offset-1 text-4x">
              {location.address}
            </span>
          </h2>
        </div>
      )}
      <div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default WeatherCardContainer;
