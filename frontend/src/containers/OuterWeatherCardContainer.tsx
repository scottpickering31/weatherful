import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import SearchBar from "../components/SearchBar";
import InnerWeatherCardContainer from "./InnerWeatherCardContainer";
import LoadingCard from "../components/cards/LoadingCard";

function WeatherCardContainer() {
  const fetchedStateData = useAppSelector(
    (state) => state.weatherData.weatherData,
  );

  const dispatch = useAppDispatch();

  console.log(fetchedStateData);

  // Fetch weather data when component mounts or activeTimeFrame changes
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  // Render weather data based on activeTimeFrame
  const weatherData = fetchedStateData?.locations
    ? fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]]
    : null;

  console.log(weatherData);

  return (
    <div className="flex justify-center items-center flex-col h-medium">
      <div className="flex flex-row text-center">
        <div>
          <SearchBar />
        </div>
      </div>
      {weatherData ? (
        <div className="flex flex-row items-center gap-5">
          <h2 className="text-2xl ">Today's Weather Forecast in:</h2>
          <h1 className="text-orange-500 underline underline-offset-1 text-3xl">
            {weatherData.id.toUpperCase()}
          </h1>
        </div>
      ) : (
        <LoadingCard />
      )}
      <InnerWeatherCardContainer />
    </div>
  );
}

export default WeatherCardContainer;
