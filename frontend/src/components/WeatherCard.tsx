import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../state/reducers/weatherDataSlice";
import { useEffect } from "react";

function WeatherCard() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getRandomCityWeather = async () => {
  //     const randomLocation = [
  //       "London",
  //       "York",
  //       "Liverpool",
  //       "Manchester",
  //       "Brighton",
  //     ];
  //     const randomLocationMath = Math.floor(
  //       Math.random() * randomLocation.length
  //     );
  //     const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${randomLocation[randomLocationMath]}&contentType=json&shortColumnNames=0`;

  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //         "X-RapidAPI-Host": import.meta.env.VITE_BASE_URL,
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result.locations[Object.keys(result.locations)[0]]);
  //       dispatch(
  //         setWeatherData(result.locations[Object.keys(result.locations)[0]])
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getRandomCityWeather();
  // }, []);

  const weatherData = useSelector((state) => state.weatherData.weatherData);

  return (
    <div className="border-4 border-slate-300 p-5 rounded-xl text-center h-full">
      {weatherData === null ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row justify-center items-center h-full">
          <div>
            {weatherData.address && <h1>{weatherData.address}</h1>}
            <img
              src="../../public/images/placeholder-image.webp"
              className="h-40 w-40"
            />
            {weatherData.currentConditions && (
              <h3>Temperature: {weatherData.currentConditions.temp} °C</h3>
            )}
          </div>
          <div>
            <h3>Forecast: {weatherData.currentConditions.sunrise}</h3>
            <h3>Wind Direction: {weatherData.currentConditions.wdir}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
