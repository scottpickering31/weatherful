import SearchBar from "../components/SearchBar";
import WeatherCardContainer from "./WeatherCardContainer";

function SearchContainer() {
  return (
    <div className="flex items-center bg-slate-100 border-2 border-black flex-col rounded-3xl shadow-2xl m-5 laptop:gap-5 desktop:gap-5">
      <h2 className="text-xl text-center underline underline-offset-8">
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
