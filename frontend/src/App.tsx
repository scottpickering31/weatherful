import "./App.css";
import SearchContainer from "./containers/SearchContainer";
import FutureForecastContainer from "./containers/FutureForecastContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="text-center mt-20 flex flex-row justify-center gap-3">
        <NavBar />
        <h1 className="text-slate-600 text-6xl mb-20 underline underline-offset-8 relative">
          Weather
          <span className="text-orange-500 underline underline-offset-8">
            ful
          </span>
        </h1>
        <img
          src="./public/images/weatherful-app-logo.png"
          alt="weatherful logo"
          className="w-20 h-20 absolute left-5 right-100 top-5"
        />
      </div>
      <SearchContainer />
      <FutureForecastContainer />
    </div>
  );
}

export default App;
