import FutureForecastCard from "../components/FutureForecastCard";
import { useSelector } from "react-redux";

function FutureForecastContainer() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  return (
    <div className="w-full">
      {weatherData && (
        <div className="flex justify-center items-center h-2/3 flex-col mt-10">
          <h1 className="text-center text-3xl underline underline-offset-8">
            Future Forecast in{" "}
            <span className="text-orange-500 font-bold">
              {weatherData.locations[
                Object.keys(weatherData.locations)[0]
              ].name.toUpperCase()}
            </span>{" "}
            (15 day)
          </h1>
          <div className="overflow-x-auto mt-20 mb-20 w-full">
            <div>
              <FutureForecastCard weatherData={weatherData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FutureForecastContainer;
