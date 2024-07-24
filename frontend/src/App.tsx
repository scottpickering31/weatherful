import FutureForecastContainer from "./containers/FutureForecastContainer";
import NavBar from "./components/NavBar";
import { useAppSelector } from "./hooks/useReduxState";
import LoginPage from "./pages/loginpage";
import WeatherCardContainer from "./containers/WeatherCardContainer";

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
        <h1 className="text-slate-600 text-3xl underline underline-offset-8">
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
        <div className="flex items-center bg-slate-100 border-2 border-black flex-col rounded-3xl shadow-2xl m-5 laptop:gap-5 desktop:gap-5">
          <WeatherCardContainer />
        </div>
        <FutureForecastContainer />
      </div>
    </div>
  );
}

export default App;
