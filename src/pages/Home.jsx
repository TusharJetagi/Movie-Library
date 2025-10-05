import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function Home() {
  const [movieData, setMovieData] = useState([]);

  const fetchMovies = (searchInputValue) => {
    if (!searchInputValue) return;
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInputValue}`)
      .then((res) => {
        setMovieData(res.data.Search || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=partner
`
      )
      .then((res) => {
        // console.log(res.data);
        setMovieData(res.data.Search);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="mx-5 mb-4">
      <SearchBar fetchMovies={fetchMovies} />
      <MovieGrid data={movieData} />
    </div>
  );
}

export default Home;
