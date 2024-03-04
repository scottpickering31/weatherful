import SearchBar from "../components/SearchBar";
import WeatherCardContainer from "./WeatherCardContainer";

function SearchContainer() {
  return (
    <div className="flex items-center bg-white flex-col w-2/3 h-screen rounded-3xl shadow-2xl mobile:w-4/5 tablet:w-3/5 laptop:gap-5 laptop:w-3/5 desktop:gap-5 desktop:w-3/5">
      <h2 className="text-xl text-center p-2 underline underline-offset-8">
        Find the <span className="text-orange-500">Weather</span> in your city:
      </h2>
      <div>
        <SearchBar />
      </div>
      <WeatherCardContainer />
    </div>
  );
}

export default SearchContainer;
