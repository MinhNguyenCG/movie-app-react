import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

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
