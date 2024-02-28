import { useEffect } from "react";

function Sunset() {
  useEffect(() => {
    if (weatherData && weatherData.currentConditions) {
      const { sunrise, sunset, temp } = weatherData.currentConditions;
      const fahrenheitToCelcius = ((temp - 32) * 5) / 9;
      const celcius = fahrenheitToCelcius.toFixed(1);
      if (temperature !== celcius) {
        setTemperature(celcius);
      }
      if (sunrise) {
        console.log(`Sunrise: ${formatTimeStamp(sunrise)} AM`);
      }
      if (sunset) {
        console.log(`Sunset: ${formatTimeStamp(sunset)} PM`);
      }
    }
  }, [weatherData, temperature]);

  function formatTimeStamp(timeStamp: string) {
    const date = new Date(timeStamp);
    return date.toLocaleTimeString();
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/sunrise.gif" />
      <h3>
        Sunset <span className="text-xl">↑</span>: <br />
        {/* <span className="text-orange-500 font-bold">
      {formatTimeStamp(weatherData.currentConditions.sunset)} AM
    </span> */}
      </h3>
    </div>
  );
}

export default Sunset;
