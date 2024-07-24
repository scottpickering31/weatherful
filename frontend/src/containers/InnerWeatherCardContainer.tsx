import DailyWeatherCard from "../components/cards/DailyWeatherCard";
import HourlyWeatherCard from "../components/cards/HourlyWeatherCard";
import OutfitAiCard from "../components/cards/OutfitAiCard";
import HistoricWeatherCard from "../components/cards/HistoricWeatherCard";
import FutureForecastContainer from "./FutureForecastContainer";
import { useAppSelector } from "../hooks/useReduxState";

function InnerWeatherCardContainer() {
  const fetchedStateData = useAppSelector(
    (state) => state.weatherData.weatherData
  );

  const activeTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );

  const weatherData = fetchedStateData?.locations
    ? fetchedStateData.locations[Object.keys(fetchedStateData.locations)[0]]
    : null;

  return (
    <div>
      {weatherData && activeTimeFrame === "daily" && (
        <div className="flex items-center justify-center w-3/4">
          <DailyWeatherCard weatherData={weatherData} />
        </div>
      )}
      {weatherData && activeTimeFrame === "hourly" && (
        <div className="flex items-center justify-center w-3/4">
          <HourlyWeatherCard weatherData={weatherData} />
        </div>
      )}
      {weatherData && activeTimeFrame === "clothes" && (
        <div className="flex items-center justify-center w-3/4">
          <OutfitAiCard weatherData={weatherData} />
        </div>
      )}
      {weatherData && activeTimeFrame === "historic" && (
        <div className="flex items-center justify-center w-3/4">
          <HistoricWeatherCard weatherData={weatherData} />
        </div>
      )}
      {weatherData && activeTimeFrame === "fortnight" && (
        <div className="flex items-center justify-center w-3/4">
          <FutureForecastContainer />
        </div>
      )}
    </div>
  );
}

export default InnerWeatherCardContainer;
