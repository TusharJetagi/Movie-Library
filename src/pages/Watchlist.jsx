import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  if (watchlist.length === 0) {
    return (
      <h2 className="text-center text-white mt-10 text-lg font-semibold">
        No movies in your Watchlist yet 📽️
      </h2>
    );
  }

  return (
    <div className="mt-14 max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {watchlist.map((movie) => (
        <div
          key={movie.imdbID}
          className="relative group rounded overflow-hidden shadow-lg"
        >
          {/* Movie Card without Add button */}
          <MovieCard data={movie} showAddButton={false} />

          {/* Remove button (visible on hover for larger screens, always visible on mobile) */}
          <button
            onClick={() => removeFromWatchlist(movie.imdbID)}
            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
