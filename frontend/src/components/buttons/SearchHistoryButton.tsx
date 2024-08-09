import SearchHistorySVG from "../../../public/images/icons/search-history.svg";

function SearchHistoryButton({ handleClick, showSearchHistoryModal }) {
  return (
    <div>
      {!showSearchHistoryModal && (
        <img
          className="h-10 w-10 cursor-pointer hover:scale-110"
          src={SearchHistorySVG}
          onClick={handleClick}
        ></img>
      )}
    </div>
  );
}

export default SearchHistoryButton;
