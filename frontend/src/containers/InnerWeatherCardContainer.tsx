import DailyWeatherCard from "../components/cards/DailyWeatherCard";
import HourlyWeatherCard from "../components/cards/HourlyWeatherCard";
import OutfitAiCard from "../components/cards/OutfitAiCard";
import HistoricWeatherCard from "../components/cards/HistoricWeatherCard";
import FortnightWeatherCard from "../components/cards/FortnightWeatherCard";
import { useWeatherData } from "../hooks/useWeatherData";
import LoadingCard from "../components/cards/LoadingCard";
import { useAppSelector } from "../hooks/useReduxState";
import { useState } from "react";

const cardComponents = {
  daily: DailyWeatherCard,
  hourly: HourlyWeatherCard,
  clothes: OutfitAiCard,
  historic: HistoricWeatherCard,
  fortnight: FortnightWeatherCard,
};

const cardTitle = {
  daily: "Daily Weather Forecast in ",
  hourly: "Hourly Weather Forecast in ",
  historic: "Historic Weather Forecast in ",
  fortnight: "14 Day Weather Forecast in ",
};

function InnerWeatherCardContainer() {
  const [showLocation, setShowLocation] = useState(true);
  const activeTimeFrame = useAppSelector(
    (state) => state.timeFrame.activeTimeFrame
  );
  const weatherData = useWeatherData();

  const ActiveCardComponent = cardComponents[activeTimeFrame];

  const handleClick = () => {
    setShowLocation(!showLocation);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {weatherData ? (
        <>
          {cardTitle[activeTimeFrame] && (
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-2xl">{cardTitle[activeTimeFrame]}</h2>
              <div className="flex flex-row items-end gap-2">
                {showLocation ? (
                  <h1 className="text-orange-500 underline underline-offset-1 text-3xl">
                    {weatherData.id.slice(0, 1).toUpperCase() +
                      weatherData.id.slice(1)}
                  </h1>
                ) : (
                  <h1 className="text-orange-500 underline underline-offset-1 text-3xl">
                    {weatherData.address}
                  </h1>
                )}
                <button
                  onClick={handleClick}
                  className="text-blue-500 underline-offset-1 text-xs"
                >
                  (...{showLocation ? "show" : "hide"} full location)
                </button>
              </div>
            </div>
          )}
          {ActiveCardComponent && (
            <div className="flex items-center justify-center w-3/4">
              <ActiveCardComponent weatherData={weatherData} />
            </div>
          )}
        </>
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}

export default InnerWeatherCardContainer;
