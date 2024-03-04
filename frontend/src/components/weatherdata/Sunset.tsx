import { formatTimeStamp } from "../../utils/formatTimeStamp";

function Sunset({ weatherData }) {
  const sunsetTime =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions.sunset;

  console.log(sunsetTime);

  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/sunset.gif" />
      <h3>
        Sunset <span className="text-xl">↓</span>: <br />
        <span className="text-orange-500 font-bold">
          {sunsetTime ? formatTimeStamp(sunsetTime) + " PM" : "Loading..."}
        </span>
      </h3>
    </div>
  );
}

export default Sunset;
