import { formatTimeStamp } from "../../utils/formatTimeStamp";

function Sunrise({ weatherData }) {
  const sunriseTime =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions.sunrise;

  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/sunrise.gif" alt="Sunrise GIF" />
      <h3>
        Sunrise <span className="text-xl">↑</span>: <br />
        <span className="text-orange-500 font-bold">
          {sunriseTime ? formatTimeStamp(sunriseTime) + " AM" : "Loading..."}
        </span>
      </h3>
    </div>
  );
}

export default Sunrise;
