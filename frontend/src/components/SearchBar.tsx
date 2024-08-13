import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { useEffect } from "react";
import {
  fetchWeatherData,
  fetchFutureForecastData,
} from "../state/reducers/weatherDataSlice";
import { setInputData } from "../state/reducers/inputDataSlice";
import { useWeatherData } from "../hooks/useWeatherData";
import axios from "axios";

function SearchBar() {
  const dispatch = useAppDispatch();
  const inputData = useAppSelector((state) => state.inputData.city);
  const user = useAppSelector((state) => state.userData.userData);
  const weatherData = useWeatherData();

  const handleClick = async (event) => {
    event.preventDefault();
    dispatch(fetchFutureForecastData(inputData));
    await dispatch(fetchWeatherData(inputData));
  };

  useEffect(() => {
    if (weatherData) {
      console.log("Weather data:", weatherData);
      const data = {
        location: weatherData.address,
        temperature: weatherData.currentConditions.temp,
        user_id: user.user_id,
      };
      console.log("data data", data);

      const sendDataToBackend = async () => {
        axios
        .post("http://localhost:3000/api/search-history", data)
        // axios
        //   .post("https://xsjs2s-3000.csb.app/api/search-history", data)
          .then((response) => {
            console.log("Data sent successfully" + response.data);
          })
          .catch((error) => {
            console.log("Failed to send data", error);
          });
      };

      sendDataToBackend();
    } else {
      console.log("Weather data not available");
    }
  }, [weatherData]);

  return (
    <div className="flex flex-row justify-center items-center px-5 gap-2">
      <img
        src="/images/icons/magnifying-glass.svg"
        className="h-14 w-14 cursor-pointer hover:scale-110"
        onClick={handleClick}
      />
      <input
        type="search"
        name="searchbar"
        className="rounded-2xl border-2 border-orange-500 outline-none w-50 p-2 laptop:w-96 desktop:w-96"
        placeholder="Search by location..."
        onChange={(e) => dispatch(setInputData(e.target.value))}
      />
      <button
        onClick={handleClick}
        className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded hover:scale-110"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
