function WindSpeed({ windSpeed }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src="/images/gifs/wind.gif" />
      <h3>
        Wind Speed:{" "}
        <span className="text-orange-500 font-bold">{windSpeed} km/h</span>
      </h3>
    </div>
  );
}

export default WindSpeed;
