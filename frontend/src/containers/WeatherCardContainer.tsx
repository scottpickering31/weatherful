import DailyWeatherCard from "../components/DailyWeatherCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import HourlyWeatherCard from "../components/HourlyWeatherCard";
import ToggleHours from "../components/buttons/ToggleHours";
import { setFutureWeatherData } from "../state/reducers/futureWeatherData";

function WeatherCardContainer() {
  const dispatch = useDispatch();
  const fetchedStateData = useSelector(
    (state) => state.weatherData.weatherData
  );

  useEffect(() => {
    dispatch(fetchWeatherData());
    dispatch(setFutureWeatherData(fetchedStateData));
  }, []);

  const weatherData =
    fetchedStateData &&
    fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]];

  console.log(fetchedStateData, weatherData);

  const activeTimeFrame = useSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {weatherData ? (
          <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
            {weatherData.id.toUpperCase()}
          </h1>
        ) : (
          <p className="text-3xl h-small w-small">Loading Forecast...</p>
        )}
      </div>
      {weatherData && activeTimeFrame === "daily" ? (
        <div className="flex items-center justify-center h-small w-small">
          <DailyWeatherCard weatherData={weatherData} />
        </div>
      ) : weatherData && activeTimeFrame === "hourly" ? (
        <div className="h-small w-small">
          <HourlyWeatherCard weatherData={weatherData} />
        </div>
      ) : null}
      <div className="p-3">
        <ToggleHours />
      </div>
    </div>
  );
}

export default WeatherCardContainer;
