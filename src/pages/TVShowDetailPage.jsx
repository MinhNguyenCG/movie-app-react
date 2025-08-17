import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "@hooks/useFetch";
import LoadingPage from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import TVShowInformation from "@components/MediaDetail/TVShowInformation";
import SeasonsList from "@components/MediaDetail/SeasonList";

const TVShowDetailPage = () => {
  const { id } = useParams();

  const { data: tvShowInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommandationsResponse } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  const relatedTVShows = recommandationsResponse.results || [];

  if (isLoading) {
    return <LoadingPage />;
  }

  // Don't render if movieInfo is not available
  if (!tvShowInfo || Object.keys(tvShowInfo).length === 0) {
    return <LoadingPage />;
  }

  const certificate = (tvShowInfo?.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvShowInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .map((crew) => crew.name)
    .join(", ");

  const cast = (tvShowInfo.aggregate_credits?.cast || [])
    .slice(0, 5)
    .map((cast) => cast.name)
    .join(", ");

  const trailer_key = (tvShowInfo?.videos?.results || []).find(
    (video) => video.type === "Trailer",
  )?.key;

  return (
    <div>
      <Banner
        title={tvShowInfo?.name}
        backdrop_path={tvShowInfo?.backdrop_path}
        poster_path={tvShowInfo?.poster_path}
        certificate={certificate}
        crews={crews}
        cast={cast}
        genres={tvShowInfo?.genres.map((genre) => genre.name).join(", ")}
        release_date={tvShowInfo?.first_air_date}
        overview={tvShowInfo?.overview}
        point={tvShowInfo?.vote_average}
        trailer_key={trailer_key}
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-7xl gap-[3.5vw] p-6 py-10">
          <div className="flex-[2]">
            <SeasonsList seasons={tvShowInfo.seasons || []} />
            <ActorList
              actorList={(tvShowInfo.aggregate_credits?.cast || []).map(
                (cast) => ({
                  ...cast,
                  character: cast.roles[0]?.character,
                  episode_count: cast.roles[0]?.episode_count,
                }),
              )}
            />
            <RelatedMediaList mediaList={relatedTVShows} />
          </div>
          <div className="mb-4 flex-1">
            <TVShowInformation movieInfo={tvShowInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetailPage;
