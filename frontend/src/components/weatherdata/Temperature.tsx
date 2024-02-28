import { useEffect } from "react";


function Temperature() {
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
    <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
      <img src="/images/gifs/temperature.gif" className="h-16 w-16" />
      <h2>Current Temperature:</h2>
      <h2 className="text-orange-500 fold-bold text-4xl">{temperature}°C</h2>
    </div>
  );
}

export default temperature;
