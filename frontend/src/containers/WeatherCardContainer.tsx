import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import {
  fetchWeatherData,
  fetchFutureForecastData,
} from "../state/reducers/weatherDataSlice";
import DailyWeatherCard from "../components/DailyWeatherCard";
import HourlyWeatherCard from "../components/HourlyWeatherCard";
import ToggleHours from "../components/buttons/ToggleHours";
import { fetchWeatherDataResponse } from "../types/fetchedApiDataTypes";

function WeatherCardContainer() {
  const dispatch = useAppDispatch();
  const fetchedStateData: fetchWeatherDataResponse | null = useAppSelector(
    (state) => state.weatherData.weatherData
  );
  const activeTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  console.log(fetchedStateData);

  // Fetch weather data when component mounts or activeTimeFrame changes
  useEffect(() => {
    dispatch(fetchWeatherData());
    dispatch(fetchFutureForecastData());
  }, []);

  // Render weather data based on activeTimeFrame
  const weatherData = fetchedStateData?.locations
    ? fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]]
    : null;

  console.log(weatherData);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="mb-5 text-3xl">Today's Weather Forecast in:</h2>
        {weatherData ? (
          <div className="flex flex-row items-center gap-5">
            <h1 className="text-orange-500 underline underline-offset-1 text-4xl">
              {weatherData.id.toUpperCase()}
            </h1>
            <img src="/images/icons/star.svg" className="w-10 h-10" />
          </div>
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
