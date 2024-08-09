import SearchBar from "../components/SearchBar";
import InnerWeatherCardContainer from "./InnerWeatherCardContainer";

function WeatherCardContainer() {
  return (
    <div className="flex justify-center items-center flex-col h-medium">
      <div className="flex flex-row text-center">
        <div>
          <SearchBar />
        </div>
      </div>
      <InnerWeatherCardContainer />
    </div>
  );
}

export default WeatherCardContainer;
