import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import {
  fetchWeatherData,
  fetchFutureForecastData,
} from "../state/reducers/weatherDataSlice";
import DailyWeatherCard from "../components/DailyWeatherCard";
import HourlyWeatherCard from "../components/HourlyWeatherCard";
import ToggleHours from "../components/buttons/ToggleHours";

export interface fetchWeatherDataResponse {
  columns: { [key: string]: Column };
  remainingCost: number;
  queryCost: number;
  messages: null;
  locations: Locations;
}

export interface Locations {
  stationContributions: null;
  values: Value[];
  id: string;
  address: string;
  name: string;
  index: number;
  latitude: number;
  longitude: number;
  distance: number;
  time: number;
  tz: string;
  currentConditions: CurrentConditions;
  alerts: null;
}

export interface Value {
  wdir: number;
  uvindex: number;
  datetimeStr: Date;
  preciptype: string;
  cin: number;
  cloudcover: number;
  pop: number;
  mint: number;
  datetime: number;
  precip: number;
  solarradiation: number;
  dew: number;
  humidity: number;
  temp: number;
  maxt: number;
  visibility: number;
  wspd: number;
  severerisk: number;
  solarenergy: number;
  heatindex: null;
  snowdepth: number;
  sealevelpressure: number;
  snow: number;
  wgust: number;
  conditions: string;
  windchill: number;
  cape: number;
}

export interface Column {
  id: string;
  name: string;
  type: number;
  unit: null | string;
}

export interface CurrentConditions {
  wdir: number;
  temp: number;
  sunrise: Date;
  visibility: number;
  wspd: number;
  icon: string;
  stations: string;
  heatindex: null;
  cloudcover: null;
  datetime: Date;
  precip: number;
  moonphase: number;
  snowdepth: null;
  sealevelpressure: number;
  dew: number;
  sunset: Date;
  humidity: number;
  wgust: number;
  windchill: null;
}

function WeatherCardContainer() {
  const dispatch = useAppDispatch();
  const fetchedStateData: fetchWeatherDataResponse | null = useAppSelector(
    (state) => state.weatherData.weatherData
  );

  console.log(fetchedStateData);

  // Fetch weather data when component mounts or activeTimeFrame changes
  useEffect(() => {
    dispatch(fetchWeatherData());
    dispatch(fetchFutureForecastData());
  }, []);

  // Render weather data based on activeTimeFrame
  const weatherData =
    fetchedStateData &&
    fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]];

  console.log(weatherData);

  const activeTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

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
