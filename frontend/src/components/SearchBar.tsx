import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../state/reducers/weatherDataSlice";
import { useState } from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const [locations, setLocations] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeatherData(locations));
    setLocations("");
  };

  return (
    <div className="flex flex-row justify-center items-center mb-10 mt-3 px-5 gap-2">
      <img src="/public/images/placeholder-image.webp" className="h-10 w-10" />
      <input
        type="search"
        name="searchbar"
        className="rounded-2xl border-2 border-orange-500 outline-none w-50 p-2 laptop:w-96 desktop:w-96"
        placeholder="Search by location..."
        onChange={(e) => setLocations(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
