function WeatherDate({ setDate }) {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-2xl tracking-widest">{setDate()}</h2>
    </div>
  );
}

export default WeatherDate;
