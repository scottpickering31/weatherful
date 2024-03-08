import { useDispatch, useSelector } from "react-redux";
import { setIconData } from "../../state/reducers/iconDataSlice";
import weatherImages from "../../utils/formatWeatherImages";

function WeatherType({ weatherData }) {
  const dispatch = useDispatch();
  const iconData = useSelector((state) => state.iconData.iconData);
  const weatherType =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions.icon;

  const getIcon = (weatherType) => {
    if (weatherType in weatherImages) {
      dispatch(setIconData(weatherImages[weatherType]));
    } else {
      dispatch(setIconData("/images/placeholder-image.webp"));
    }
  };

  getIcon(weatherType);

  return (
    <div className="flex flex-col items-center text-center text-xl border-b-2">
      <img src={iconData} className="h-16 w-16" alt="Weather Icon" />
      <h2 className="font-bold">Current Weather:</h2>
      <h2 className="text-4xl font-bold text-orange-500 mb-5">{weatherType}</h2>
    </div>
  );
}

export default WeatherType;
