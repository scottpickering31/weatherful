import { useDispatch, useSelector } from "react-redux";
import { setIconData } from "../../state/reducers/iconDataSlice";

function WeatherType({ weatherData }) {
  const dispatch = useDispatch();
  const iconData = useSelector((state) => state.iconData.iconData);
  const weatherType =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions.icon;

  const getWeatherImages = {
    snow: "/images/gifs/snow.gif",
    "snow-showers-day": "/images/gifs/snow-showers-day-night.gif",
    "snow-showers-night": "/images/gifs/snow-showers-day-night.gif",
    "thunder-rain": "/images/gifs/thunder-rain-day-night.gif",
    "thunder-showers-day": "/images/gifs/thunder-showers-day-night.gif",
    "thunder-showers-night": "/images/gifs/thunder-showers-day-night.gif",
    rain: "/images/gifs/rain.gif",
    "showers-day": "/images/gifs/showers-day-night.gif",
    "showers-night": "/images/gifs/showers-day-night.gif",
    fog: "/images/gifs/fog.gif",
    cloudy: "/images/gifs/day-cloudy.gif",
    "partly-cloudy-day": "/images/gifs/day-cloudy.gif",
    "partly-cloudy-night": "/images/gifs/night-cloudy-clear.gif",
    "clear-day": "/images/gifs/day-clear.gif",
    "clear-night": "/images/gifs/night-cloudy-clear.gif",
  };

  const getIcon = (weatherType) => {
    if (weatherType in getWeatherImages) {
      dispatch(setIconData(getWeatherImages[weatherType]));
    } else {
      dispatch(setIconData("/images/placeholder-image.webp"));
    }
  };

  getIcon(weatherType);

  return (
    <div className="flex flex-col items-center text-center mb-10 text-xl">
      <img src={iconData} className="h-16 w-16" />
      <h2 className="font-bold">Current Weather:</h2>
      <h2 className="text-4xl font-bold text-orange-500">{weatherType}</h2>
    </div>
  );
}

export default WeatherType;
