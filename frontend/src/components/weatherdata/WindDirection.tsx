function WindDirection({ windArrow, windDigit, direction }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="w-1/3">
        <img
          src="/images/gifs/wind-arrow.gif"
          style={{ transform: `rotate(${windArrow}deg)` }}
        />
      </div>
      <div className="w-2/3">
        <h3>
          Wind Direction:
          <span className="text-orange-500 font-bold">
            <br />
            {direction}° {windDigit}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default WindDirection;
