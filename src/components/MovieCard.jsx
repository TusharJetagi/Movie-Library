import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { toast } from "react-toastify";

function MovieCard({ data, showAddButton = true }) {
  const { addToWatchlist } = useContext(WatchlistContext);

  const poster =
    data.Poster && data.Poster !== "N/A"
      ? data.Poster
      : "https://placehold.co/600x400";

  const handleAdd = () => {
    addToWatchlist(data);
    toast.success(`${data.Title} added to Watchlist!`);
  };

  return (
    <div className="bg-[#1C1C1C] p-4 rounded w-full shadow-md flex flex-col border border-gray-700 relative">
      <img src={poster} alt="poster" className="w-full h-64 object-cover" />
      <h3 className="text-white font-semibold text-xl my-4">{data.Title}</h3>

      {showAddButton && (
        <button
          onClick={handleAdd}
          className="mt-auto bg-[#E50914] hover:bg-[#FF1A1A] text-white rounded-[3px] py-1 px-4 cursor-pointer"
        >
          Add to Watchlist
        </button>
      )}
    </div>
  );
}

export default MovieCard;
