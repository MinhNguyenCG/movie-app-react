import React, { useEffect, useState } from "react";
import ActorCard from "./ActorCard";

const ActorList = ({ actorList = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentActorList, setCurrentActorList] = useState(actorList);

  useEffect(() => {
    if (isShowMore) {
      setCurrentActorList(actorList.slice(0, 32));
    } else {
      setCurrentActorList(actorList.slice(0, 4));
    }
  }, [isShowMore, actorList]);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {currentActorList.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
      <p className="cursor-pointer" onClick={() => setIsShowMore(!isShowMore)}>
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default ActorList;
