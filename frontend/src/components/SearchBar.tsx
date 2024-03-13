import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherData,
  fetchFutureForecastData,
} from "../state/reducers/weatherDataSlice";
import { setInputData } from "../state/reducers/inputDataSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const inputData = useSelector((state) => state.inputData.city);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeatherData(inputData));
    dispatch(fetchFutureForecastData(inputData));
  };

  return (
    <div className="flex flex-row justify-center items-center mb-5 mt-3 px-5 gap-2">
      <img src="/images/icons/magnifying-glass.svg" className="h-10 w-10" />
      <input
        type="search"
        name="searchbar"
        className="rounded-2xl border-2 border-orange-500 outline-none w-50 p-2 laptop:w-96 desktop:w-96 cursor-pointer"
        placeholder="Search by location..."
        onChange={(e) => dispatch(setInputData(e.target.value))}
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
