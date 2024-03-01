function WindSpeed({ weatherData }) {
  const windSpeed =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions;

  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/wind.gif" />
      <h3>
        Wind Speed:{" "}
        <span className="text-orange-500 font-bold">
          {windSpeed.wspd}
          km/h
        </span>{" "}
      </h3>
    </div>
  );
}

export default WindSpeed;
