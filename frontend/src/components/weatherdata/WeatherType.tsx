import { getWeatherImages } from "../../utils/weatherImageHelper";
import { setIconData } from "../../state/reducers/iconDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function WeatherType({ weatherData }) {
  const dispatch = useDispatch();
  const iconData = useSelector((state) => state.iconData.iconData);
  const weatherType =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions;

  useEffect(() => {
    if (weatherData && weatherData.currentConditions) {
      const icons = weatherType.icon;
      const newWeatherImage = getWeatherImages(icons);
      console.log(newWeatherImage);
      dispatch(setIconData(newWeatherImage));
    }
  }, [weatherData]);

  return (
    <div className="flex flex-col items-center text-center mb-10 text-xl">
      <img src={iconData} className="h-16 w-16" />
      <h2 className="font-bold">Current Weather:</h2>
      <h2 className="text-4xl font-bold text-orange-500">{weatherType.icon}</h2>
    </div>
  );
}

export default WeatherType;
