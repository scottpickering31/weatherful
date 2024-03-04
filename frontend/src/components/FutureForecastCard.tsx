import { useSelector } from "react-redux";

function FutureForecastCard() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  const futureForecastData =
    weatherData &&
    weatherData.locations[Object.keys(weatherData.locations)[0]].values;

  console.log(futureForecastData);

  return <div></div>;
}

export default FutureForecastCard;
