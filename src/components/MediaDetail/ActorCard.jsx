import React from "react";

const ActorCard = ({ actor }) => {
  return (
    <div className="rounded-lg border border-slate-800 bg-black shadow-sm">
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w276_and_h350_face/${actor.profile_path}`
            : "/public/placeholder_image.png"
        }
        alt=""
        className="rounded-t-lg"
      />
      <div className="p-3">
        <p className="font-bold">{actor.name}</p>
        <p>{actor.character}</p>
        <p>{actor.episode_count ? `${actor.episode_count} episodes` : ""}</p>
      </div>
    </div>
  );
};

export default ActorCard;
