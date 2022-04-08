const TopBar = () => {
  return (
    <header className="h-[8vh] w-full bg-[#1D1A20]">
      <nav className="mx-auto grid h-full w-11/12 grid-cols-[25%_50%_25%] place-content-center items-center text-white">
        <img
          src="/images/icon-previous.svg"
          alt="go back"
          className="invert-[40%]"
        />
        <div className="relative flex h-fit translate-y-1/3 items-center justify-center ">
          <img src="/images/level-badge.png" className="h-20 object-cover" />
          <span className="absolute text-4xl font-bold text-white">2</span>
        </div>
        <div className="flex h-1/5 items-center justify-end space-x-2 font-bold text-gray-400">
          <img src="/images/icon-coin.svg" className="h-full object-cover" />
          <span>404</span>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
