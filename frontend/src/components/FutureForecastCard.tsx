import Temperature from "./weatherdata/Temperature";

function FutureForecastCard({ weatherData }) {
  const futureForecastData =
    weatherData.locations[Object.keys(weatherData.locations)[0]].values;

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center w-full">
      {futureForecastData.map((data, index) => (
        <div className="flex flex-row items-center bg-white mx-2 rounded-2xl">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <p key={index}>{data.temp}</p>
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <p>Future Forecast</p>
            <Temperature />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FutureForecastCard;
