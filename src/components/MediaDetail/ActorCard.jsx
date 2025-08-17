import React from "react";
import ImageComponent from "@components/ImageComponent";

const ActorCard = ({ actor }) => {
  return (
    <div className="rounded-lg border border-slate-800 bg-black shadow-sm">
      <ImageComponent
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w276_and_h350_face/${actor.profile_path}`
            : "/public/placeholder_image.png"
        }
        alt={actor.name}
        className="rounded-t-lg"
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{actor.name}</p>
        <p>{actor.character}</p>
        <p>
          {actor.episode_count > 1
            ? `${actor.episode_count} episodes`
            : actor.episode_count === 1
              ? `${actor.episode_count} episode`
              : ""}
        </p>
      </div>
    </div>
  );
};

export default ActorCard;
