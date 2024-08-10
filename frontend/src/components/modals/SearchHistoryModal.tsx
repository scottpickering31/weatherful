function SearchHistoryModal({ searchHistoryData, setShowSearchHistoryModal }) {
  const { searchHistory = [] } = searchHistoryData;

  const sortedSearchHistory = [...searchHistory].sort(
    (a, b) => b.search_id - a.search_id
  );

  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  return (
    <div className="rounded 2xl border-4 border-slate-300 bg-white shadow-2xl h-medium w-tiny flex-col">
      <div className="w-full border-b-8 border-slate-300 flex flex-row justify-between p-2 h-1/8 items-center">
        <h1 className="w-full text-xl font-bold relative">Search History</h1>
        <p
          className="cursor-pointer font-bold text-3xl rounded-full absolute right-0 top-0 hover:scale-110 px-3 py-1"
          onClick={() => setShowSearchHistoryModal(false)}
        >
          X
        </p>
      </div>
      <div className="h-5/6 overflow-y-auto">
        <ul>
          {sortedSearchHistory.map((data) => (
            <li
              key={data.search_id}
              className="border-b-8 border-slate-200 p-5 rounded-2xl"
            >
              <div className="text-xl underline p-5">
                <strong>Date of Search: </strong>
                {new Date(data.search_date).toLocaleString()}
              </div>
              <div className="flex flex-row justify-around py-5 bg-slate-200 border-black border-2 rounded-2xl">
                <div className="text-lg w-1/2 border-r-8 p-5">
                  <strong>
                    Location: <br />
                  </strong>{" "}
                  {data.location}
                </div>
                <div className="text-lg w-1/2 border-l-8 p-5">
                  <strong>
                    Temperature: <br />
                  </strong>{" "}
                  {fahrenheitToCelsius(data.temperature).toFixed(2)} °C
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchHistoryModal;
