import FutureForecastCard from "../components/FutureForecastCard";
import { useSelector } from "react-redux";

function FutureForecastContainer() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  if (weatherData) {
    console.log(weatherData);
  }

  return (
    <div className="flex justify-center items-center h-2/3 w-full flex-col">
      {weatherData && (
        <div className="overflow-y-auto mt-20 mb-20 w-screen shadow-2xl">
          <p>Future Forecastss</p>
          <div>
            <FutureForecastCard weatherData={weatherData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FutureForecastContainer;
