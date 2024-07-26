import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import SearchBar from "../components/SearchBar";
import InnerWeatherCardContainer from "./InnerWeatherCardContainer";
import LoadingCard from "../components/cards/LoadingCard";

function WeatherCardContainer() {
  const fetchedStateData = useAppSelector(
    (state) => state.weatherData.weatherData
  );

  const dispatch = useAppDispatch();

  // Fetch weather data when component mounts or activeTimeFrame changes
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-medium">
      <div className="flex flex-row text-center">
        <div>
          <SearchBar />
        </div>
      </div>
      <InnerWeatherCardContainer />
    </div>
  );
}

export default WeatherCardContainer;
