import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Banner = ({ mediaInfo }) => {
  const certificate = (
    (mediaInfo?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((release) => release.certification)?.certification;

  return (
    <div className="relative overflow-hidden shadow-sm shadow-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/original/${mediaInfo?.backdrop_path}`}
        alt=""
        className="absolute inset-0 w-full brightness-20"
      />

      <div className="relative mx-auto flex max-w-7xl gap-[2.5vw] p-6 py-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${mediaInfo?.poster_path}`}
          alt=""
          className="flex-1/3 overflow-hidden rounded-lg"
        />

        <div className="flex-2/3 text-[1.2vw] text-white">
          <h1 className="mb-2 text-[2vw] font-bold">{mediaInfo?.title}</h1>
          <div className="flex items-center gap-2">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certificate}
            </span>
            <p>{mediaInfo?.release_date}</p>
            <p>{mediaInfo?.genres.map((genre) => genre.name).join(", ")}</p>
          </div>

          <div className="mt-[2vw] mb-[2vw] flex items-center gap-10">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(mediaInfo?.vote_average * 10) || 0}
                size={3}
                strokeWidth={0.3}
              />
              <span>Rating</span>
            </div>
            <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 px-2 py-1 transition-all duration-300 hover:bg-gray-600">
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              <span>Trailer</span>
            </button>
          </div>

          <div className="mb-[2vw]">
            <p className="mb-2 text-[1.5vw] font-bold">Overview</p>
            <p>{mediaInfo?.overview}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>
                {
                  mediaInfo?.credits?.crew.find(
                    (crew) => crew.job === "Director",
                  )?.name
                }
              </p>
            </div>

            <div>
              <p className="font-bold">Cast</p>
              <p>
                {mediaInfo?.credits?.cast
                  .slice(0, 5)
                  .map((cast) => cast.name)
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
