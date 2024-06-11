import { useAppSelector } from "../hooks/useReduxState";

function NavBar() {
  const userData = useAppSelector((state) => state.userInfo);
  console.log(userData);
  return (
    <div className="absolute top-0 m-5 right-0">
      <div className="gap-5 text-center">
        <div className="cursor-pointer rounded-full flex flex-row items-center gap-2">
          <img
            src="/images/placeholder-image.webp"
            className="h-16 w-16 rounded-full"
          />
          <div className=" bg-slate-50 rounded-full py-3 px-5 ">
            <p className="text-gray-300 opacity-80">Logged in as:</p>
            <p className="font-bold text-xl">{userData.userInfo[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
