import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "@hooks/useFetch";
import LoadingPage from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";

const TVShowDetailPage = () => {
  const { id } = useParams();

  const { data: TVShowInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=release_dates,credits`,
  });

  const { data: recommandationsResponse } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  const relatedTVShows = recommandationsResponse.results || [];

  if (isLoading) {
    return <LoadingPage />;
  }

  // Don't render if movieInfo is not available
  if (!TVShowInfo || Object.keys(TVShowInfo).length === 0) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Banner mediaInfo={TVShowInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-7xl gap-[3.5vw] p-6 py-10">
          <div className="flex-[2]">
            <ActorList actorList={TVShowInfo?.credits?.cast} />
            <RelatedMediaList mediaList={relatedTVShows} />
          </div>
          <div className="mb-4 flex-1">
            <MovieInformation movieInfo={TVShowInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetailPage;
