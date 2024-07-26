import { formatTimeStamp } from "../../utils/formatTimeStamp";

function Sunrise({ setSunriseTime }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="w-1/3">
        <img src="/images/gifs/sunrise.gif" alt="Sunrise GIF" />
      </div>
      <div className="w-2/3">
        <h3>
          Sunrise <span className="inline text-xl">↑</span>: <br />
          <span className="inline text-orange-500 font-bold">
            {formatTimeStamp(setSunriseTime()) + " AM"}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Sunrise;
