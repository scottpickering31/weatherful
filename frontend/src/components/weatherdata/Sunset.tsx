import { formatTimeStamp } from "../../utils/formatTimeStamp";

function Sunset({ setSunsetTime }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-1/3">
        <img src="/images/gifs/sunset.gif" />
      </div>
      <div className="w-2/3">
        <h3 className="text-center">
          Sunset <span className="text-xl">↓</span>: <br />
          <span className="text-orange-500 font-bold">
            {formatTimeStamp(setSunsetTime()) + " AM"}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Sunset;
