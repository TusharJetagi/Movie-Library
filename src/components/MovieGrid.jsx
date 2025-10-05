import MovieCard from "./MovieCard";

function MovieGrid({ data }) {
  // console.log(data);

  return (
    <div className="mt-14 max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
