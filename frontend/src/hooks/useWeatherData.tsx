import { useAppSelector } from '../hooks/useReduxState';

export const useWeatherData = () => {
  const fetchedStateData = useAppSelector((state) => state.weatherData.weatherData);

  const weatherData = fetchedStateData?.locations
    ? fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]]
    : null;

  return weatherData;
};