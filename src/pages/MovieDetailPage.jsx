import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=release_dates,credits`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWUzYzVjNTJjYzUxZmRkNDc3YTg3OTYzYzFiNGFjYyIsIm5iZiI6MTc1NDg3NTA3OS4yOSwic3ViIjoiNjg5OTQ0YzczNWUwZTJkMjEwNmQ2Y2ZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l1UIJwtyWJZ26vDMBmmWa2EZCX47kbFonJ6lT2CcpfQ",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieInfo(json))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
    </div>
  );
};

export default MovieDetailPage;
