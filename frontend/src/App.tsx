import SearchContainer from "./containers/SearchContainer";
import FutureForecastContainer from "./containers/FutureForecastContainer";
import NavBar from "./components/NavBar";
import { useAppSelector } from "./hooks/useReduxState";
import LoginPage from "./pages/loginpage";

function App() {
  const loggedIn = useAppSelector((state) => state.loggedIn.loggedIn);

  if (!loggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="flex flex-row items-center h-full">
      <div className="w-1/4 mr-3 h-full">
        <NavBar />
      </div>
      <div className="text-center gap-3 w-3/4">
        <h1 className="text-slate-600 text-5xl underline underline-offset-8">
          Weather
          <span className="text-orange-500 underline underline-offset-8">
            ful
          </span>
        </h1>
        {/* <img
          src="./public/images/weatherful-app-logo.png"
          alt="weatherful logo"
          className="w-20 h-20 absolute left-5 right-100 top-5"
        /> */}
        <SearchContainer />
        <FutureForecastContainer />
      </div>
    </div>
  );
}

export default App;
