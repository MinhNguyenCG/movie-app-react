import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "@components/ImageComponent";
import { useContext } from "react";
import { ModalContext } from "@context/ModalProvider";

const Banner = ({
  title,
  backdrop_path,
  poster_path,
  certificate,
  crews,
  cast,
  genres,
  release_date,
  overview,
  point,
  trailer_key,
}) => {
  const { openPopup } = useContext(ModalContext);
  const iframe = (
    <iframe
      className="h-[50vh] w-[50vw]"
      src={`https://www.youtube.com/embed/${trailer_key}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
  return (
    <div className="relative overflow-hidden shadow-sm shadow-slate-800">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-20"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-[2.5vw] p-6 py-10 md:flex-row">
        <div className="w-full flex-shrink-0 md:w-1/3">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="h-auto max-h-[70vh] w-full rounded-lg object-contain md:object-cover"
          />
        </div>

        <div className="w-full text-base text-white md:w-2/3 md:text-[1.2vw]">
          <h1 className="mb-2 text-xl font-bold md:text-[2vw]">{title}</h1>
          <div className="flex items-center gap-2">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certificate}
            </span>
            <p>{release_date}</p>
            <p>{genres}</p>
          </div>

          <div className="mt-[2vw] mb-[2vw] flex items-center gap-10">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(point * 10) || 0}
                size={3}
                strokeWidth={0.3}
              />
              <span>Rating</span>
            </div>
            <button
              onClick={() => openPopup(iframe)}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 px-2 py-1 transition-all duration-300 hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              <span>Trailer</span>
            </button>
          </div>

          <div className="mb-[2vw]">
            <p className="mb-2 text-[1.5vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>{crews}</p>
            </div>

            <div>
              <p className="font-bold">Cast</p>
              <p>{cast}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
