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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWUzYzVjNTJjYzUxZmRkNDc3YTg3OTYzYzFiNGFjYyIsIm5iZiI6MTc1NDg3NTA3OS4yOSwic3ViIjoiNjg5OTQ0YzczNWUwZTJkMjEwNmQ2Y2ZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l1UIJwtyWJZ26vDMBmmWa2EZCX47kbFonJ6lT2CcpfQ",
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
