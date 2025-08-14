import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRelatedMedia, setIsLoadingRelatedMedia] = useState(false);
  const [relatedMediaList, setRelatedMediaList] = useState([]);
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

  useEffect(() => {
    setIsLoadingRelatedMedia(true);
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
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
      .then((json) => setRelatedMediaList(json.results))
      .catch((err) => console.error(err))
      .finally(() => setIsLoadingRelatedMedia(false));
  }, [id]);

  if (isLoading || isLoadingRelatedMedia) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-7xl gap-[2.5vw] p-6 py-10">
          <div className="flex-[2]">
            <ActorList actorList={movieInfo?.credits?.cast} />
            <RelatedMediaList mediaList={relatedMediaList} />
          </div>
          <div className="mb-4 flex-1 text-[1.4vw] font-bold">Information</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
