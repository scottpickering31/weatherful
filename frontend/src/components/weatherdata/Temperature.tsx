function Temperature({ convertedTemp }) {
  return (
    <div className="flex flex-col items-center gap-2 text-xl text-center font-bold">
      <img
        src="/images/gifs/temperature.gif"
        className="h-16 w-16"
        alt="Temperature GIF"
      />
      <h2>Current Temperature:</h2>
      <h2 className="text-orange-500 font-bold text-3xl">{convertedTemp}°C</h2>
    </div>
  );
}

export default Temperature;
