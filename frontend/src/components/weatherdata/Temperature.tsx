import { useSelector } from "react-redux";
import { useState } from "react";

function Temperature() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  const [temperature, setTemperature] = useState(0);

  if (weatherData && weatherData.currentConditions) {
    const { temp } = weatherData.currentConditions;
    const fahrenheitToCelcius = ((temp - 32) * 5) / 9;
    const celcius = fahrenheitToCelcius.toFixed(1);
    setTemperature(celcius);
  }

  return (
    <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
      <img src="/images/gifs/temperature.gif" className="h-16 w-16" />
      <h2>Current Temperature:</h2>
      <h2 className="text-orange-500 fold-bold text-4xl">{temperature}°C</h2>
    </div>
  );
}

export default Temperature;
