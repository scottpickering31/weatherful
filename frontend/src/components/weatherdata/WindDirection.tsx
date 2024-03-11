function WindDirection({ windArrow, windDigit, direction }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img
        src="/images/gifs/wind-arrow.gif"
        style={{ transform: `rotate(${windArrow}deg)` }}
      />
      <h3>
        Wind Direction:
        <span className="text-orange-500 font-bold">
          <br />
          {direction}° {windDigit}
        </span>
      </h3>
    </div>
  );
}

export default WindDirection;
