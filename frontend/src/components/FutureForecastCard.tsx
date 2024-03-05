import { fromUnixTime } from "date-fns";

function FutureForecastCard({ weatherData }) {
  const futureForecastData =
    weatherData.locations[Object.keys(weatherData.locations)[0]].values;

  console.log(futureForecastData);

  // const newDate = futureForecastData.map((data, index) => data.datetime);
  // const result = fromUnixTime(newDate);
  // console.log(newDate);

  return (
    <div className="rounded-xl flex items-center w-full ">
      {futureForecastData.map((data, index) => (
        <div className="flex flex-row items-center bg-white mx-2 rounded-2xl border-4 border-slate-300 ">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <p key={index}>{data.temp}</p>
            <p key={index}>{data.conditions}</p>
          </div>

          <div className="p-10 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <p>Future Forecast</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FutureForecastCard;
