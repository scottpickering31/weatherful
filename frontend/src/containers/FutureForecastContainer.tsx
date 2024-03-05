import FutureForecastCard from "../components/FutureForecastCard";

function FutureForecastContainer() {
  return (
    <div className="overflow-y-auto mt-20 mb-20">
      <p>Future Forecastss</p>
      <div>
        <FutureForecastCard />
      </div>
    </div>
  );
}

export default FutureForecastContainer;
