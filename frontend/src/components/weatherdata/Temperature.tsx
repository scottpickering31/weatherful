import { useState, useEffect } from "react";

function Temperature({ weatherData }) {
  const [convertedTemp, setConvertedTemp] = useState(0);

  useEffect(() => {
    if (weatherData && Object.keys(weatherData.locations).length > 0) {
      const temperature =
        weatherData.locations[Object.keys(weatherData.locations)[0]]
          .currentConditions.temp;
      const fahrenheitToCelcius = ((Number(temperature) - 32) * 5) / 9;
      const celcius = fahrenheitToCelcius.toFixed(1);
      setConvertedTemp(celcius);
    }
  }, [weatherData]);

  return (
    <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
      <img
        src="/images/gifs/temperature.gif"
        className="h-16 w-16"
        alt="Temperature GIF"
      />
      <h2>Current Temperature:</h2>
      <h2 className="text-orange-500 font-bold text-4xl">{convertedTemp}°C</h2>
    </div>
  );
}

export default Temperature;
