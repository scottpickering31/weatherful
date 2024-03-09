import DailyWeatherCard from "../components/DailyWeatherCard";
import { useSelector } from "react-redux";
import HourlyWeatherCard from "../components/HourlyWeatherCard";
import ToggleHours from "../components/buttons/ToggleHours";

function WeatherCardContainer() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const activeTimeFrame = useSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  const weatherLocation = weatherData
    ? Object.keys(weatherData.locations)[0]
    : null;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {weatherLocation ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {weatherLocation}
          </h1>
        ) : (
          <p className="text-3xl">Loading Forecast...</p>
        )}
      </div>
      {activeTimeFrame === "daily" ? (
        <div className="flex items-center justify-center">
          <DailyWeatherCard />
        </div>
      ) : (
        <div>
          <HourlyWeatherCard />
        </div>
      )}
      <div>
        <ToggleHours />
      </div>
    </div>
  );
}

export default WeatherCardContainer;
