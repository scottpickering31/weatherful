import { useEffect } from "react";
import { useAppSelector } from "../hooks/useReduxState";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "../components/SearchBar";
import InnerWeatherCardContainer from "./InnerWeatherCardContainer";
import SearchHistoryButton from "../components/buttons/SearchHistoryButton";
import SearchHistoryModal from "../components/modals/SearchHistoryModal";
import { useState } from "react";
import axios from "axios";

function WeatherCardContainer() {
  const [showSearchHistoryModal, setShowSearchHistoryModal] = useState(false);
  const [searchHistoryData, setSearchHistoryData] = useState([]);
  const user = useAppSelector((state) => state.userData.userData);

  const handleClick = async () => {
    setShowSearchHistoryModal(!showSearchHistoryModal);
    if (showSearchHistoryModal === false) {
      axios
        .post("http://localhost:3000/api/get-search-history", {
        // .post("https://xsjs2s-3000.csb.app/api/get-search-history", {
          user_id: user.user_id,
        })
        .then((response) => {
          setSearchHistoryData(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch search history data:", error);
        });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-medium relative">
      <div className="flex flex-row text-center">
        <div>
          <SearchBar />
          {showSearchHistoryModal && (
            <div className="absolute right-0 top-0">
              <SearchHistoryModal
                searchHistoryData={searchHistoryData}
                setShowSearchHistoryModal={setShowSearchHistoryModal}
              />
              <Toaster />
            </div>
          )}
          <div className="absolute right-0 top-0 p-2">
            <SearchHistoryButton
              handleClick={handleClick}
              showSearchHistoryModal={showSearchHistoryModal}
            />
          </div>
        </div>
      </div>
      <InnerWeatherCardContainer />
    </div>
  );
}

export default WeatherCardContainer;
