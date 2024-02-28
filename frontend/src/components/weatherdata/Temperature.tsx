function Temperature() {
  return (
    <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
      <img src="/images/gifs/temperature.gif" className="h-16 w-16" />
      <h2>Current Temperature:</h2>
      <h2 className="text-orange-500 fold-bold text-4xl">{temperature}°C</h2>
    </div>
  );
}

export default temperature;
