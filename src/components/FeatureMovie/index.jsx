import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useState, useEffect } from "react";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    };

    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        const popularMovies = data.results.slice(0, 4);
        setMovies(popularMovies);
        setActiveMovieId(popularMovies[0].id);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative overflow-hidden text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <div key={movie.id} className="animate-fadeIn">
            <Movie data={movie} />
          </div>
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovie;
