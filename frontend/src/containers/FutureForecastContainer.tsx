import FutureForecastCard from "../components/FutureForecastCard";
import { useSelector } from "react-redux";

function FutureForecastContainer() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  if (weatherData) {
    console.log(weatherData);
  }

  return (
    <div className="flex justify-center items-center h-2/3 w-full flex-col mt-10">
      <h1 className="text-center text-3xl underline underline-offset-8 ">
        <span className="text-orange-500">Future</span> Forecast (15 day)
      </h1>
      {weatherData && (
        <div className="overflow-y-auto mt-20 mb-20 w-screen">
          <div>
            <FutureForecastCard weatherData={weatherData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FutureForecastContainer;
