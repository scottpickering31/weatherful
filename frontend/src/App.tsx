import FutureForecastContainer from "./containers/FutureForecastContainer";
import NavBar from "./components/NavBar";
import { useAppSelector } from "./hooks/useReduxState";
import LoginPage from "./pages/loginpage";
import OuterWeatherCardContainer from "./containers/OuterWeatherCardContainer";

function App() {
  const loggedIn = useAppSelector((state) => state.loggedIn.loggedIn);

  if (!loggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="flex flex-row items-center h-screen">
      <div className="h-full w-1/5">
        <NavBar />
      </div>
      <div className="text-center gap-3 w-3/4">
        <h1 className="text-slate-600 text-3xl underline underline-offset-8">
          Weather
          <span className="text-orange-500 underline underline-offset-8">
            ful
          </span>
        </h1>
        <div className="flex items-center bg-slate-100 border-2 border-black flex-col rounded-3xl shadow-2xl m-5 laptop:gap-5 desktop:gap-5">
          <OuterWeatherCardContainer />
        </div>
        <FutureForecastContainer />
      </div>
    </div>
  );
}

export default App;
