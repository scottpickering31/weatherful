import { useAppSelector } from "../../hooks/useReduxState";

function LoadingCard() {
  const loadingCurrentWeather = useAppSelector(
    (state) => state.weatherData.loadingCurrentWeather
  );

  const loadingClasses =
    "border-4 border-slate-300 bg-white shadow-2xl rounded-xl flex items-center justify-center w-small h-small";

  return (
    <div>
      {loadingCurrentWeather ? (
        <div className={loadingClasses}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={loadingClasses}>
          <p className="text-3xl underline-offset-2 underline">
            Please search for Town, City or Postal Code
          </p>
        </div>
      )}
    </div>
  );
}

export default LoadingCard;
