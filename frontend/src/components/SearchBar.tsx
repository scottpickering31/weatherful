import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../state/reducers/weatherDataSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  const getWeatherData = async () => {
    const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&contentType=json&shortColumnNames=0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_BASE_URL,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Bad API Response: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      dispatch(
        setWeatherData(result.locations[Object.keys(result.locations)[0]])
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center mb-10 mt-3 px-5 gap-2">
      <img src="/public/images/placeholder-image.webp" className="h-10 w-10" />
      <input
        type="search"
        name="searchbar"
        className="rounded-2xl border-2 border-orange-500 outline-none w-50 p-2 laptop:w-96 desktop:w-96"
        placeholder="Search by location..."
        onChange={(e) => setLocation(e.target.value)}
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
