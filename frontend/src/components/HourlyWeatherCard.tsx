import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import "react-loading-skeleton/dist/skeleton.css";

function HourlyWeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  const setDate = () => {
    const rawDate =
      weatherData.locations[Object.keys(weatherData.locations)[0]]
        .currentConditions.datetime;
    const formattedDate = format(new Date(rawDate), "eee d MMMM y");

    return formattedDate;
  };

  return (
    <div className="border-4 border-slate-300 rounded-xl flex items-center h-small w-full">
      {weatherData ? (
        <div className="flex flex-row items-center">
          <div className="border-r-2 p-5 flex flex-col gap-5 w-1/2">
            <div className="text-center">
              <h2 className="font-semibold text-xl">{setDate()}</h2>
            </div>
            <p>Gerrofff</p>
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-10">
            <p>Data</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center m-12">
          <div className="p-5 flex flex-col gap-10 w-1/2">
            <Skeleton height={80} width={160} />
            <Skeleton height={80} width={160} />
          </div>
          <div className="p-5 w-1/2 text-center flex justify-around font-bold items-start flex-col gap-8">
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
            <Skeleton height={20} width={160} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HourlyWeatherCard;
