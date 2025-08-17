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
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
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

  const certificate = (
    (movieInfo?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release) => release?.certification)?.certification;

  const trailer_key = (movieInfo?.videos?.results || []).find(
    (video) => video.type === "Trailer",
  )?.key;

  return (
    <div>
      <Banner
        title={movieInfo?.title}
        backdrop_path={movieInfo?.backdrop_path}
        poster_path={movieInfo?.poster_path}
        certificate={certificate}
        crews={
          movieInfo?.credits?.crew.find((crew) => crew.job === "Director")?.name
        }
        cast={movieInfo?.credits?.cast
          .slice(0, 5)
          .map((cast) => cast.name)
          .join(", ")}
        genres={movieInfo?.genres.map((genre) => genre.name).join(", ")}
        release_date={movieInfo?.release_date}
        overview={movieInfo?.overview}
        point={movieInfo?.vote_average}
        trailer_key={trailer_key}
      />
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
