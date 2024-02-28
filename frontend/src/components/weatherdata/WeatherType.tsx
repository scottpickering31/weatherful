import { useSelector } from "react-redux";
import { getWeatherImages } from "../../helpers/weatherImageHelper";

function weathertype() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  let weatherImage = "";

  if (weatherData && weatherData.currentConditions) {
    const icons = weatherData.currentConditions.icon;
    weatherImage = getWeatherImages(icons);
  }
  return (
    <div className="flex flex-col items-center text-center mb-10 text-xl">
      <img src={weatherImage} className="h-16 w-16" />
      <h2 className="font-bold">Current Weather:</h2>
      <h2 className="text-4xl font-bold text-orange-500"></h2>
    </div>
  );
}

export default weathertype;
