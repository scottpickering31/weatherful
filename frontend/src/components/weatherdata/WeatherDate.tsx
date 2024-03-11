function WeatherDate({ setDate }) {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-4xl">{setDate()}</h2>
    </div>
  );
}

export default WeatherDate;
