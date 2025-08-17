import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "@components/ImageComponent";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "@context/ModalProvider";

const Movie = ({ data, trailer_key }) => {
  const navigate = useNavigate();
  const { openPopup } = useContext(ModalContext);

  const iframe = (
    <iframe
      title="Trailer"
      src={`https://www.youtube.com/embed/${trailer_key}`}
      className="aspect-video w-[50vw]"
    />
  );

  return (
    <div className="transition-all duration-500 ease-in-out">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.title}
        className="aspect-video w-full brightness-50 transition-all duration-500 ease-in-out"
        width={1920}
        height={1080}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 text-white transition-all duration-500 ease-in-out sm:w-1/2">
        <p className="mb-2 font-bold transition-all duration-500 ease-in-out sm:text-[2vw]">
          {data.title}
        </p>
        <div className="transition-all duration-500 ease-in-out sm:text-[1.52vw]">
          <p className="inline border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="mt-2">{data.release_date}</p>
        </div>

        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{data.overview}</p>
          </div>

          <div className="mt-4">
            <button
              onClick={() => openPopup(iframe)}
              className="mr-2 cursor-pointer rounded bg-white px-4 py-2 text-[10px] text-black transition-all duration-300 hover:bg-gray-200 lg:text-lg"
            >
              <FontAwesomeIcon icon={faPlay} />
              Play
            </button>
            <button
              onClick={() => navigate(`/movie/${data.id}`)}
              className="cursor-pointer rounded bg-slate-400/35 px-4 py-2 text-[10px] text-white transition-all duration-300 hover:bg-slate-400/50 lg:text-lg"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
