import { useSelector } from "react-redux";

function FutureForecastCard() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  const futureForecastData =
    weatherData &&
    weatherData.locations[Object.keys(weatherData.locations)[0]].values;

  console.log(futureForecastData);

  return (
    <div>
      {futureForecastData.map((data, index) => (
        <p key={index}>{data.temp}</p>
      ))}
      <p>Future Forecast</p>
      <p>{futureForecastData && futureForecastData[0].temp}</p>
    </div>
  );
}

export default FutureForecastCard;
