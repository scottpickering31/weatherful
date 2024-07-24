function WeatherType({ weatherType, iconData }) {
  return (
    <div className="flex flex-col items-center text-center text-xl">
      <img src={iconData} className="h-16 w-16" alt="Weather Icon" />
      <h2 className="font-bold">Current Weather:</h2>
      <h2 className="text-3xl font-bold text-orange-500 mb-5">{weatherType}</h2>
    </div>
  );
}

export default WeatherType;
