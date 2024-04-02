import FutureForecastCard from "../components/FutureForecastCard";
import { useAppSelector } from "../hooks/useReduxState";

function FutureForecastContainer() {
  const futureWeatherData = useAppSelector(
    (state) => state.weatherData.futureWeatherData
  );

  return (
    <div className="w-full">
      {futureWeatherData && (
        <div className="flex justify-center items-center h-2/3 flex-col mt-10">
          <h1 className="text-center text-3xl underline underline-offset-8">
            Future Forecast in{" "}
            <span className="text-orange-500 font-bold">
              {futureWeatherData.locations[
                Object.keys(futureWeatherData.locations)[0]
              ].name.toUpperCase()}
            </span>{" "}
            (15 day)
          </h1>
          <div className="overflow-x-auto mt-20 mb-20 w-full">
            <div>
              <FutureForecastCard futureWeatherData={futureWeatherData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FutureForecastContainer;
