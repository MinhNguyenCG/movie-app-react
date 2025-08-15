import { useParams } from "react-router-dom";
import LoadingPage from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  const { data: recommandationsResponse } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  const relatedMovies = recommandationsResponse.results || [];

  if (isLoading) {
    return <LoadingPage />;
  }

  // Don't render if movieInfo is not available
  if (!movieInfo || Object.keys(movieInfo).length === 0) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-7xl gap-[3.5vw] p-6 py-10">
          <div className="flex-[2]">
            <ActorList actorList={movieInfo?.credits?.cast} />
            <RelatedMediaList mediaList={relatedMovies} />
          </div>
          <div className="mb-4 flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
