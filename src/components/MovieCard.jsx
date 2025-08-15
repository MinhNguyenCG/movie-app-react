import CircularProgressBar from "./CircularProgressBar";
import { Link } from "react-router-dom";

const MovieCard = ({ media }) => {
  return (
    <Link
      className="rounded-lg border border-slate-800"
      to={`/movie/${media.id}`}
    >
      <div>
        <div className="relative">
          <img
            src={
              media.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
                : "/placeholder.png"
            }
            alt={media.title}
            className="rounded-lg"
          />

          {media.media_type === "tv" && (
            <p className="absolute top-[0.5vw] right-[0.5vw] rounded border bg-slate-900 p-[0.1vw] text-[0.8vw] text-slate-300 shadow-md">
              Tivi Show
            </p>
          )}
        </div>

        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(media.vote_average * 10)}
            strokeColor={
              media.vote_average > 7
                ? "green"
                : media.vote_average > 5
                  ? "yellow"
                  : "red"
            }
          />
          <p className="mt-2 text-[1.2vw] font-bold">
            {media.title || media.name}
          </p>
          <p className="text-[1vw] text-slate-300">
            {media.release_date || media.first_air_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
