import { useSelector } from "react-redux";

function Sunrise() {
  const weatherData = useSelector((state) => state.weatherData.weatherData);
  function formatTimeStamp(timeStamp: string) {
    const date = new Date(timeStamp);
    return date.toLocaleTimeString();
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/sunrise.gif" />
      <h3>
        Sunrise <span className="text-xl">↑</span>: <br />
        <span className="text-orange-500 font-bold">
          {formatTimeStamp(weatherData.currentConditions.sunrise)} AM
        </span>
      </h3>
    </div>
  );
}

export default Sunrise;
