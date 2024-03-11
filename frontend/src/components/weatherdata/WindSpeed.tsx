function WindSpeed({ windSpeed }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-1/3">
        <img src="/images/gifs/wind.gif" />
      </div>
      <div className="w-2/3">
        <h3>
          Wind Speed:{" "}
          <span className="text-orange-500 font-bold">
            <br />
            {windSpeed} km/h
          </span>
        </h3>
      </div>
    </div>
  );
}

export default WindSpeed;
