import { formatTimeStamp } from "../../utils/formatTimeStamp";

function Sunset({ setSunsetTime }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/sunset.gif" />
      <h3>
        Sunset <span className="text-xl">↓</span>: <br />
        <span className="text-orange-500 font-bold">
          {formatTimeStamp(setSunsetTime()) + " AM"}
        </span>
      </h3>
    </div>
  );
}

export default Sunset;
