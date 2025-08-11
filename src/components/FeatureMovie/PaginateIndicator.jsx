import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        movies.findIndex((movie) => movie.id === activeMovieId) + 1;
      if (nextIndex >= movies.length) {
        setActiveMovieId(movies[0].id);
      } else {
        setActiveMovieId(movies[nextIndex].id);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [movies, activeMovieId, setActiveMovieId]);

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setActiveMovieId(movie.id)}
            className={`h-1.5 w-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 ${
              movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
