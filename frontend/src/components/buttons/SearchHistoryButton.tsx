import SearchHistorySVG from "../../../public/images/icons/search-history.svg";

function SearchHistoryButton({ handleClick, showSearchHistoryModal }) {
  return (
    <div>
      {!showSearchHistoryModal && (
        <div className="group relative cursor-pointer " onClick={handleClick}>
          <img className="h-16 w-16 " src={SearchHistorySVG}></img>
          <div className="absolute -inset-1.5 flex items-center rounded-full justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm ">Search History</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchHistoryButton;
