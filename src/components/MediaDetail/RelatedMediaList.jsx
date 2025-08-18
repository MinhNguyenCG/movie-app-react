import React, { useEffect, useState } from "react";
import MovieCard from "@components/MovieCard";

const RelatedMediaList = ({ mediaList = [], title = "More like this" }) => {
  const [currentMediaList, setCurrentMediaList] = useState(mediaList);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    if (isShowMore) {
      setCurrentMediaList(mediaList.slice(0, 32));
    } else {
      setCurrentMediaList(mediaList.slice(0, 6));
    }
  }, [isShowMore, mediaList]);
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">{title}</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {currentMediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
      <p
        className="cursor-pointer text-[1.4vw]"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default RelatedMediaList;
