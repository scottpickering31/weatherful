import weatherByClothes from "/public/images/icons/weather-by-clothes.svg";
import weatherByDay from "/public/images/icons/weather-by-day.svg";
import weatherByHour from "/public/images/icons/weather-by-hour.svg";
import weatherByFortnight from "/public/images/icons/weather-by-fortnight.svg";
import weatherByHistory from "/public/images/icons/weather-by-history.svg";

function NavBar() {
  return (
    <div className="border-t-2 border-r-2 border-b-2 border-slate-700 bg-slate-500 rounded-br-lg h-full">
      <div className="text-center h-full">
        <div className="rounded-full flex flex-row items-center justify-center h-1/5 gap-2">
          <img
            src="/images/placeholder-image.webp"
            className="h-16 w-16 rounded-full cursor-pointer"
          />
          <div className=" bg-slate-50 rounded-full py-3 w-3/4">
            <p className="text-gray-300 opacity-80">Logged in as:</p>
            <p>TEST</p>
            <p className="font-bold text-xl">{}</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-2 h-4/5 items-center cursor-pointer">
          <div className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5">
            <img
              src={weatherByClothes}
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="w-2/5"
            />
            <p className="text-slate-200 text-xl hover:bg-slate-400 w-3/5">
              Outfit Recommendations
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5">
            <img
              src={weatherByHour}
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="w-2/5"
            />
            <p className="text-slate-200 text-xl hover:bg-slate-400 w-3/5">
              Weather By Hour
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5">
            <img
              src={weatherByDay}
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="w-2/5"
            />
            <p className="text-slate-200 text-xl hover:bg-slate-400 w-3/5">
              Weather By Day
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5">
            <img
              src={weatherByFortnight}
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="w-2/5"
            />
            <p className="text-slate-200 text-xl hover:bg-slate-400 w-3/5">
              14 Day Weather Forecast
            </p>
          </div>
          <div className="flex flex-row w-full items-center justify-evenly hover:bg-slate-400 h-1/5">
            <img
              src={weatherByHistory}
              style={{ width: "2.5rem", height: "2.5rem" }}
              className="w-2/5"
            />
            <p className="text-slate-200 text-xl hover:bg-slate-400 w-3/5">
              Historic Weather Forecasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
