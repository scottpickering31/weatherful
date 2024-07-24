import { formatDate } from "../../utils/formateDate";
import { formatTemperature } from "../../utils/formatTemperature";

function FortnightWeatherCard({ fortnightWeatherData }) {
  const futureForecastData =
    fortnightWeatherData.locations[
      Object.keys(fortnightWeatherData.locations)[0]
    ].values;

  console.log(futureForecastData);

  const formattedDates = futureForecastData.map((data) =>
    formatDate(data.datetime)
  );

  const formattedTemperature = futureForecastData.map((data) =>
    formatTemperature(data.temp)
  );

  return (
    <div className="rounded-xl flex items-center w-full m-2">
      {futureForecastData.map((data, index) => (
        <div
          key={index}
          className="flex flex-row items-center bg-white mx-2 rounded-2xl border-4 border-slate-300 shadow-xl p-5"
        >
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <p key={index}>{data.conditions}</p>
          </div>
          <div className="p-10 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <p>{formattedDates[index]}</p>
            <p>{formattedTemperature[index]}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FortnightWeatherCard;
