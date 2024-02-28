import { useSelector } from "react-redux";
import Sunset from "./weatherdata/Sunset";
import Sunrise from "./weatherdata/Sunrise";
import WindDirection from "./weatherdata/WindDirection";
import WindSpeed from "./weatherdata/WindSpeed";
import Temperature from "./weatherdata/Temperature";
import WeatherType from "./weatherdata/WeatherType";

function WeatherCard() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const iconData = useSelector((state) => state.iconData.iconData);

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center">
      {weatherData === null ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row items-center w-full">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            {iconData === null ? <p>Loading...</p> : <WeatherType />}
            {weatherData.currentConditions && <Temperature />}
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <Sunrise />
            <Sunset />
            <WindDirection />
            <WindSpeed />
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
