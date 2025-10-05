import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="px-2 mx-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl m-auto py-6">
        <div className="logo text-2xl font-semibold">
          <span className="text-[#E50914]">&lt;</span>
          <span className="text-[#FFFFFF]">Movie</span>
          <span className="text-[#E50914]">/</span>
          <span className="text-[#FFFFFF]">Library</span>
          <span className="text-[#E50914]">&gt;</span>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6 font-semibold">
            <li>
              <Link to="/" className="text-[#E50914]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/watchlist" className="text-[#E50914]">
                Watchlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
