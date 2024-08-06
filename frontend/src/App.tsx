import NavBar from "./components/NavBar";
import { useAppSelector } from "./hooks/useReduxState";
import LoginPage from "./pages/loginpage";
import OuterWeatherCardContainer from "./containers/OuterWeatherCardContainer";
import SettingsModal from "./components/modals/SettingsModal";

function App() {
  const loggedIn = useAppSelector((state) => state.loggedIn.loggedIn);
  const showSettings = useAppSelector(
    (state) => state.showSettings.showSettings
  );

  if (!loggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="flex flex-row items-center h-screen">
      {showSettings ? (
        <SettingsModal />
      ) : (
        <div className="flex h-full w-full">
          <div className="h-full w-1/5">
            <NavBar />
          </div>
          <div className="text-center w-4/5">
            <h1 className="text-slate-600 text-4xl font-bold underline underline-offset-8">
              Weather
              <span className="text-4xl font-bold text-orange-500 underline underline-offset-8">
                ful
              </span>
            </h1>
            <div className="flex items-center bg-slate-100 border-2 border-black flex-col rounded-3xl shadow-2xl m-5 laptop:gap-5 desktop:gap-5">
              <OuterWeatherCardContainer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
