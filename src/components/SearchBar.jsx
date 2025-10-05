import { useState } from "react";

function SearchBar({ fetchMovies }) {
  const [typedInput, setTypedInput] = useState("");

  const handleSearch = () => {
    fetchMovies(typedInput);
    setTypedInput("");
  };

  return (
    <div className="mt-16 max-w-6xl m-auto flex flex-col sm:flex-row items-center gap-3 px-4">
      <input
        type="text"
        placeholder="Search movies by title"
        className="w-full rounded-[3px] py-2 px-4 outline-0 text-[#B3B3B3] bg-[#1C1C1C]"
        value={typedInput}
        onChange={(e) => setTypedInput(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-[#E50914] hover:bg-[#FF1A1A] text-white rounded-[3px] font-semibold py-2 px-6 cursor-pointer w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
