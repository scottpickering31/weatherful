function NavBar() {
  return (
    <div className="border-t-2 border-r-2 border-b-2 border-slate-700 bg-slate-200 rounded-r-2xl h-full">
      <div className="gap-5 text-center">
        <div className="cursor-pointer rounded-full flex flex-row items-center gap-2">
          <img
            src="/images/placeholder-image.webp"
            className="h-16 w-16 rounded-full"
          />
          <div className=" bg-slate-50 rounded-full py-3 px-5 ">
            <p className="text-gray-300 opacity-80">Logged in as:</p>
            <p className="font-bold text-xl">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
